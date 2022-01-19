export default class Game {
      isBlocked(board_state, x, y) {
            // finds the new value of x and y after the drop function is executed.
            const piece = board_state.find((p) => p.x === x && p.y === y);
            if (piece) {
                  return true;
            } else {
                  return false;
            }
      }

      isOccupiedbyOpponent(x, y, board_state, color) {
            const piece = board_state.find((p) => p.x === x && p.y === y && p.color !== color);
            if (piece) {
                  piece.image = "";
                  return true;
            } else {
                  return false;
            }
             
      }

      checkMove(x0, y0, x, y, piece, color, board_state) {
            // console.log(`Previous location: (${x0}, ${y0})`);
            // console.log(`Current location: (${x}, ${y})`);
            // console.log(`Piece: (${piece})`);
            // console.log(`Color (${color})`);

            // is the row number
            var is_light = color === "light" ? true : false;
            var row_num = is_light ? 1 : 6;
            // checks delta value of pawn if chosen to move up/down depending on color. 
            var delta_initial = is_light ? 1 : -1;
            var delta_value =  is_light ? y - y0 : y0 - y;

            // console.log(x-x0, y-y0);
            
            if (piece === "pawn") {
                  if (x0 === x && delta_value === 2 && y0 === row_num) {
                        if (!this.isBlocked(board_state, x, y) && !this.isBlocked(board_state, x, y - delta_initial)) {
                              return true;
                        }
                  } else if (x0 === x && (delta_value === 1)) {
                        if (!this.isBlocked(board_state, x, y)) {
                              return true;
                        }
                  } else if (x - x0 === -1 && y - y0 === delta_initial) {
                        console.log("upper / bottom left")
                        if (this.isOccupiedbyOpponent(x, y, board_state, color)) {
                              return true;
                        }
                  } else if (x - x0 === 1 && y - y0 === delta_initial) {
                        console.log("upper / bottom rigth");
                        if (this.isOccupiedbyOpponent(x, y, board_state, color)) {
                              return true;
                        }
                  }
            }



            return false;
      }
}