export default class Game {
      isBlocked (board_state, x, y) {
            console.log("check if occupied");
            const piece = board_state.find((p) => p.x === x && p.y === y);
            if (piece) {
                  return true;
            } else {
                  return false;
            }
      }
      checkMove(x0, y0, x, y, piece, color, board_state) {
            console.log(`Previous location: (${x0}, ${y0})`)
            console.log(`Current location: (${x}, ${y})`)
            console.log(`Piece: (${piece})`)
            console.log(`Color (${color})`)

            if (piece === "pawn" && color === "light") {
                  if (y0 === 1) {
                        if (x0 === x && (y - y0 === 1 || y - y0 === 2)) {
                              if (!this.isBlocked(board_state, x, y) && !this.isBlocked(board_state, x, y-1)) {
                                    return true;
                              }
                        }
                  } else {
                        if (x0 === x && (y - y0 === 1)) {
                              if (!this.isBlocked(board_state, x, y)) {
                                    return true;
                              }
                        }
                  }
            } else if (piece === "pawn" && color === "dark") {
                  if (y0 === 6) {
                        if (x0 === x && (y0 - y === 1 || y0 - y === 2)) {
                              if (!this.isBlocked(board_state, x, y) && !this.isBlocked(board_state, x, y+1)) {
                                    return true;
                              }
                        }
                  } else {
                        if (x0 === x && (y0 - y === 1)) {
                              if (!this.isBlocked(board_state, x, y)) {
                                    return true;
                              }
                        }
                  }
            }
            return false;
      }
}