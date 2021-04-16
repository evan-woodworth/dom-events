//DOM Elements (Nodes)

// //getElementById()
// const title = document.getElementById("title");
// console.log(title);
// //querySelector()

// const container = document.querySelector(".container");
// console.log(container);

// function changeText(ref, newText) {
//     console.log(ref);
//     console.log(ref.textContent);
//     ref.textContent = newText;
//     console.log(ref.textContent);
// }
// //grab all elements and print to console
// const containerTwo = document.querySelector(".container-2");
// console.log(containerTwo);
// const one = document.querySelector("#one");
// changeText(one, "Nope-one");
// const two = document.querySelector("#two");
// changeText(two, "Nope-two");
// const three = document.querySelector(".three");
// changeText(three, "Nope-three");
// const image = document.querySelector(".image");
// changeText(image, "Nope-image");
// const listItem = document.querySelector(".listItem");
// changeText(listItem, "Nope-listItem");

// const containerTwoList = Array.from(document.getElementsByClassName("container-2")); //HTML Collection
// console.log(containerTwoList);
// const containerTwoList2 = Array.from(document.querySelectorAll(".container-2")); //Node List
// console.log(containerTwoList2);
// console.log(Array.from(document.querySelectorAll('div')));

// const newDiv = document.createElement('div');

// newDiv.textContent = "New Element";
/*To Append something to the page
1. Grab an existing element off the page
2. Append the new element to the page*/
const body = document.querySelector('body');
// body.append(newDiv);

// const newImage = document.createElement('img');
// newImage.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/1024px-RedDot_Burger.jpg');
// body.append(newImage);

//function that up
//assuming a location to append has been selected
function addElement (location, elemType, text, attribute, attributeValue) {
    const newElem = document.createElement(elemType);
    newElem.textContent = text;
    if (attribute && attributeValue) {
        newElem.setAttribute(attribute, attributeValue);
    }
    location.append(newElem);
}

const randomColor = {
    r: 0,
    g: 0,
    b: 0,
    randomize: function () {
        this.r = Math.floor(Math.random()*255);
        this.g = Math.floor(Math.random()*255);
        this.b = Math.floor(Math.random()*255);
    }
};

//make a header
addElement(body, 'h1', 'This Cool Site, Right Here');

//establish some structure
addElement(body, 'main');
const main = document.querySelector('main');
addElement(main, 'div', '', 'class', 'container');
addElement(main, 'div', '', 'class', 'container');
addElement(main, 'div', '', 'class', 'container');
addElement(main, 'div', '', 'class', 'container');

const theContainers = Array.from(document.querySelectorAll('container'));
theContainers.forEach(
    function (container) {
        container.setAttribute(
            'style',
            'display:flex;flex-content:space-between'
        );
        for(let i=0; i<5; i++) {
            randomColor.randomize();
            container.textContent.concat(
                '<div background-color=rgb('+randomColor.r+','+randomColor.g+','+randomColor.b+')></div>'
            );
        };
    }
);

