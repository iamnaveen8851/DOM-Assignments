// fill in javascript code here
let myForm = document.querySelector("form")
let name = document.getElementById("name")
let docId = document.getElementById("docID")
let dept = document.getElementById("dept")
let exp = document.getElementById("exp")
let email = document.getElementById("email")
let mobile = document.getElementById("mbl")


let tbody = document.querySelector("tbody")
let doctors =  []
myForm.addEventListener("submit", function(event)
{
    event.preventDefault()
    // let row = document.createElement("tr")

    
    let data = {}
    data.Name = name.value
    data.DocId = docId.value
    data.Dep  = dept.value
    data.Exp = exp.value
    data.Email = email.value
    data.Mobile = mobile.value

    doctors.push(data)
    // console.log(doctors)
    tbody.innerHTML = null;

    doctors.map((ele) => {
        let row = document.createElement("tr")

        let td1 = document.createElement("td");
        let td2= document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let td8 = document.createElement("td");
        let Delete = document.createElement("button");
        Delete.innerText = "Delete"
        Delete.setAttribute("id", "delete")
        


        td1.innerText = ele.Name
        td2.innerText = ele.DocId
        td3.innerText = ele.Dep
        td4.innerText = ele.Exp
        td5.innerText = ele.Email
        td6.innerText = ele.Mobile
       
        // role
        if(td4.innerText > 5)
        {
            td7.innerText = "Senior"
        }
        else if(td4.innerText >= 2 && td4.innerText <=5)
        {
            td7.innerText = "Junior"
        }
        else if(td4.innerText <= 1)
        {
            td7.innerText = "Trainee"
        }

        

        // Delete
        Delete.addEventListener("click", (e)=> {
            e.target.parentNode.parentNode.remove()
        })

        

        // Append 
        td8.append(Delete)

        row.append(td1,td2,td3,td4,td5,td6,td7,td8)

        tbody.append(row)

        

    })




})


