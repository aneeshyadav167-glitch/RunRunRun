// ======================================
// CONFIG.JS
// Global Game Configuration
// ======================================

const CONFIG = {

    // ----------------------------
    // Screen
    // ----------------------------

    WIDTH: 9,

    HEIGHT: 16,

    // ----------------------------
    // Road
    // ----------------------------

    ROAD_WIDTH: 9,

    LANE_COUNT: 3,

    LANE_WIDTH: 3,

    TILE_LENGTH: 20,

    INITIAL_TILES: 18,

    // ----------------------------
    // Player
    // ----------------------------

    PLAYER_START_X: 0,

    PLAYER_START_Y: 0,

    PLAYER_START_Z: 6,

    PLAYER_SPEED: 0.22,

    LANE_CHANGE_SPEED: 0.18,

    JUMP_FORCE: 0.34,

    GRAVITY: 0.018,

    // ----------------------------
    // Camera
    // ----------------------------

    CAMERA_HEIGHT: 6,

    CAMERA_DISTANCE: 9,

    CAMERA_SMOOTH: 0.08,

    // ----------------------------
    // Objects
    // ----------------------------

    COIN_VALUE: 10,

    OBJECT_DISTANCE: 8,

    COIN_CHANCE: 0.45,

    STONE_CHANCE: 0.30,

    GATE_CHANCE: 0.25,

    // ----------------------------
    // Colors
    // ----------------------------

    SKY_COLOR: 0x87CEEB,

    ROAD_COLOR: 0x404040,

    GRASS_COLOR: 0x42b84f,

    LINE_COLOR: 0xffffff,

    // ----------------------------
    // Buildings
    // ----------------------------

    BUILDING_MIN_HEIGHT:4,

    BUILDING_MAX_HEIGHT:12,

    BUILDING_MIN_WIDTH:2,

    BUILDING_MAX_WIDTH:4,

    // ----------------------------
    // Lights
    // ----------------------------

    AMBIENT_INTENSITY:1.2,

    SUN_INTENSITY:1.5,

    // ----------------------------
    // UI
    // ----------------------------

    START_SCORE:0,

    START_DISTANCE:0

};

// ======================================
// Lane Positions
// ======================================

CONFIG.LANES=[

-CONFIG.LANE_WIDTH,

0,

CONFIG.LANE_WIDTH

];

// ======================================
// Freeze Config
// ======================================

Object.freeze(CONFIG);

// ======================================
// Export
// ======================================

window.CONFIG=CONFIG;
