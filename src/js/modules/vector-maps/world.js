import jsVectorMap from "jsvectormap";

// Ensure UMD map bundle can find jsVectorMap
globalThis.jsVectorMap = jsVectorMap;

// Side-effect: register world map (same geometry as vendored 102KB world.js)
import "jsvectormap/dist/maps/world.js";
