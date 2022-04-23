const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`

const list = [] //результирующий массив
const data = JSON.parse(jsonString)
data.list.forEach(item => { //работаем с каждым человеком по отдельности
    const newPerson = {
        name: item.name,
        age: Number(item.age),
        prof: item.prof
    }
    list.push(newPerson) //добавляем новый полученный элемент в результирующий массив
})
console.log(list)