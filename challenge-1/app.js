/**
 * Write your challenge solution here
 */
let button = document.getElementById("toggleButton");
let h = document.getElementById('htext');
let p = document.getElementById('ptext');
let statuss = document.getElementById('status');
let bulb = document.getElementById('bulb');

button.addEventListener('click',()=>{
    let currentbg = document.body.style.backgroundColor;
    bgcolur(currentbg);
});

function bgcolur(currentbg){
    if(currentbg==""||currentbg=="white"){
        document.body.style.backgroundColor = 'black';
        h.style.color = "white";
        p.style.color = "white";
        button.innerText = 'Turn Off';
        statuss.innerText = "Status: On";
        statuss.style.color = "white";
        bulb.style.backgroundColor = "yellow";
        bulb.style.boxShadow = "0 0 100px yellow";
    }else{
        document.body.style.backgroundColor = 'white'
        h.style.color = "black";
        p.style.color = "black";
        button.innerText = 'Turn On';
        statuss.innerText = "Status: Off";
        statuss.style.color = "black";
        bulb.style.backgroundColor = "";
        bulb.style.boxShadow = "";
    }
}
