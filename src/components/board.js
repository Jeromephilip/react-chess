import React from 'react';
import { render } from 'react-dom';
import './board.css'

const rows = [8, 7, 6, 5, 4, 3, 2, 1];
const cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const len = 8;

function Board() {
    var grid = [];
    // initialize board
    var n = 2
    let string = "square-light"
    for (var i=0; i<len; i++) { // Number = ROW
        for (var j=0; j<len; j++) { // Letter = COL
            let position = cols[j].concat("",rows[i].toString())
            if (n % 2 == 0) {
                string = "square-light" 
                grid.push(<span className={string} key={position}>{position}</span>)
                n--;
            } else {
                string = "square-dark"
                grid.push(<span className={string} key={position}>{position}</span>)
                n++;
            }
        }
        n = (n==2) ? n=1 : n=2

    }

    // return board
    return (
        <div id="grid">
            {grid}
        </div>
    )
    
}

export default Board