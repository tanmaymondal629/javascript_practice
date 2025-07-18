// First project : on coloured button click body color change
const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button')

buttons.forEach(function(buttons){
    // console.log(buttons);
    buttons.addEventListener('click', function(e){
        // console.log(e.target.id);
        body.style.backgroundColor = e.target.id
        
    });
})