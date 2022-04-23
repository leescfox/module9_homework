const btn = document.querySelector('button')
const output = document.createElement('div')
btn.after(output)

if (localStorage.getItem('images')) {
    output.innerHTML = localStorage.getItem('images')
}

btn.addEventListener('click', () => {
    const inputs = document.querySelectorAll('input')
    const bool_input_0 = inputs[0].value > 0 && inputs[0].value < 11
    const bool_input_1 = inputs[1].value > 0 && inputs[1].value < 11
    if (bool_input_0 && bool_input_1) {
        fetch(`https://picsum.photos/v2/list?page=${inputs[0].value}&limit=${inputs[1].value}`)
            .then(response => response.json())
            .then(json => {
                let imgs = ''
                json.forEach(item => {
                    imgs = imgs + `<div><img src="${item.download_url}"></div>`
                })
                output.innerHTML = imgs
                localStorage.setItem('images', imgs)
            })
    } else if (!bool_input_0 && bool_input_1) {
        output.innerHTML = "Номер страницы вне диапазона от 1 до 10"
    } else if (bool_input_0 && !bool_input_1) {
        output.innerHTML = "Лимит вне диапазона от 1 до 10"
    } else {
        output.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10"
    }
})