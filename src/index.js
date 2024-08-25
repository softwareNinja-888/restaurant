import './style.css'
import {displayImg,heading,information} from './home.js'
import {contact} from './contact.js'
import {menu} from './menu.js'
import {elements} from "./menu.js"

// PICTURES:

import pizzaImg from './pizza.jpg'
import famousDish from './dish.jpg'
import pasta from './pasta.jpg'
import pasta1 from './pasta1.jpg'
import pizzaRolls from './pizzarolls.jpg'
import rolls from './rolls.jpg'
import spagetti from './spagetti.jpg'
import VegPizza from './vegPizza.jpg'


import { head } from 'lodash'
// GET BUTTONS

const homeBtn = document.querySelector(".home")
const contactBtn = document.querySelector(".contact")
const menuBtn = document.querySelector(".menu")

// FUNCTION TO DISPLAY PAGES

const createHome = ()=>{
    heading()
    displayImg()
    information()
}

const contactPage = ()=>{
    contact()
}

const menuPage = ()=>{
    menu("Pizza",pizzaImg,'R 120')
    menu("Vegeterian Pizza",VegPizza,'R 100')
    menu("Pizza Rolls",pizzaRolls,"R 80")
    menu("Our Famous Dish",famousDish,"R 180")
    menu("Mushroom Pasta", pasta,"R 140")
    menu("Pasta", pasta1,"R 110")
    menu("Spagetti Dish", spagetti,"R 80")
    menu("Rolls", rolls,"R 40")

}

// EVENTLISTENRES

createHome()

menuBtn.addEventListener("click",()=>{
    while(elements.div.firstChild){
        elements.div.removeChild(elements.div.lastChild)
    }
    while(elements.foodCon.firstChild){
        elements.foodCon.removeChild(elements.foodCon.lastChild)
    }

    menuPage()
})
homeBtn.addEventListener("click",()=>{
    while(elements.div.firstChild){
        elements.div.removeChild(elements.div.lastChild)
    }
    createHome()
})
contactBtn.addEventListener("click",()=>{
    while(elements.div.firstChild){
        elements.div.removeChild(elements.div.lastChild)
    }
    contactPage()
})