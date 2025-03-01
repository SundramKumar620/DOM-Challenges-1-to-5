/**
 * Write your challenge solution here
 */
let heading = document.getElementById('mainHeading');
let red = document.getElementById('redButton');
let green = document.getElementById('greenButton');
let blue = document.getElementById('blueButton');
let purple = document.getElementById('purpleButton');
let reset = document.getElementById('resetButton');

red.addEventListener('click',() => {
    heading.style.color = 'red';
});
green.addEventListener('click',() => {
    heading.style.color = 'green';
})
blue.addEventListener('click',() => {
    heading.style.color = 'blue';
})
purple.addEventListener('click',() => {
    heading.style.color = 'purple';
})
reset.addEventListener('click',() => {
    heading.style.color = 'black';
})

