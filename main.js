
function calculateBmr(){
  let weight = document.getElementById('weight');
  let height = document.getElementById('height');
  let age = document.getElementById('age');
  let gender = document.getElementById('gender');
  let result = document.getElementById('result');

 if((weight.value === "" || height.value === "" || age.value === "") && ( gender.value === 'Male' || gender.value === 'Female')){
  alert("Enter All Information");
  result.innerHTML="<h3>Enter All Information";

 }
 else{
  if(gender.value === 'Male'){
    let bmr = Math.round((10*weight.value) + (6.25*height.value) - (5*age.value) + 5);
    result.innerHTML = `<h1>BMR = ${bmr} Calories / day</h1>
    <h3>Sedentary active (little or no exercise) <span>${Math.round(bmr*1.2)} Calories / day</h3></span>
    <h3>Lightly active (Workout 1-3 days/week) <span>${Math.round(bmr*1.375)} Calories / day </h3></span>
    <h3>Moderately active (Workout 3-5 days/week) <span>${Math.round(bmr*1.55)} Calories / day </h3></span>
      <h3>Intense exercise (Workout 6-7 days/week) <span>${Math.round(bmr*1.725)} Calories / day </h3></span>
    <h3>Very Intense exercise (Daily Physical job) <span>${Math.round(bmr*1.9)} Calories / day </h3></span>`
  }
  else if(gender.value === 'Female'){
    let bmr = Math.round((10*weight.value) + (6.25*height.value) - (5*age.value) - 161);
    result.innerHTML = `<h1>BMR = ${bmr} Calories / day</h1>
    <h3>Sedentary active (little or no exercise) <span>${Math.round(bmr*1.2)} Calories / day</h3></span>
    <h3>Lightly active (Workout 1-3 days/week) <span>${Math.round(bmr*1.375)} Calories / day </h3></span>
    <h3>Moderately active (Workout 3-5 days/week) <span>${Math.round(bmr*1.55)} Calories / day </h3></span>
      <h3>Intense exercise (Workout 6-7 days/week) <span>${Math.round(bmr*1.725)} Calories / day </h3></span>
    <h3>Very Intense exercise (Daily Physical job) <span>${Math.round(bmr*1.9)} Calories / day </h3></span>`
  } 

  else if(gender.value === ''){
    result.innerHTML = `<h3>Invalid Operation</h3>`;
  }
 }

  result.style.display = 'flex';
}

function resetinput(){
  let weight = document.getElementById('weight');
  let height = document.getElementById('height');
  let age = document.getElementById('age');
  let gender = document.getElementById('gender');
  let result = document.getElementById('result');

  weight.value = '';
  height.value = '';
  age.value = '';
  gender.value = 'None';
  result.style.display = 'none'
}