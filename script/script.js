function call() {
    fetch('https://striveschool-api.herokuapp.com/books').then(resp => {
        //console.log(resp)
        resp.json().then(data => {
            //console.log(data)
            const CONTAINER = document.querySelector(".container")
            const ROW = document.createElement("div")
            ROW.classList.add("row")
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
                DIV.className = "card-body"
                const HEADING = document.createElement("h4")
                /*HEADING.classList.add("card-title")*/
                HEADING.innerText = `${element.title}`
                DIV.appendChild(HEADING)
                const PARAG = document.createElement("p")
                PARAG.classList.add("card-text")
                PARAG.innerText = "€" + element.price
                DIV.appendChild(PARAG)

                COL.appendChild(IMG)
                COL.appendChild(DIV)
                ROW.appendChild(COL)
                CONTAINER.appendChild(ROW)
            });
        })
    })
}
call()
