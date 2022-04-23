const btn = document.querySelector('button')
const output = document.createElement('div')
btn.after(output)
btn.addEventListener('click', () => {
    const value = document.querySelector('input').value
    if (value > 0 && value < 11) {
        const url = `https://picsum.photos/v2/list?limit=${value}`
        const xhr = new XMLHttpRequest()
        xhr.onload = function () {
            let pictures = ''
            const data = JSON.parse(xhr.response)
            data.forEach(item => {
                const newImg = `
                <div>
                <img src="${item.download_url}">
                </div>`
                pictures = pictures + newImg
            })
            output.innerHTML = pictures
        } //не стал изменять размеры картинок - не было указано в задании
        xhr.open("get", url, true)
        xhr.send()
    } else {
        output.innerHTML = `Число вне диапазона от 1 до 10`
    }
})