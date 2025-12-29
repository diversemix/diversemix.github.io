import { TILE_SIZE, SCREEN_WIDTH, SCREEN_HEIGHT, FPS, CellType, BACKGROUND_COLOR, createPlayer } from './common.js';
import { endGame, drawPlayer, drawMaze } from './logic.js';
import { MAZE } from './maze.js';

// Game state
let canvas;
let ctx;
let player;
let gameWon = false;
let dx = 0;
let dy = 0;
let friction = 3;
let frictionCounter = 0;

// Initialize game
function init() {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');

    // Create player at starting position
    player = createPlayer(TILE_SIZE, TILE_SIZE);

    // Set up keyboard controls
    setupKeyboardControls();

    // Start game loop
    gameLoop();
}

// Move player
function movePlayer(player, dx, dy, maze) {
    if (gameWon) return true;
    const newX = player.x + dx * player.step_size;
    const newY = player.y + dy * player.step_size;

    // Check boundaries
    const gridX = Math.floor(newX / TILE_SIZE);
    const gridY = Math.floor(newY / TILE_SIZE);

    // Check if the new position is valid (not a wall)
    if (gridY >= 0 && gridY < maze.length && gridX >= 0 && gridX < maze[0].length) {
        if (maze[gridY][gridX] !== CellType.WALL) {  // Not a wall
            player.x = newX;
            player.y = newY;
            // console.log(`Moved to (${player.x}, ${player.y})`);
            // console.log(`Grid position: (${gridX}, ${gridY}) value =${maze[gridY][gridX]}`);
            return maze[gridY][gridX] === CellType.GOAL;  // Return true if goal reached
        }
    }
    return false;
}

// Set up keyboard controls
function setupKeyboardControls() {
    document.addEventListener('keydown', (event) => {
        if (!gameWon) {
            switch(event.key.toLowerCase()) {
                case 'arrowup':
                case 'w':
                    dy = -1;
                    break;
                case 'arrowdown':
                case 's':
                    dy = 1;
                    break;
                case 'arrowleft':
                case 'a':
                    dx = -1;
                    break;
                case 'arrowright':
                case 'd':
                    dx = 1;
                    break;
            }
        }

        // Reset game
        if (event.key.toLowerCase() === 'r') {
            player = createPlayer(TILE_SIZE, TILE_SIZE);
            gameWon = false;
            dx = 0;
            dy = 0;
        }
    });

    document.addEventListener('keyup', (event) => {
        if (!gameWon) {
            switch(event.key.toLowerCase()) {
                case 'arrowup':
                case 'w':
                    if (dy === -1) dy = 0;
                    break;
                case 'arrowdown':
                case 's':
                    if (dy === 1) dy = 0;
                    break;
                case 'arrowleft':
                case 'a':
                    if (dx === -1) dx = 0;
                    break;
                case 'arrowright':
                case 'd':
                    if (dx === 1) dx = 0;
                    break;
            }
        }
    });
}

// Game loop
function gameLoop() {
    // Update game state
    frictionCounter++;
    if (frictionCounter === friction) {
        frictionCounter = 0;
        gameWon = movePlayer(player, dx, dy, MAZE);
    }

    if (gameWon) {
        endGame(ctx);
    } else {
        // Drawing
        ctx.fillStyle = BACKGROUND_COLOR;
        ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
        drawMaze(ctx, MAZE);
        drawPlayer(player, ctx);
    }

    // Continue game loop
    setTimeout(() => requestAnimationFrame(gameLoop), 1000 / FPS);
}

// Start game when page loads
window.addEventListener('load', init);
