// Second project : BMI calculator
const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault;
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    // alert(result);
    if(height < 0 || isNaN(height) || height === ''){
        results.innerHTML = '<span>Please enter a valid height.</span>';
    }else if(weight < 0 || isNaN(weight) || weight === ''){
        results.innerHTML = '<span>Please enter a valid weight.</span>';
    }else{
        const bmi = (weight / ((height * height) / 1000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
    }
});