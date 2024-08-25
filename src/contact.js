import {elements} from "./menu.js"

const contact = (function(){

    return function(){
        const contactDiv = document.createElement("div")
        contactDiv.classList.add("contacts")

        // CEO DIV

        const ceoDiv = document.createElement("div")
        ceoDiv.classList.add("ceo")

        //  CEO CHILD ELEMENTS:

        const ceoH1 = document.createElement("h1")
        ceoH1.classList.add("contactHead")
        ceoH1.textContent = "Bayanda Dlamini"
        const p1 = document.createElement("p")
        p1.textContent = "Phone: +27632349078"
        const p2 = document.createElement("p")
        p2.textContent = "E-mail: example@example.com"


        ceoDiv.appendChild(ceoH1)
        ceoDiv.appendChild(p1)
        ceoDiv.appendChild(p2)

        // CHEF DIV :


        const chefDiv = document.createElement("div")
        chefDiv.classList.add("chef")


        const chefH1 = document.createElement("h1")
        chefH1.classList.add("contactHead")
        chefH1.textContent = "Gordan Ramsey" 
        const xp1 = document.createElement("p")
        xp1.textContent = "Phone: +27635789062"
        const xp2 = document.createElement("p")
        xp2.textContent = "E-mail: example@example.com"


        chefDiv.appendChild(chefH1)
        chefDiv.appendChild(xp1)
        chefDiv.appendChild(xp2)


        // 

        contactDiv.appendChild(ceoDiv)
        contactDiv.appendChild(chefDiv)

        console.log(contactDiv);

        elements.div.appendChild(contactDiv)

    }
})();

export {contact}