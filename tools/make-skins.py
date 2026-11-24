# Generate the two 64x64 Minecraft skins (classic 4px arms) pixel-painted
# from the couple's seaside photo: BabyLLL (short black hair, square black
# sunglasses, cream floral shirt) and Xiaoguai (long black hair, cat-eye
# sunglasses, yellow sundress, plumeria flower, gold earring, red lips).
# Usage: python tools/make-skins.py   (writes public/assets/skins/*.png)
from PIL import Image
import os

# Palette (sampled from the photo)
SKIN      = (242, 201, 160, 255)   # his skin
SKIN_HER  = (246, 210, 174, 255)   # hers, a touch fairer
SKIN_SH   = (219, 169, 126, 255)   # skin shade
HAIR      = (27, 27, 33, 255)      # black hair
HAIR_HI   = (44, 44, 52, 255)      # hair sheen
GLASS     = (16, 16, 20, 255)      # sunglasses
CREAM     = (243, 237, 217, 255)   # floral shirt base
CREAM_SH  = (225, 217, 193, 255)
FLORAL    = (233, 166, 58, 255)    # flower yellow
LEAF      = (68, 85, 63, 255)      # leaf green
DRESS     = (233, 166, 58, 255)    # her sundress
DRESS_HI  = (242, 193, 78, 255)
DRESS_SH  = (199, 127, 42, 255)
LIPS      = (196, 69, 60, 255)
GOLD      = (217, 164, 55, 255)    # earring
BEAD      = (178, 58, 50, 255)     # red bead necklace
FLOWER_W  = (250, 250, 245, 255)   # plumeria petals
FLOWER_C  = (242, 193, 78, 255)    # plumeria centre
SHORTS    = (234, 226, 204, 255)   # his shorts
SHOE      = (58, 52, 46, 255)      # shoes
SANDAL    = (250, 248, 240, 255)   # her sandals
STRAP     = (201, 106, 91, 255)    # his bag strap

W = H = 64

def blank():
    img = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    return img, img.load()

def rect(px, x0, y0, w, h, color):
    for y in range(y0, y0 + h):
        for x in range(x0, x0 + w):
            px[x, y] = color

def noise_rect(px, x0, y0, w, h, colors, seed=0):
    # Subtle per-pixel variation so flat areas do not read as plastic.
    for y in range(y0, y0 + h):
        for x in range(x0, x0 + w):
            i = (x * 7 + y * 13 + seed) % len(colors)
            px[x, y] = colors[i % len(colors)]

# ---------- shared head (style adopted from the Labyrinth site) ----------
EYE_WHITE = (250, 250, 250, 255)
PUPIL     = (38, 38, 44, 255)
MOUTH     = (222, 138, 130, 255)   # soft pink, as on the reference face
SPARKLE   = (245, 245, 248, 255)   # the white pixels in the hair

def head(px, skin, long_hair=False):
    # Front face at (8,8); 8x8. Rows: 0-1 fringe with sparkles, 2 forehead,
    # 3-4 white eyes with dark pupils, 5 nose, 6 mouth, 7 chin.
    rect(px, 8, 8, 8, 8, skin)
    noise_rect(px, 8, 8, 8, 2, [HAIR, HAIR, HAIR_HI], 21)          # fringe
    px[10, 8] = SPARKLE; px[13, 9] = SPARKLE                        # sparkles
    rect(px, 8, 10, 1, 1, HAIR); rect(px, 15, 10, 1, 1, HAIR)      # temples
    if long_hair:
        # strands framing the face, down both sides
        rect(px, 8, 10, 1, 6, HAIR); rect(px, 15, 10, 1, 6, HAIR)
        rect(px, 9, 15, 1, 1, HAIR); rect(px, 14, 15, 1, 1, HAIR)
    # eyes: white blocks with a dark pupil on the inner bottom corner
    rect(px, 9, 11, 2, 2, EYE_WHITE); rect(px, 13, 11, 2, 2, EYE_WHITE)
    px[10, 12] = PUPIL; px[14, 12] = PUPIL
    # nose and mouth
    rect(px, 11, 13, 2, 1, SKIN_SH)
    rect(px, 11, 14, 2, 1, MOUTH)
    # sides (0,8)=right, (16,8)=left, back (24,8): full hair with variation
    for x0, seed in [(0, 31), (16, 32), (24, 33)]:
        noise_rect(px, x0, 8, 8, 8, [HAIR, HAIR, HAIR, HAIR_HI], seed)
        if not long_hair:
            # a short crop still shows a hairline above the nape/cheeks
            rect(px, x0, 14, 8, 2, skin if x0 != 24 else SKIN_SH)
            rect(px, x0, 13, 8, 1, HAIR)
    # top (8,0) and bottom (16,0)
    noise_rect(px, 8, 0, 8, 8, [HAIR, HAIR, HAIR_HI], 41)
    px[11, 1] = SPARKLE; px[14, 3] = SPARKLE
    rect(px, 16, 0, 8, 8, HAIR)

