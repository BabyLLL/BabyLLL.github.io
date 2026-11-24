// One adapter for Homecraft, Terry's original site and the blog plugin.
// Owner-facing content stays independent of the visitor's appearance.
import { config } from './config.js';
import { readSiteInfo, siteText } from './door-metadata.js';
import { createTravelSession } from './door-protocol.js';
const site = readSiteInfo(location.href);
export const traveller = createTravelSession(config.skin, '', async () => siteText((await site)?.name));
export const wornSkin = () => traveller.wornSkin();
