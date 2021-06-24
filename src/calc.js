
let digits = document.querySelectorAll('.numbers');

let screen = document.getElementById('screen');

let reset = document.getElementById('reset');

let del = document.getElementById('delete');

let fowardSlash = document.getElementById('fowardSlash');

const add = document.getElementById('add');

const minus = document.getElementById('minus');

let buttons = document.querySelectorAll('.button')

function numbersClick() {
    digits.forEach((numbers) => {
        numbers.addEventListener('click', (e) => {
            screen.textContent = e.target.textContent
           
    })
        
    })
   
}

function things() {
    let displayHistory = screen.textContent;
   
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
           
           displayHistory =displayHistory + button.textContent
            if(button.textContent === '=') {
                button.textContent = ''
            }
           
            screen.textContent = screen.textContent.concat(button.textContent)
        

            if(e.target === document.querySelector('#equal')) {
                screen.textContent = eval(displayHistory)
               displayHistory = screen.textContent
                
                                                                                      
            }
            
          
            reset.addEventListener('click', () => {
                screen.textContent = '';
               displayHistory = '';
                
            })

            del.addEventListener('click', () => {
                screen.textContent = '';
                console.log(screen.textContent.slice(0, screen.textContent.length-1))
                console.log(screen.textContent.length)
               displayHistory =displayHistory.slice(0,displayHistory.length);
            })

           
        })
    })

   
}


things()

function addSpace() {
    for(let button of buttons) {

        if (button.textContent === '-' || button.textContent === '+' || button.textContent === '*' || button.textContent === '/') {
            button.textContent =  ' ' + button.textContent + ' ';
        }

    }
}

addSpace()

