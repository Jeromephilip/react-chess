import React from 'react';
import {useRef, useState} from 'react';
// import { render } from 'react-dom';
import './board.css';
import Square from './square.js';
import Game from  './../game/game';

// const rows = [8, 7, 6, 5, 4, 3, 2, 1];
// const cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const len = 8;

var piece_positions = []

for (var i=0; i < 8; i++) {
    piece_positions.push({color: "dark", piece: "pawn", image: "assets/chess-pieces/dark_pawn.png", x: i, y: 6})
}

for (var m=0; m < 8; m++) {
    piece_positions.push({color: "light",piece: "pawn", image: "assets/chess-pieces/light_pawn.png", x: m, y: 1})
}

var color = "light";
var row = 0;
for (var k=0; k < 2; k++) {
    piece_positions.push({color: `${color}`, piece: `rook`, image: `assets/chess-pieces/${color}_rook.png`, x: 0, y: row})
    piece_positions.push({color: `${color}`, piece: `horse`, image: `assets/chess-pieces/${color}_horse.png`, x: 1, y: row})
    piece_positions.push({color: `${color}`, piece: `bishop`, image: `assets/chess-pieces/${color}_bishop.png`, x: 2, y: row})
    piece_positions.push({color: `${color}`, piece: `queen`, image: `assets/chess-pieces/${color}_queen.png`, x: 3, y: row})
    piece_positions.push({color: `${color}`, piece: `king`, image: `assets/chess-pieces/${color}_king.png`, x: 4, y: row})
    piece_positions.push({color: `${color}`, piece: `bishop`, image: `assets/chess-pieces/${color}_bishop.png`, x: 5, y: row})
    piece_positions.push({color: `${color}`, piece: `horse`, image: `assets/chess-pieces/${color}_horse.png`, x: 6, y: row})
    piece_positions.push({color: `${color}`, piece: `rook`, image: `assets/chess-pieces/${color}_rook.png`, x: 7, y: row})
    color = "dark";
    row = 7;
}



function Board() {
    const [picked_piece, movePiece] = useState(null);
    const [gridX, setGridX] = useState(0);
    const [gridY, setGridY] = useState(0);
    const [pieces, setPieces] = useState(piece_positions);
    const board_ref = useRef(null);
    const game = new Game();

    var grid = [];

    for (var i=len-1; i>=0; i--) { // Number = ROW
        for (var j=0; j<len; j++) { // Letter = COL
            // let position = cols[j].concat("",rows[i].toString())
            var n = i + j + 2;
            var piece_img = undefined
            
            piece_positions.forEach((p)=> {
                if (p.x === j && p.y === i) {
                    piece_img = p.image;
                }
            })
            grid.push(<Square key={`${j},${i}`} color={n} image={piece_img}/>)
        }
    }

    function pick(e) {
        var element = e.target
        const chessboard = board_ref.current;
        if (element.classList.contains("piece") && chessboard) {
            const gridX = Math.floor((e.clientX - chessboard.offsetLeft)/100);
            const gridY = Math.abs(Math.ceil((e.clientY - chessboard.offsetTop-800)/100));
            setGridX(gridX);
            setGridY(gridY);
            var x = e.clientX - 50;
            var y = e.clientY - 50;
            element.style.position = "absolute";
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;
            movePiece(element)
        } 

    }

    function move(e) {
        const chessboard = board_ref.current;
        if (picked_piece && chessboard) {
            const minX = chessboard.offsetLeft - 25;
            const minY = chessboard.offsetTop - 25;
            const maxX = chessboard.offsetLeft + chessboard.clientWidth - 75;
            const maxY = chessboard.offsetTop + chessboard.clientHeight - 75;
            const x = e.clientX - 50;
            const y = e.clientY - 50;
            picked_piece.style.position = "absolute";

            //If x is smaller than minimum amount
            if (x < minX) {
                picked_piece.style.left = `${minX}px`;
            }
            //If x is bigger than maximum amount
            else if (x > maxX) {
                picked_piece.style.left = `${maxX}px`;
            }
            //If x is in the constraints
            else {
                picked_piece.style.left = `${x}px`;
            }

            //If y is smaller than minimum amount
            if (y < minY) {
                picked_piece.style.top = `${minY}px`;
            }
            //If y is bigger than maximum amount
            else if (y > maxY) {
                picked_piece.style.top = `${maxY}px`;
            }
            //If y is in the constraints
            else {
                picked_piece.style.top = `${y}px`;
            }
        }
 
    }

    function drop(e) {
        const chessboard = board_ref.current;
        if (picked_piece && chessboard) {
            const x = Math.floor((e.clientX - chessboard.offsetLeft)/100);
            const y = Math.abs(Math.ceil((e.clientY - chessboard.offsetTop-800)/100));

            const currentPiece = pieces.find((p) => p.x === gridX && p.y === gridY);
            // const attackedPiece = pieces.find((p) => p.x === x && p.y === y);

            if (currentPiece) {
                const validMove = game.checkMove(gridX, gridY, x, y, currentPiece.piece, currentPiece.color, pieces);
                if (validMove) {
                    // use filter
                    const updatedPieces = pieces.reduce((results, piece) => {
                        if (piece.x === gridX && piece.y === gridY) {
                            piece.x = x;
                            piece.y = y;
                            results.push(piece);
                        } else if (!(piece.x === x && piece.y === y)) {
                            results.push(piece);
                        }
                        // console.log(results);
                        return results;
                    }, []);
                    setPieces(updatedPieces);
                    console.log(pieces);
                } else {
                    picked_piece.style.position = 'relative';
                    picked_piece.style.removeProperty('top');
                    picked_piece.style.removeProperty('left');
                }
            }
            movePiece(null);
        }
    }

    
    // console.log(grid);
    return (
        <div 
            onMouseDown={(e)=> pick(e)}
            onMouseMove={(e)=> move(e)} 
            onMouseUp={(e)=>drop(e)} 
            ref={board_ref}
            id="grid">
            {grid}
        </div>
    )
    
}


export default Board