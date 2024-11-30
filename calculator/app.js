let input=document.getElementById('inputbox');
let buttons=document.querySelectorAll('button');
let string='';
let arr=Array.from(buttons);
arr.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if (e.target.innerText== '='){
            string=eval(string);
            input.value=string;
        }
        else if(e.target.innerText=='AC'){
            string='';
            input.value=string;
        }
        else if (e.target.innerText=='DEL'){
           string=string.substring(0,string.length-1);
              input.value=string;
        }
        else{
            string+=e.target.innerText;
            input.value=string;
        }
    });
}) 

document.addEventListener('keydown', (event) => {
    let key = event.key;

    // Numbers and operators input
    if (/[0-9+\-*/().]/.test(key)) {
        string += key;
        input.value = string;
    }

    // Enter key for equal
    if (key === 'Enter') {
        string = eval(string);
        input.value = string;
    }

    // Backspace key for DEL
    if (key === 'Backspace') {
        string = string.slice(0, -1); // Delete last character
        input.value = string;
    }

    // Escape key for AC (clear all)
    if (key === 'Escape') {
        string = ''; // Clear input box
        input.value = string;
    }
});78