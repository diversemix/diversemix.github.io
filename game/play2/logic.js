import {
    TILE_SIZE,
    SCREEN_WIDTH,
    SCREEN_HEIGHT,
    CellType,
    PATH_COLOR,
    WALL_COLOR,
    WALL_BORDER_COLOR,
    GOAL_COLOR,
    PLAYER_COLOR,
    BACKGROUND_COLOR,
    WIN_TEXT_COLOR,
    WIN_INSTRUCTION_COLOR,
    TEXT_COLOR,
    middleText
} from './common.js';

// Draw the win/end game screen
export function endGame(ctx) {
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    middleText(ctx, 'You Win!', '74px Arial', 0, WIN_TEXT_COLOR);
    middleText(ctx, 'Press R or Double-Tap to restart', '36px Arial', 60, WIN_INSTRUCTION_COLOR);
}

export function showTime(ctx) {
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, SCREEN_HEIGHT, SCREEN_WIDTH, SCREEN_HEIGHT+50);
    ctx.font = '18px Arial';
    ctx.fillStyle = TEXT_COLOR;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText('test', 20, SCREEN_HEIGHT+20);
}

// Draw the player
export function drawPlayer(player, ctx) {
    ctx.fillStyle = PLAYER_COLOR;
    ctx.beginPath();
    ctx.arc(
        player.x + TILE_SIZE / 2,
        player.y + TILE_SIZE / 2,
        TILE_SIZE / 3,
        0,
        2 * Math.PI
    );
    ctx.fill();
}

// Draw the maze
export function drawMaze(ctx, maze) {
    for (let rowIdx = 0; rowIdx < maze.length; rowIdx++) {
        for (let colIdx = 0; colIdx < maze[rowIdx].length; colIdx++) {
            const cell = maze[rowIdx][colIdx];
            const x = colIdx * TILE_SIZE;
            const y = rowIdx * TILE_SIZE;

            if (cell === CellType.WALL) {
                ctx.fillStyle = WALL_COLOR;
                ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
                ctx.strokeStyle = WALL_BORDER_COLOR;
                ctx.strokeRect(x, y, TILE_SIZE, TILE_SIZE);
            } else if (cell === CellType.GOAL) {
                ctx.fillStyle = GOAL_COLOR;
                ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
            } else {  // CellType.PATH
                ctx.fillStyle = PATH_COLOR;
                ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
            }
        }
    }
}
