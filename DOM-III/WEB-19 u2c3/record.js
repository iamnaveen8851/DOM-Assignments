let myForm = document.querySelector("form")
let name = document.getElementById("name")
let employeeId = document.getElementById("employeeID")
let department = document.getElementById("department")
let experience = document.getElementById("exp")
let email = document.getElementById("email")
let mobile = document.getElementById("mbl")


let employeeRecords = []

let tbody = document.querySelector("tbody")




// tbody.innerHTML = ""

    

myForm.addEventListener("submit", function(event)
{
    
    event.preventDefault()

    let data = {}
    data.Name = name.value
    data.EmployeeId = employeeId.value
    data.Department = department.value
    data.Experience = experience.value
    data.Email = email.value
    data.Mobile = mobile.value

    employeeRecords.push(data)
    tbody.innerHTML = null;

employeeRecords.map((ele) => {
    let row = document.createElement("tr")
             
    // creating td based on input
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")
    let td7 = document.createElement("td")
    let td8 = document.createElement("td")

     // Delete button
     let Delete = document.createElement("button")
     Delete.setAttribute("class","delete")

    //  Delete.setAttribute("id", deleteBtn)
     Delete.innerText = "Delete"
     td8.append(Delete)

       // adding inner text inside the all td
    td1.innerText = ele.Name
    td2.innerText = ele.EmployeeId
    td3.innerText = ele.Department
    td4.innerText = ele.Experience
    td5.innerText = ele.Email
    td6.innerText = ele.Mobile

    // Role 
    if(td4.innerText > 5)
    {
        td7.innerText = "Senior"
    }
    else if(td4.innerText >= 2 && td4.innerText <= 5)
    {
        td7.innerText = "Junior"
    }
    else if(td4.innerText <= 1)
    {
        td7.innerText = "Fresher"
    }



    Delete.addEventListener("click", (e) =>{
        e.target.parentNode.parentNode.remove()
        // employeeRecords.pop(data)
    })

    


    row.append(td1,td2,td3,td4,td5,td6,td7,td8)
    console.log(row)
    tbody.append(row)

    console.log(row)
})


})