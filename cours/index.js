//SELECTEURS
// document.querySelector("h4").style.background = "yellow";

const baliseHTML = document.querySelector("h4");

//click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2= document.getElementById("btn-2");
const response = document.querySelector("p");
console.log(response)
console.log(btn1, btn2);
questionContainer.addEventListener("click", () =>{
questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", ()=>
{response.classList.add("show-response")
response.style.background = "green"})

btn2.addEventListener("click", ()=>
{response.classList.add("show-response")
response.style.background = "red"});




//-------------------------------------------------------------------------
//Mouse Events
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e)=>{
mousemove.style.left = e.pageX + "px";
mousemove.style.top = e.pageY + "px";
});
window.addEventListener("mousedown", () => {
mousemove.style.transform = "scale(2) translate(-25%, -25%)";
    
});
window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid teal"
        
    });

    questionContainer.addEventListener("mouseenter", () =>{
        questionContainer.style.background = "rgba(0,0,0,0.6"
    });

    questionContainer.addEventListener("mouseout", () =>{
        questionContainer.style.background = "pink"
    });   

    response.addEventListener("mouseover", ()=>{
        response.style.transform = "rotate(2deg)";
    });

    //------------------------------------------------
    // Keypress event

    const ring = (key) =>{
        const audio = new Audio();
        audio.src = key + "z.mp3";
        audio.play();
    }
        
const keypressContainer = document.querySelector (".keypress");
const key = document.getElementById("key");

document.addEventListener("keypress", (e) => {
key.textContent = e.key;
if (e.key === "j"){
    keypressContainer.style.background = "pink"
}
if (e.key === "h"){
    keypressContainer.style.background = "teal"
}
else{
    keypressContainer.style.background = "red"
}
if (e.key === "z")
ring(e.key);
});
//------------------------------------------------------
//scroll Event

const nav = document.querySelector("nav");
window.addEventListener("scroll", () =>{
console.log(window.scrollY);

if(window.scrollY > 120){
    nav.style.top = 0;
} else{
    nav.style.top = "-50px";
}
});

//-----------------------------------------------------
const inputName = document.querySelector('input[type = "text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
pseudo = e.target.value;
});

select.addEventListener("input", (e) =>{
language=e.target.value;
});

form.addEventListener( "submit" ,(e) => {
e.preventDefault();
    
if (cgv.checked){
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>language préféré : ${language}</h4>`
    
    //Affiche le contenu des variables
}
else{
    alert("veuillez accepter les CGV")
}
});

//-------------------------------------------------

// load event
window.addEventListener("load" , () => {
    console.log("document chargé")
});
//-------------------------------------------------
// const boxes = document.getElementsByClassName("box");
// const boxes = document.querySelectorAll(".box");
// boxes.forEach((box) => {
//     box.addEventListener("click" , (e) =>{
//     e.target.style.transform = "scale(0.7)";
//     });
// }
// );
//-----------------------------------------------------
//addEventListenner vs onclick
// document.body.onclick = () => {
//     console.log("click !");
// };

//Bubbling = fin 
document.body.addEventListener("click", 
() => {
    console.log("click 1 !");
},
false);

// Usecapture
document.body.addEventListener('click', () => {
    console.log("click 2 !");
},
true);

//------------------------------------------
// stop propagation
// questionContainer.addEventListener("click", (e) => {
//     alert("Test !");
//     e.stopPropagation();
// });

// removeEventListener

//----------------------------------------------
//BOM

// console.log(window.innerHeight);
// console.log(window.scrollY);
// window.open("https://www.google.com/" , "cours js", "height=600, width=800");

//Evenements adossés a window
// alert ("hello");

// confirm
btn2.addEventListener("click" , () => {
    confirm("Voulez vous vraiment vous tromper?")
});

//prompt
btn1.addEventListener("click" , () => {
    let answer = prompt("Entrez votre nom !");
    questionContainer.innerHTML += "<h3>bravo" + answer + "</h3>"
});

setTimeout(() => {
questionContainer.style.borderRadius= "300px";
}, 2000);

let interval = setInterval(() => {
document.body.innerHTML += "<div class='box'><h2>Nouvelle Boite !</h2></div>"
}, 1000);

document.body.addEventListener('click' , () => {
    clearInterval(interval);
});

