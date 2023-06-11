let listAnimal = []
class animal {
    constructor(name,color,id){
        this.name = name
        this.color = color
        this.id = id
    }
}

let ani1 = new animal("Dog","black",1)
let ani2 = new animal("Mouse","white",2)
let ani3 = new animal("Cat","pink",3)

listAnimal.push(ani1,ani2,ani3)
console.log(listAnimal)

function renderAnimal(listAnimal){

    let element = document.querySelector("#render")
    element.innerHTML = ""
    for ( let item of listAnimal){
        element.innerHTML +=`<tr>
                            <td>${item.id}</td>
                            <td>${item.name}</td>
                            <td>${item.color}</td>
                            <td><button type="button" id="${item.id}" onclick="deleteAnimal(this)" class="btn btn-danger">Xoá</button></td>
                            <td><button type="button" id="${item.id}" onclick="editAnimal(this,indexedit)" class="btn btn-danger">Sửa</button></td>
                            </tr>` 
    }
}
renderAnimal(listAnimal)



function addAnimal (btnadd){
  console.log(btnadd)
        console.log(id,name,color)
        let id = document.querySelector("#id").value
        let name = document.querySelector("#name").value
        let color = document.querySelector("#color").value
        let aninew = new animal (name,color,id)
        listAnimal.push(aninew)
        console.log(listAnimal)
        renderAnimal(listAnimal)
        document.querySelector("#id").value = ""
        document.querySelector("#name").value = ""
        document.querySelector("#color").value = ""
    
}

function deleteAnimal(btndelete){
 let index = listAnimal.findIndex((item)=>item.id == btndelete.id)
 listAnimal.splice(index,1)
 console.log(listAnimal)
 renderAnimal(listAnimal)
}

let indexedit;
function editAnimal(btnedit){
    let index = listAnimal.findIndex((item)=>item.id == btnedit.id)
    indexedit = btnedit.id

    let id = document.querySelector("#id")
    let name = document.querySelector("#name")
    let color = document.querySelector("#color")
    
    id.value = listAnimal[index].id
    name.value =  listAnimal[index].name
    color.value =  listAnimal[index].color
}

function submitAnimal(){
    let submit = document.querySelector("#update")
    submit.addEventListener('click',function(){
        let indexupdate = listAnimal.findIndex((item)=>item.id == indexedit)
        console.log(indexupdate)
    })
}
