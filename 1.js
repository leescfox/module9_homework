const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`

const list = [] //результирующий массив студентов
const parser = new DOMParser()
const xmlDOM = parser.parseFromString(xmlString, "text/xml")
const students = xmlDOM.querySelectorAll("student") //отлавливаем всех студентов
students.forEach(item => {
    const newStudent = {
        name: `${item.querySelector("first").textContent} ${item.querySelector("second").textContent}`,
        age: Number(item.querySelector("age").textContent),
        prof: item.querySelector("prof").textContent,
        lang: item.querySelector("name").getAttribute('lang')
    }
    list.push(newStudent) //добавляем нового студента в результирующий массив
})
console.log(list)