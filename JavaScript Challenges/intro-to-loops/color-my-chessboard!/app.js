const squares = Array.from(document.querySelectorAll('.grid div'))
//Nodelist of all the div squares on our board. Think of it as an array. 

//Your goal is to add a chessboard color pattern to this blank board using loops and Arrays.
//write code here

console.log(squares)

for (let i = 0; i < squares.length; i++) {

    if (i % 2 === 0) {
        squares[i].style.background = '#b88645';
    } else  {
        squares[i].style.background = '#e0c9ab';
    }
   
}