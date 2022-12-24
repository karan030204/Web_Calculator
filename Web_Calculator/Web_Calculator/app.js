const clearButton = document.getElementById('clear');
const text = document.querySelector('.text');
const equal = document.getElementById('equal');


const display = value => {

    text.value += value;
}

clearButton.addEventListener('click', e => {
    text.value = '';
})

const calculate = ()=>{
    let p = text.value;
    //eval is the function in javascript which is used to evaluate the expression 
    let q = eval(p);
    text.value = q;
}

