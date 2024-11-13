
async function getTodos() {
    const response = await fetch ("http://localhost:3000/api/todos")
    // console.log(response)
    const data = await response.json(data)
    console.log(data, "\n")
    // console.log("getData finished")
}

const ul = document.querySelector("ul")
data.forEach(todo => {
    const li = document.createElement("li")
    li.textContent = todo.descrption
    ul.appendChild(li)
});

getTodos()