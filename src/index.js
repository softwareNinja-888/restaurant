import './style.css'
import {displayImg,heading,information} from './home.js'
import { head } from 'lodash'

const createHome = ()=>{
    heading()
    displayImg()
    information()
}
createHome()