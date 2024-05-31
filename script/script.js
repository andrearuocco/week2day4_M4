function call() {
    fetch('https://striveschool-api.herokuapp.com/books').then(resp => {
        //console.log(resp)
        resp.json().then(data => {
            //console.log(data)
            const CONTAINER = document.querySelector(".container")
            const ROW = document.createElement("div")
            ROW.classList.add("row")
            //let FIRST 
            //FIRST.innerHTML = "<div id='hover' class='w-100 h-100 position-relative'><button type='button' class='text-white bg-light'>Aggiungi al carrello</button></div>"
            //ROW.appendChild(FIRST)
            data.forEach((element, i) => {
                //console.log(element.img)
                //console.log(i)
                //console.log(element)
                const COL = document.createElement("div")
                COL.className = "card col-12 col-sm-6 col-lg-3 my-3"
                
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
                HOVER.className = "position-absolute w-50 d-flex flex-column"
                HOVER.innerHTML += "<button class='w-100 btn' type='button'><i class='fa-brands fa-shopify'></i>  Aggiungi</button>"

                COL.appendChild(HOVER)
                COL.appendChild(IMG)
                COL.appendChild(DIV)
                ROW.appendChild(COL)
                CONTAINER.appendChild(ROW)
            });
        })
    })
}
call()
