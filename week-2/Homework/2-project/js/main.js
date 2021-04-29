
const blueButton = document.getElementById("blueBtn")
const orangeButton = document.getElementById("orangeBtn")
const greenButton = document.getElementById("greenBtn")

const changeProperties = (jumbotronColor, donateColor, volunteerColor, volunteerText) => {
  const jumbotronButton = document.querySelector(".jumbotron")
  const donateButton = document.querySelector(".btn.btn-primary.btn-lrg")
  const volunteerButton = document.querySelector(".btn.btn-secondary.btn-lrg")
  
  jumbotronButton.style.backgroundColor = jumbotronColor
  donateButton.style.backgroundColor = donateColor
  volunteerButton.style.backgroundColor = volunteerColor
  volunteerButton.style.color = volunteerText
}

blueButton.addEventListener("click", () => changeProperties("#588fbd", "#ffa500", "black", "white"))
orangeButton.addEventListener("click", () => changeProperties("#f0ad4e", "#5751fd", "#31b0d5", "white"))
greenButton.addEventListener("click", () => changeProperties("#87ca8a", "black", "#8c9c08", "initial"))  

//part II

let registerNow = document.querySelector("form .btn.btn-primary");
  registerNow.addEventListener("click", checkForm);

  let checkEmail = document.querySelector("#exampleInputEmail.form-control");
  let checkName = document.querySelector("#example-text-input.form-control");
  let checkInfo = document.querySelector("#exampleTextarea.form-control");

function checkForm() {
  
  let errorFound = false;
  if (checkEmail.value.length<1 || !checkEmail.value.includes("@")) {
    checkEmail.style.backgroundColor = "red";
    errorFound = true;
  }
  if (checkName.value.length<1) {
    checkName.style.backgroundColor = "red";
    errorFound = true;
  }
  if (checkInfo.value.length<1) {
    checkInfo.style.backgroundColor = "red";
    errorFound = true;
  }
  if (!errorFound) {
    alert("Thank you for filling our form!");
    checkEmail.value = "";
    checkName.value = "";
    checkInfo.value = "";
    
    checkEmail.style.backgroundColor = "grey";
    checkName.style.backgroundColor = "grey";
    checkInfo.style.backgroundColor = "grey";
  }
}





/*const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const formValues = Object.fromEntries(new FormData(event.target));

  if (
    Object.values(formValues).every(v => v === "") &&
    !formValues.email.includes('@') 
  ) {
    alert("not valid")
  }
})*/

