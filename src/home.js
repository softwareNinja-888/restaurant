import odinImage from "./sign.jpg";

// CREATE IMGAE: 

const elements = (function (){
    const div = document.getElementById("content")

    return {div}
})()

const displayImg = (function(){
    return function (){
        const image = document.createElement("img");
        image.src = odinImage;
        image.style.width = "100%"   
        image.style.height = "400px" 

        const divImg = document.createElement("div")
        divImg.classList.add("divImg")
        divImg.classList.add("flex")
        divImg.style.textAlign = "center"
        divImg.style.width = "60vw"
        divImg.style.margin = "auto"
        
        divImg.appendChild(image);
        elements.div.appendChild(divImg);
    }
})()

const heading = (function(){
    return function(){
        const h = document.createElement("h1")
        h.classList.add("heading")
        h.textContent ="Welcome, to the pizza shop"
        elements.div.appendChild(h)
    }
})()

const information = (function (){
    return function(){
        const infoDiv = document.createElement("div")
        const hoursDiv = document.createElement("div")
        const location = document.createElement("p")

        infoDiv.classList.add("info")
        hoursDiv.classList.add("hours")
        location.classList.add("location")
        // create hours info

        const infoH1 = document.createElement("h1")
        infoH1.classList.add("times")
        infoH1.textContent = "Working Hours"
        hoursDiv.appendChild(infoH1)

        const p1 = document.createElement("p")
        p1.textContent = "Monday-Friday: 7:00am - 17:00pm"
        hoursDiv.appendChild(p1)

        const p2 = document.createElement("p")
        p2.textContent = "Saturday: 7:00am - 16:00pm"
        hoursDiv.appendChild(p2)

        const p3 = document.createElement("p")
        p3.textContent = "Sunday: 9:00am-15:00m"
        hoursDiv.appendChild(p3)

        // APPEND HOURS DIV:

        infoDiv.appendChild(hoursDiv)

        //  CREATE LOCTION 
        location.textContent = "Address: 69 example str, Mbombela, 1201"

        // APPEND LOCATION 

        infoDiv.appendChild(location)

        // APPEND INFO TO MAIN DIV

        elements.div.appendChild(infoDiv)
    }
})()

export { displayImg,heading,information }