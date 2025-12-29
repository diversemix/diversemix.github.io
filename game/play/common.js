// Constants
export const TILE_SIZE = 30;
export const SCREEN_WIDTH = 600;
export const SCREEN_HEIGHT = 450;
export const FPS = 60;

// Cell type enum
export const CellType = Object.freeze({
    PATH: 0,
    WALL: 1,
    GOAL: 2
});

// Color definitions
export const Colors = Object.freeze({
    BLACK: '#000000',
    WHITE: '#FFFFFF',
    BLUE: '#3296FF',
    GREEN: '#32FF64',
    RED: '#FF3232',
    GRAY: '#646464'
});

// Color mappings for game elements
export const PATH_COLOR = Colors.WHITE;
export const WALL_COLOR = Colors.GRAY;
export const WALL_BORDER_COLOR = Colors.BLACK;
export const GOAL_COLOR = Colors.GREEN;
export const PLAYER_COLOR = Colors.BLUE;
export const BACKGROUND_COLOR = Colors.BLACK;
export const WIN_TEXT_COLOR = Colors.RED;
export const WIN_INSTRUCTION_COLOR = Colors.WHITE;

// Player factory function
export function createPlayer(x, y, step_size = TILE_SIZE) {
    return { x, y, step_size };
}

// Helper function to draw text in the middle of the screen
export function middleText(ctx, text, font, yOffset = 0, color = WIN_INSTRUCTION_COLOR) {
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const metrics = ctx.measureText(text);
    const textHeight = parseInt(font);

    ctx.fillText(
        text,
        SCREEN_WIDTH / 2,
        SCREEN_HEIGHT / 2 + yOffset - textHeight / 2
    );
}
