// var count = 0;

// function changeCount(num){
//     count += num;
//     document.getElementById("count").innerHTML=count;
// }

const UserInput= document.getElementById
("userInput");
var expression = '';
function press(num){
    expression += num;
    userInput.value= expression;
}

function equal(){
    userInput.value=eval(expression);
}
function erase(){
    expression='';
    userInput.value=expression;
}



