const image = document.querySelector('.image')
const btn = document.querySelector('.btn')
const url = 'https://api.thecatapi.com/v1/images/search'


async function fetchGetter() {
    try {
        const response  = await fetch(url, {
            method: "GET",
        })
        const data = await response .json()
        image.src = data[0].url

    } catch (error) {
        console.log(error)
    }
}

fetchGetter() 
btn.addEventListener('click', fetchGetter); 