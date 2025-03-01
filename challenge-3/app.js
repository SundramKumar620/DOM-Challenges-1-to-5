/**
 * Write your challenge solution here
 */
let naame = document.getElementById('nameInput');
let job = document.getElementById('jobInput');
let age =  document.getElementById('ageInput');
let bio = document.getElementById('bioInput');

let namedisplay = document.getElementById('nameDisplay');
let jobdisplay = document.getElementById('jobDisplay');
let agedisplay = document.getElementById('ageDisplay');
let biodisplay = document.getElementById('bioDisplay');


naame.addEventListener('input',() =>{
    namedisplay.innerText = naame.value;
})

job.addEventListener('input',() => {
    jobdisplay.innerText = job.value

})
age.addEventListener('input',() =>{
    agedisplay.innerText = age.value;
})
bio.addEventListener('input',()=>{
    biodisplay.innerText = bio.value;
})

