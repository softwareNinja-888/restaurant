import pizzaImg from './pizza.jpg'

const elements = (function (){
    const div = document.getElementById("content")
    const foodCon = document.createElement("div")
    foodCon.classList.add("foodCon")

    return {div,foodCon}
})()


const menu = (function(){

    return function(foodItem){

        // CREATION OF ELEMENTS:

        const food = document.createElement("div")
        const h1 = document.createElement("h1")
        const img = document.createElement("img")

        const p = document.createElement("p")
        const span = document.createElement("span")

        const divOrder = document.createElement("div")
        const btn1 = document.createElement("button")
        const btn2 = document.createElement("button")

        // ADD CLASSESS TO ELEMENTS

        food.classList.add("food")
        h1.classList.add("dish")
        img.classList.add("img")

        span.classList.add("price")
        p.classList.add("pCon")

        divOrder.classList.add("orderBtn")
        btn1.classList.add("buttonO")
        btn2.classList.add("buttonO")

        // ADD TEXTCONTENT/CONTENT

        h1.textContent = "Pizza"
        img.src = pizzaImg
        span.textContent = "Price:"
        p.textContent = "120"

        btn1.textContent = "Place Order"
        btn2.textContent = "Specials"

        // APPEND TO PARENT CONTAINERS

        divOrder.appendChild(btn1)
        divOrder.appendChild(btn2)

        food.appendChild(h1)
        food.appendChild(img)
        p.appendChild(span)
        food.appendChild(p)

        food.appendChild(divOrder)

        //  APPEND FOOD TO CONTAINER AND THEN TO CONTENT DIV

        elements.foodCon.appendChild(food)
        elements.div.appendChild(elements.foodCon)


    }
})()


export { menu }