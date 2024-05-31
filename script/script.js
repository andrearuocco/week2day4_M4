function call() {
    fetch('https://striveschool-api.herokuapp.com/books').then(resp => {
        resp.json().then(data => {
            const CONTAINER = document.querySelector(".container")
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
                PARAG.innerText = "€ " + element.price
                DIV.appendChild(PARAG)

                const HOVER = document.createElement("div")
                HOVER.className = "position-absolute w-50"
                HOVER.innerHTML += "<button class='w-100 btn' type='button'><i class='fa-brands fa-shopify'></i>  Aggiungi</button>"
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
