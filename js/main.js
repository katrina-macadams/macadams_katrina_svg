
console.log("JS file connected");

const vectorGraphic = document.querySelector('#peach');



function logThisId() {
    console.log(this);
    console.log('clicked on this element', this.id);
}

vectorGraphic.addEventListener('click', logThisId);

// I don't know if the console log should be working for all elements, i tried to figure out how to do that but im lost tbh