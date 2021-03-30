/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

/*const pElements = document.querySelectorAll("p")
console.log(pElements)

const firstDivElement = document.querySelector("div")
console.log(firstDivElement)

const jumbotronId = document.querySelector("#jumbotron-text")
console.log(jumbotronId)

const.pElementsContent = document.querySelectorAll("p")
console.log(pElementsContent)*/

//pElements.forEach(p => p.style.fontSize = "45")
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

document.querySelector('#alertBtn').addEventListener('click', () => alert('Thanks for visiting Bikes for Refugees!'))


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

document.querySelector('#bgrChangeBtn').addEventListener('click', changeColor)
/*function changeColor() {
    document.body.style.backgroundColor = "orange"
}*/

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

document.querySelector('#addTextBtn').addEventListener('click', addText)

function addText () {
    //var content = document.querySelector("#mainArticles")
    var learnmore = document.createElement("p");
    learnmore.innerText = "LEARN MORE";  
    document.querySelector("#mainArticles").appendChild(learnmore);
}
/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

document.querySelector('#largerLinksBtn').addEventListener('click', largerText)

function largerText () {
    document.querySelectorAll("a").forEach(a => a.style.fontSize ="50px")
    /*const allLinks = document.querySelectorAll("a");
    allLinks.style.fontSize = "200"*/
}
/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

document.querySelector('#addArticleBtn').addEventListener('click', addInputText)

function addInputText () {
    const p = document.createElement("p");
    const input = document.querySelector(".form-control.addArticle");
    p.innerText = input.value;  
    document.querySelector("#mainArticles").appendChild(p);
    input.value = "";  //to have it clear after pressing the button
}

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

let color = ['orange', 'yellow', 'red', 'purple', 'blue', 'pink', 'green']

//document.querySelector('#bgrChangeBtn').addEventListener('click', changeColor)
function changeColor() {
    const currentColor = document.body.style.backgroundColor
    const indexCurrent = color.findIndex(c => c === currentColor)
    const nextColor = color[indexCurrent + 1] || color[0]
    document.body.style.backgroundColor = nextColor
}