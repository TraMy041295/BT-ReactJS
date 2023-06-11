import moduleth2 , { moduleth1 as modulethh1,moduleth1_1 } from "./module.js";
import moduleout from "../module.js";

console.log(modulethh1)

console.log(moduleth2)
let a = moduleth1_1()
console.log(a)
let body = document.querySelector("#abc")
body.innerHTML = a
let b = moduleout

body.prepend(b)

