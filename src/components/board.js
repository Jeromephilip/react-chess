import React from 'react';
import { render } from 'react-dom';
import './board.css'
import Square from './square.js'

const rows = [8, 7, 6, 5, 4, 3, 2, 1];
const cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const len = 8;

var picked_piece = null

function pick(e) {
    var element = e.target
    if (element.classList.contains("piece")) {
        console.log("You have found a piece!")
        element.style.position = "absolute";
        var x = e.clientX - 50;
        var y = e.clientY - 15;
        element.style.left = `${x}px`;
        element.style.top = `${y}px`
        picked_piece = element
    } 

}

function move(e) {
    if (picked_piece) {
        var x = e.clientX - 50;
        var y = e.clientY - 15;
        picked_piece.style.position = "absolute";
        picked_piece.style.left = `${x}px`;
        picked_piece.style.top = `${y}px`
    }

}

function drop(e) {
    if (picked_piece) {
        picked_piece = null
    }
}

function Board() {
    var grid = [];
    // initialize board
    var isWhite = false;
    for (var i=0; i<len; i++) { // Number = ROW
        for (var j=0; j<len; j++) { // Letter = COL
            // let position = cols[j].concat("",rows[i].toString())
            var n = i + j + 2;
            grid.push(<Square key={`${j},${i}`} color={n} x={cols[j]} y={rows[i]}/>)
        }
    }

    // return board
    return (
        <div 
            onMouseMove={e=> move(e)} 
            onMouseDown={e=> pick(e)}
            onMouseUp={e=> drop(e)} 
            id="grid">
            {grid}
        </div>
    )
    
}


export default Board