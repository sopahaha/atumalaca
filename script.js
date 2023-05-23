
const main = document.querySelector("main")

class Atumalaca {
    constructor() {
        this.element = this.createElement()
        this.x = 0
        this.y = 0
        this.direction
        this.randomEnvent()
    }

    createElement() {
        let element = document.createElement("div")
        element.id = "atumalaca"
        element.classList.add("atumalaca")

        
        let color = document.createElement("div")
        color.classList.add("color-atuma")
        color.style.background = `rgb(${random(0,250)},${random(0,250)},${random(0,250)})`
        
        let img = document.createElement("img")
        img.src = "imgs/atumalaca.jpg"
        
        element.appendChild(color)
        element.appendChild(img)
        main.appendChild(element)
        
        element.style.top = `${this.getCenter(element).y}px`
        element.style.left = `${this.getCenter(element).x}px`


        return element

    }


    randomEnvent() {
        const updateInterval = () => {
            const interval = Math.floor(Math.random() * 5000) + 1;

            setTimeout(() => {
                this.decideDirection();
                this.getCoords();
                this.limitCoords();
                this.changePosition();
                this.laugh()

                updateInterval();
            }, interval);
        };

        updateInterval();
    }


    decideDirection() {
        let direction = {
            x: undefined,
            y: undefined
        }
        let randomY = Math.floor(Math.random() * 2) + 1
        let randomX = Math.floor(Math.random() * 2) + 1

        switch (randomX) {
            case 1:
                direction.x = "left"
                break;
            case 2:
                direction.x = "right"
                break;
            case 3:
        }

        switch (randomY) {
            case 1:
                direction.y = "down"
                break;
            case 2:
                direction.y = "up"
                break;
        }

        this.direction = direction
    }

    getCoords() {

        let divisor = {
            x: undefined,
            y: undefined
        }
        let quantityY = random(100, 750)
        let quantityX = random(100, 750)


        switch (this.direction.x) {
            case "left":
                divisor = -1
                this.x += quantityX * divisor
                break;

            case "right":
                divisor = 1
                this.x += quantityX * divisor
                break;
        }

        switch (this.direction.y) {
            case "down":
                divisor = 1
                this.y += quantityY * divisor
                break;

            case "up":
                divisor = -1
                this.y += quantityY * divisor
                break;
        }




    }


    limitCoords() {
        let limits = this.getLimits()

        if (limits.x <= this.x) {
            this.x = limits.x
        }
        if (limits.y <= this.y) {
            this.y = limits.y
        }
        if (0 >= this.x) {
            this.x = 0

        }
        if (0 >= this.y) {
            this.y = 0
        }

    }

    changePosition() {
        this.element.style.left = `${this.x}px`
        this.element.style.top = `${this.y}px`

        this.element.classList.add("walk")

        setTimeout(() => {

            this.element.classList.remove("walk")
        }, 1000);

    }

    getLimits() {
        let width = innerWidth - this.element.offsetWidth
        let height = innerHeight - this.element.offsetHeight

        return {
            x: width,
            y: height
        }

    }

    getCenter(element){
        let x  = (innerWidth / 2) - (element.offsetWidth / 2)
        let y  = (innerHeight / 2) - (element.offsetHeight / 2)

        return {x:x,y:y}
    }

    laugh() {
        let random = Math.floor(Math.random() * 100) + 1

        if (random <= 40) {
            this.element.children[1].src = "imgs/atumalaca-risos.gif"
        } else if (random <= 80) {
            this.element.children[1].src = "imgs/atumalaca.jpg"
        }
    }



}

alert("Acerte o numero de atumalacas")

// let numAtumas = prompt("quantos atumalacas vc quer?")
let numAtumas = random(5,30)
console.log(numAtumas)


for (let i = 0; i < numAtumas; i++) {
    new Atumalaca()
}


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let numberTry = document.querySelector("#try") 

let btn = document.querySelector("#btn")

let tentativas = []
let tentativas2 = []

btn.addEventListener("click",useTry)

function useTry(){
    if(numAtumas == numberTry.value){
        alert("vc é bom, parabens")
        window.location.reload()
    }else{
        htmlTry()
    }
    numberTry.value = ""
}



function htmlTry() {
    let tryEl = document.querySelector(".trys");
    let newNumber = numberTry.value;
  
    if (tentativas.includes(newNumber)) {
        
      alert("Esse valor já foi adicionado!");
    } else {

      tentativas.push(newNumber);
      tryEl.innerHTML = tentativas;
    }
  
  }
  

function makeColor(){
    main.classList.toggle("color")
}

