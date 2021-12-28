import React from 'react';
import './board.css'
import './square.css'


function Square(props) {
      var string = "";
      if (props.color % 2 == 0) {
            string = "light"
      } else {
            string = "dark"
      }
      var important_pieces_white = {
            'a' : "Chess_rlt60",
            'b' : "Chess_nlt60",
            'c' : "Chess_blt60",
            'd' : "Chess_qlt60",
            'e' : "Chess_klt60",  
            'f' : "Chess_blt60", 
            'g' : "Chess_nlt60", 
            'h' : "Chess_rlt60",
      }
      var important_pieces_black = {
            'a' : "Chess_rdt60",
            'b' : "Chess_ndt60",
            'c' : "Chess_bdt60",
            'd' : "Chess_qdt60",
            'e' : "Chess_kdt60",  
            'f' : "Chess_bdt60", 
            'g' : "Chess_ndt60", 
            'h' : "Chess_rdt60",
      }
      // const values = Object.keys(important_pieces_white)
      // console.log(values)
      // console.log(props.x)
      // if (values[0] == props.x) {
      //       console.log("YES!")
      // }

      if (props.y > 2 && props.y < 7) {
            return <div className={`square ${string}`}></div>
      } else if (props.y === 8) {
            var s = "assets/chess-pieces/" + important_pieces_black[props.x] + ".png"
            return <div className={`square ${string}`}><img src={s}/></div>
      } else if (props.y === 7){
            return <div className={`square ${string}`}><img src="assets/chess-pieces/Chess_pdt60.png"/></div>
      } else if (props.y === 2) {
            return <div className={`square ${string}`}><img src="assets/chess-pieces/Chess_plt60.png"/></div>
      } else if (props.y === 1) {
            var s = "assets/chess-pieces/" + important_pieces_white[props.x] + ".png"
            return <div className={`square ${string}`}><img src={s}/></div>
      } 
}     


export default Square