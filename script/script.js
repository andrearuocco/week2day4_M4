function call() {
    fetch('https://striveschool-api.herokuapp.com/books').then(resp => {
        resp.json().then(data => {
            const CONTAINER = document.querySelector("div.container")
            const ROW = document.createElement("div")
            ROW.classList.add("row")
            data.forEach((element, i) => {
                const COL = document.createElement("div")
                COL.className = "card col-12 col-sm-6 col-lg-3 my-3"
                const ONTOP = document.createElement("div")
                ONTOP.id = "hover"
                ONTOP.className = "w-50 h-100"
                
                const IMG = document.createElement("img")
                IMG.classList.add("card-img-top")
                IMG.src = `${element.img}`
                IMG.alt = "Books" + i

                const DIV = document.createElement("div")
                DIV.classList.add("card-body")
                const HEADING = document.createElement("h4")
                HEADING.innerText = `${element.title}`
                DIV.appendChild(HEADING)
                const PARAG = document.createElement("p")
                PARAG.classList.add("card-text")
                PARAG.innerText = "€" + element.price
                DIV.appendChild(PARAG)

                const HOVER = document.createElement("div")
                HOVER.className = "position-absolute w-50"
                HOVER.innerHTML += "<button class='w-100 btn' type='button' onclick='toBuy()'><i class='fa-brands fa-shopify'></i>  Aggiungi</button>"
                const HOVERT = document.createElement("p")
                HOVERT.className = "w-50 position-absolute p-1"
                HOVERT.innerText = `${element.title}`

                COL.appendChild(ONTOP)
                COL.appendChild(HOVER)
                COL.appendChild(HOVERT)
                COL.appendChild(IMG)
                COL.appendChild(DIV)
                ROW.appendChild(COL)
                CONTAINER.appendChild(ROW)
            });
        })
    })
}
call()

function toBuy() {
    const HEADING = document.querySelectorAll("h4")
    //console.log(HEADING)
    const PARAG = document.querySelectorAll(".card-text")
    //console.log(PARAG)
    const DIV = document.createElement("div")
    DIV.className = "d-flex flex-column"
    const DIVT = document.createElement("div")
    DIVT.className = "d-flex flex-column"
    const ASIDE = document.createElement("aside")
    ASIDE.className = "d-flex"
    for(index of HEADING){
        const PA = document.createElement("p")
        PA.innerText = index.innerText
        DIV.appendChild(PA)
    }
    for(index of PARAG){
        const PA = document.createElement("p")
        PA.innerText = index.innerText
        DIVT.appendChild(PA)
        
    }
    ASIDE.appendChild(DIV)
    ASIDE.appendChild(DIVT)
    const MAIN = document.querySelector("main")
    MAIN.appendChild(ASIDE)
}