def hat_long_hair(px):
    # Hat layer: volume + the fall of long hair. Front (40,8): fringe rows and
    # two side strands. Sides and back (32,8),(48,8),(56,8): full height black.
    rect(px, 40, 8, 8, 2, HAIR)
    rect(px, 40, 8, 1, 6, HAIR); rect(px, 47, 8, 1, 6, HAIR)
    rect(px, 41, 8, 6, 1, HAIR_HI)
    for x0 in (32, 48, 56):
        rect(px, x0, 8, 8, 8, HAIR)
        rect(px, x0, 8, 8, 1, HAIR_HI)
    noise_rect(px, 40, 0, 8, 8, [HAIR, HAIR, HAIR_HI], 43)  # hat top
    px[43, 1] = SPARKLE; px[46, 2] = SPARKLE                # sparkles survive the hat layer

def hat_short_hair(px):
    # Hat layer gives the short hair its volume: a puffed top and the first
    # rows on every side, so the head reads as haired, not painted on.
    noise_rect(px, 40, 0, 8, 8, [HAIR_HI, HAIR_HI, HAIR], 45)
    px[41, 1] = SPARKLE; px[45, 2] = SPARKLE
    for x0 in (32, 48, 56):
        rect(px, x0, 8, 8, 3, HAIR)
    rect(px, 40, 8, 8, 2, HAIR)

# ---------- BabyLLL ----------
BASE_PATH = os.path.join(os.path.dirname(__file__), 'labyrinth-base.png')

def load_base():
    # The body comes from the reference site's skin (gdg.nith.ac.in/labyrinth,
    # assets/me.png): black tee, dark jeans, white shoes. Only the head is
    # repainted on top of it, so both characters wear the same outfit.
    img = Image.open(BASE_PATH).convert('RGBA')
    return img, img.load()

def clear_overlays(px):
    # Wipe every overlay layer so nothing from the base skin peeks through.
    for (x0, y0) in [(32, 0), (16, 32), (40, 32), (0, 32), (48, 48), (0, 48)]:
        rect(px, x0, y0, 16, 16, (0, 0, 0, 0))

# ---------- BabyLLL ----------
def make_babylll():
    img, px = load_base()
    clear_overlays(px)
    head(px, SKIN)
    hat_short_hair(px)
    return img

# ---------- Xiaoguai ----------
def make_xiaoguai():
    img, px = load_base()
    clear_overlays(px)
    head(px, SKIN_HER, long_hair=True)
    hat_long_hair(px)
    # jacket layer: hair falls over the shoulders and down the back
    rect(px, 16, 36, 4, 4, HAIR)
    rect(px, 28, 36, 4, 4, HAIR)
    rect(px, 32, 36, 8, 5, HAIR)
    rect(px, 32, 36, 8, 1, HAIR_HI)
    rect(px, 20, 36, 8, 2, HAIR)
    px[20, 36] = (0, 0, 0, 0); px[27, 36] = (0, 0, 0, 0)  # keep the neck open
    px[33, 14] = GOLD                                     # gold earring
    return img

out = os.path.join(os.path.dirname(__file__), '..', 'public', 'assets', 'skins')
os.makedirs(out, exist_ok=True)
make_babylll().save(os.path.join(out, 'babylll.png'))
make_xiaoguai().save(os.path.join(out, 'xiaoguai.png'))
print('skins written to', os.path.abspath(out))
