
let myForm = document.querySelector("form")

let taskName = document.getElementById("task")
let priority = document.getElementById("priority")
let tbody = document.querySelector("tbody")
let taskList = []
myForm.addEventListener("submit", function(event)
{
    event.preventDefault()

    let data = {}
    data.input1 = taskName.value
    data.input2 = priority.value
    taskList.push(data)
    
    tbody.innerHTML = null

    taskList.map((ele) =>
    {
        let row = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")

        td1.innerText = ele.input1
        td2.innerText = ele.input2

        row.append(td1, td2)
        tbody.append(row)
        
    })


})

