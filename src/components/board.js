import React from 'react';
import { render } from 'react-dom';
import './board.css'
import Square from './square.js'

const rows = [8, 7, 6, 5, 4, 3, 2, 1];
const cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const len = 8;


function Board() {
    var grid = [];
    // initialize board
    var isWhite = false;
    for (var i=0; i<len; i++) { // Number = ROW
        for (var j=0; j<len; j++) { // Letter = COL
            // let position = cols[j].concat("",rows[i].toString())
            var n = i + j + 2;
            grid.push(<Square color={n} x={cols[j]} y={rows[i]}/>)
        }
    }

    // return board
    return (
        <div id="grid">
            {grid}
        </div>
    )
    
}

export default Board