// Everywhere outside the block grid that the player can stand on: a pier,
// mountain, roof, parapet and tree crowns. Each source lists
// the surfaces over a point; on foot the player keeps to the one within a step of
// their feet, so where two surfaces meet the player walks from one onto the other.
// Sources may also describe what is solid (for walking and for flight), answer
// clicks, and offer places to land.
// Up a step of 0.7 m; down a drop of up to 1.3 m (off a parapet onto the roof).
const STEP = 0.7, DROP = 1.3, RADIUS = 0.3, BODY = 1.8;

export function createGround(sources) {
  const found = [];
  let nav = null;
  // Every surface over (x, z), in a list that the next call reuses.
  function levels(x, z, base = false) {
    found.length = 0; for (const s of sources) s.levels(x, z, found);
    if (base && nav && !nav.isBlocked(x, z)) found.push({ y: nav.heightAt(x, z), site: null });
    return found;
  }
  function highest(x, z, ok, base = false, prior = null) {
    let best = null;
    const rankOf = q => (q.distance ?? 0) + .03 * Math.abs(q.y - (prior.guided ? prior.expectedY : prior.y));
    for (const l of levels(x, z, base)) {
      if (!ok(l)) continue;
      const same = prior?.route && l.route === prior.route;
      if (same) {
        // Keep the nearby stretch underfoot through a turn. Taking the highest
        // overlapping slab could jump to a later pass and trap the descent.
        const rank = rankOf(l), bestRank = best && rankOf(best);
        if (!best || best.route !== prior.route || rank < bestRank - .001 ||
          (Math.abs(rank - bestRank) <= .001 && Math.abs(l.y - prior.y) < Math.abs(best.y - prior.y))) best = l;
      } else if (!best || (!prior?.route || best.route !== prior.route) && (l.y > best.y + .002 || (Math.abs(l.y - best.y) <= .002 && l.tread))) best = l;
    }
    return best && { y: best.y, site: best.site, tread: !!best.tread, route: best.route, index: best.index, travel: prior?.travel };
  }
  // The surface the player would be on at (x, z) with their feet at `near`.
  const surfaceAt = (x, z, near, prior = null) => highest(x, z, l => l.y <= near + STEP && l.y >= near - DROP, true, prior);
  // The highest surface at or below `top`.
  const topAt = (x, z, top = Infinity) => highest(x, z, l => l.y <= top + 0.01);
  // Something solid in the way, or a surface overhead too low to walk under
  // (the stair's treads, seen from its base).
  function blocked(x, z, here) {
    for (const s of sources) if (s.obstructed?.(x, z, here.y)) return true;
    for (const l of levels(x, z)) if (l.y > here.y + STEP && l.y < here.y + BODY && !(l.tread && here.tread)) return true;
    return false;
  }
  // Where a body fits at (x, z) with its feet near `near`: the surface, or null.
  function canStand(x, z, near, prior = null) {
    const here = surfaceAt(x, z, near, prior);
    if (!here) return null;
    function fits(candidate) {
      if (blocked(x, z, candidate)) return false;
      const reference = prior?.guided ? { ...candidate, index: prior.index, expectedY: prior.expectedY, guided: true }
        : candidate.route ? { ...candidate, travel: null, support: true } : candidate;
      for (let a = 0; a < 8; a++) {
        const px = x + Math.cos(a * Math.PI / 4) * RADIUS, pz = z + Math.sin(a * Math.PI / 4) * RADIUS;
        const g = surfaceAt(px, pz, candidate.y, reference);
        if (!g || blocked(px, pz, g)) return false;
      }
      return true;
    }
    if (fits(here)) return here;
    // At a broad junction, the centre may be above two slabs but only one
    // supports the entire body. Try that other surface before rejecting a step.
    if (!here.route) return null;
    const alternatives = [...levels(x, z)].filter(l => l.route === here.route && l.y <= near + STEP && l.y >= near - DROP).sort((a, b) => Math.abs(a.y - near) - Math.abs(b.y - near));
    for (const l of alternatives) if (Math.abs(l.y - here.y) > .002 && fits(l)) return { ...l, travel: prior?.travel };
    return null;
  }
  // Slide along edges and obstacles, as the house's grid does. Returns the
  // surface underfoot afterwards.
  function move(pos, dx, dz, near, prior = null) {
    let here = prior || surfaceAt(pos.x, pos.z, near) || { y: near, site: null, tread: false }, g;
    const guide = prior?.guided ? prior : null;
    const n = Math.max(1, Math.ceil(Math.hypot(dx, dz) / 0.1));
    for (let k = 0; k < n; k++) {
      const sx = dx / n, sz = dz / n;
      if ((g = canStand(pos.x + sx, pos.z + sz, here.y, guide || here))) { pos.x += sx; pos.z += sz; here = g; }
      else if ((g = canStand(pos.x + sx, pos.z, here.y, guide || here))) { pos.x += sx; here = g; }
      else if ((g = canStand(pos.x, pos.z + sz, here.y, guide || here))) { pos.z += sz; here = g; }
    }
    return here;
  }
  // The closest place to (x, z) where a body fits near height `near`.
  function nearestStand(x, z, near) {
    let g = canStand(x, z, near);
    if (g) return { x, z, ...g };
    for (let r = 0.25; r <= 3; r += 0.25) for (let a = 0; a < 16; a++) {
      const px = x + Math.cos((a / 16) * Math.PI * 2) * r, pz = z + Math.sin((a / 16) * Math.PI * 2) * r;
      if ((g = canStand(px, pz, near))) return { x: px, z: pz, ...g };
    }
    return null;
  }
  const collides = (x, feet, z) => sources.some(s => s.collides?.(x, feet, z));
  function pick(ray) {
    let best = null;
    for (const s of sources) { const hit = s.pick?.(ray); if (hit && (!best || hit.t < best.t)) best = hit; }
    return best;
  }
  function ladderAt(x, y, z) { for (const s of sources) { const ladder = s.ladderAt?.(x, y, z); if (ladder) return ladder; } return null; }
  const spots = () => sources.flatMap(s => s.spots?.() ?? []);
  return { surfaceAt, topAt, canStand, ladderAt, move, nearestStand, collides, pick, spots, setNav(value) { nav = value; } };
}
