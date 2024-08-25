import './style.css'
import {displayImg,heading,information} from './home.js'
import {contact} from './contact.js'
import {menu} from './menu.js'

import pizzaImg from './pizza.jpg'
import famousDish from './dish.jpg'
import pasta from './pasta.jpg'
import pasta1 from './pasta1.jpg'
import pizzaRolls from './pizzarolls.jpg'
import rolls from './rolls.jpg'
import spagetti from './spagetti.jpg'
import VegPizza from './vegPizza.jpg'


import { head } from 'lodash'

const createHome = ()=>{
    heading()
    displayImg()
    information()
}

const contactPage = ()=>{
    contact()
}

const menuPage = ()=>{
    menu("Pizza",pizzaImg,'120')
    menu("Vegeterian Pizza",VegPizza,'100')
    menu("Pizza Rolls",pizzaRolls,"80")
    menu("Our Famous Dish",famousDish,"180")
    menu("Mushroom Pasta", pasta,"140")
    menu("Pasta", pasta1,"110")
    menu("Spagetti Dish", spagetti,"80")
    menu("Rolls", rolls,"40")

}
menuPage()