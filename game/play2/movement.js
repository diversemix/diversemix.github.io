import { TILE_SIZE, SCREEN_WIDTH, SCREEN_HEIGHT, CellType } from './common.js';

// Module state for auto-movement
let targetGridX = null;
let targetGridY = null;
let autoMoving = false;

// References to game objects (set during setup)
let canvas = null;
let player = null;
let maze = null;
let gameWonGetter = null;

// Path validation - check if there's a clear straight line between start and end
function hasCleanPath(startX, startY, endX, endY, mazeGrid) {
    // Determine direction
    const directionX = startX === endX ? 0 : (endX > startX ? 1 : -1);
    const directionY = startY === endY ? 0 : (endY > startY ? 1 : -1);

    // Check each tile along the path
    let currentX = startX;
    let currentY = startY;

    // Move one step at a time until we reach the target
    while (currentX !== endX || currentY !== endY) {
        currentX += directionX;
        currentY += directionY;

        // Check if out of bounds
        if (currentY < 0 || currentY >= mazeGrid.length ||
            currentX < 0 || currentX >= mazeGrid[0].length) {
            return false;
        }

        // Check if this tile is a wall
        if (mazeGrid[currentY][currentX] === CellType.WALL) {
            return false;
        }
    }

    return true; // Path is clear
}

// Process click or touch input
function processClickOrTouch(canvasX, canvasY) {
    // Bounds check - ensure click is within canvas
    if (canvasX < 0 || canvasX >= SCREEN_WIDTH ||
        canvasY < 0 || canvasY >= SCREEN_HEIGHT) {
        return;
    }

    // Convert pixel coordinates to grid coordinates
    const clickedGridX = Math.floor(canvasX / TILE_SIZE);
    const clickedGridY = Math.floor(canvasY / TILE_SIZE);

    // Get player's current grid position
    const playerGridX = Math.floor(player.x / TILE_SIZE);
    const playerGridY = Math.floor(player.y / TILE_SIZE);

    // Validate click target
    if (gameWonGetter()) return; // Game already won
    if (autoMoving) return; // Already auto-moving
    if (clickedGridX === playerGridX && clickedGridY === playerGridY) return; // Clicked on current position

    // Cardinal direction check - must be in same row OR same column
    const isSameRow = (clickedGridY === playerGridY);
    const isSameColumn = (clickedGridX === playerGridX);

    if (!isSameRow && !isSameColumn) {
        return; // Not in a cardinal direction
    }

    // Validate path is clear
    if (!hasCleanPath(playerGridX, playerGridY, clickedGridX, clickedGridY, maze)) {
        return; // Path blocked by walls
    }

    // Set target and start auto-movement
    targetGridX = clickedGridX;
    targetGridY = clickedGridY;
    autoMoving = true;
}

// Handle canvas click events (desktop)
function handleCanvasClick(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    processClickOrTouch(x, y);
}

// Handle canvas touch events (mobile/tablet)
function handleCanvasTouch(event) {
    event.preventDefault(); // Prevent scrolling
    const touch = event.touches[0];
    const rect = canvas.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    processClickOrTouch(x, y);
}

// Setup touch and click controls
export function setupTouchClickControls(canvasElement, playerObject, mazeGrid, isGameWon) {
    canvas = canvasElement;
    player = playerObject;
    maze = mazeGrid;
    gameWonGetter = isGameWon;

    // Add event listeners
    canvas.addEventListener('click', handleCanvasClick);
    canvas.addEventListener('touchstart', handleCanvasTouch, { passive: false });
}

// Check if auto-movement is active
export function isAutoMoving() {
    return autoMoving;
}

// Get direction for auto-movement (called by game loop)
export function getAutoMoveDirection() {
    if (!autoMoving) {
        return { dx: 0, dy: 0 };
    }

    // Get current player grid position
    const playerGridX = Math.floor(player.x / TILE_SIZE);
    const playerGridY = Math.floor(player.y / TILE_SIZE);

    // Check if we've reached the target
    if (playerGridX === targetGridX && playerGridY === targetGridY) {
        autoMoving = false;
        targetGridX = null;
        targetGridY = null;
        return { dx: 0, dy: 0 };
    }

    // Calculate direction to move toward target
    const moveX = targetGridX > playerGridX ? 1 : (targetGridX < playerGridX ? -1 : 0);
    const moveY = targetGridY > playerGridY ? 1 : (targetGridY < playerGridY ? -1 : 0);

    return { dx: moveX, dy: moveY };
}

// Stop auto-movement (called when keyboard input is detected)
export function stopAutoMovement() {
    autoMoving = false;
    targetGridX = null;
    targetGridY = null;
}
