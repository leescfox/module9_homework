const btn = document.querySelector('button')
const output = document.createElement('div')
btn.after(output)
btn.addEventListener('click', () => {
    const inputs = document.querySelectorAll('input')
    if (inputs[0].value > 99 && inputs[0].value < 301 && inputs[1].value > 99 && inputs[1].value < 301) {
        fetch(`https://picsum.photos/${inputs[0].value}/${inputs[1].value}`)
            .then(response => {
                output.innerHTML = `<img src="${response.url}">`
            }) //поскольку сайт делает редирект, то я нашёл такое решение. Так картинка действительно отображается в HTML
    } else {
        output.innerHTML = `Одно из чисел вне диапазона от 100 до 300`
    }
})