
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
