// =====================================================
// CONFIG.JS (FINAL)
// Global game configuration
// =====================================================

const CONFIG = {

  // -----------------------------
  // Screen
  // -----------------------------
  ASPECT_WIDTH: 9,
  ASPECT_HEIGHT: 16,

  // -----------------------------
  // Road
  // -----------------------------
  ROAD_WIDTH: 9,
  LANE_COUNT: 3,
  LANE_WIDTH: 3,
  TILE_LENGTH: 24,
  INITIAL_TILES: 14,
  ROAD_SPEED: 0.32,

  // -----------------------------
  // World
  // -----------------------------
  WORLD_FORWARD_Z: -24,
  WORLD_RECYCLE_Z: 18,

  // -----------------------------
  // Player
  // -----------------------------
  PLAYER_START: { x: 0, y: 0, z: 6 },
  LANE_CHANGE_SMOOTH: 0.18,
  JUMP_FORCE: 0.36,
  GRAVITY: 0.018,

  // -----------------------------
  // Camera
  // -----------------------------
  CAMERA_HEIGHT: 6,
  CAMERA_DISTANCE: 9,
  CAMERA_LOOK_AHEAD: -8,
  CAMERA_SMOOTH: 0.08,

  // -----------------------------
  // Objects
  // -----------------------------
  OBJECT_SPACING: 8,
  COIN_VALUE: 10,
  COIN_CHANCE: 0.45,
  STONE_CHANCE: 0.30,
  GATE_CHANCE: 0.25,

  // -----------------------------
  // Buildings
  // -----------------------------
  BUILDING_MIN_H: 4,
  BUILDING_MAX_H: 12,
  BUILDING_MIN_W: 2,
  BUILDING_MAX_W: 4,
  BUILDING_DEPTH: 3,
  CITY_OFFSET: 14,

  // -----------------------------
  // Lighting
  // -----------------------------
  AMBIENT_INTENSITY: 1.2,
  SUN_INTENSITY: 1.5,

  // -----------------------------
  // Colors
  // -----------------------------
  SKY: 0x87CEEB,
  ROAD: 0x3f3f3f,
  GRASS: 0x43b556,
  LINE: 0xffffff,

  // -----------------------------
  // UI
  // -----------------------------
  START_SCORE: 0,
  START_DISTANCE: 0
};

// Lane center positions
CONFIG.LANES = [
  -CONFIG.LANE_WIDTH,
   0,
   CONFIG.LANE_WIDTH
];

// Freeze to avoid accidental changes
Object.freeze(CONFIG);

// Global namespace (single source of truth)
window.Game = window.Game || {};
window.Game.CONFIG = CONFIG;