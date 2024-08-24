import './style.css'
import {image} from './home.js'

const displayImg = (function(){
    const div = document.getElementById("content")
    const divImg = document.createElement("div")
    divImg.classList.add("divImg")
    divImg.classList.add("flex")
    divImg.style.textAlign = "center"
    divImg.style.width = "60vw"
    divImg.style.margin = "auto"
    
    divImg.appendChild(image);
    div.appendChild(divImg);

})()