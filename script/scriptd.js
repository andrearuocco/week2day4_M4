//da mettere dentro toBuy() href
document.addEventListener("DOMContentLoaded", async () => {
    const PA = new URLSearchParams(location.search)
    const ASIN = PA.get("asin")
    fetch("https://striveschool-api.herokuapp.com/books/" + ASIN ) {
        
    }
})
