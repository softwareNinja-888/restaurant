import './style.css'
import {displayImg,heading,information} from './home.js'
import {contact} from './contact.js'
import { head } from 'lodash'

const createHome = ()=>{
    heading()
    displayImg()
    information()
}

const contactPage = ()=>{
    contact()
}


