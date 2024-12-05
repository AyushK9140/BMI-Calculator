const form=document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();

    const height=parseFloat(document.querySelector('#height').value);
    const weight=parseFloat(document.querySelector('#weight').value);
    const results=document.querySelector('#results');
    if(isNaN(height) || height <= 0){
        results.innerHTML="Please Enter Valid Height";
    }
    else if(isNaN(weight) || weight <= 0){
        results.innerHTML="Please Enter Valid Weight";
    }
    else{
        const bmi=(weight/(height * height)).toFixed(2);
        results.innerHTML=`<span>${bmi}</span>`;
    }

})
