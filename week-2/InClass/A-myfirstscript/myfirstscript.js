
alert("hello");
var myButton = document.querySelector("#myButton");
myButton.addEventListener("click", sayHi);

function sayHi() {
    var title = document.querySelector("#title");
    var name = document.querySelector("#name");
    title.innerText = "Hello " + name.value; 

    var content = document.querySelector("#content");
    var paragraph = document.createElement("p");
    paragraph.innerText = "I said Hello to " + name.value;   //textContent
    content.appendChild(paragraph);  //prepend - adding before the previous
    
    console.log("sayHi is working!");
}

