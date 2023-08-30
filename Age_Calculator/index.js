const btnEle = document.getElementById("btn");
const birthdayEle = document.getElementById("birthday");
const resultEle = document.getElementById("result");


function calculateAge() {
  const birthdayValue = birthdayEle.value;
  if (birthdayValue == "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    //console.log(age);
    resultEle.innerText = `Your Age is ' ${age} ' ${age > 1 ? "years" : "year"} Old`;
}
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  const yourAge = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getFullYear() - birthdayDate.getFullYear();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    yourAge--;
  }
  return yourAge;
}
btnEle.addEventListener("click", calculateAge);
