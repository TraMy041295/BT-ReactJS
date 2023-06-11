let kids = [ {id: 1, name: "a", age: 3},
{id: 2, name: "b", age: 2},
{id: 3, name: "c", age: 7},
{id: 4, name: "d", age: 4},
{id: 5, name: "e", age: 8}]

let mau_giao = []
function kids_old(){
    for ( let kid of kids){
        if (kid.age < 6){
            mau_giao.push(kid)
        }
    }
    console.log(mau_giao)
}
kids_old()

let kids_learn = []
kids_learn = kids.filter(item=>{
    if(item.age > 6)return true

        return false
    
})
console.log("học sinh tiểu hoc :",kids_learn)