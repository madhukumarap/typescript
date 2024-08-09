// primitive js number, string ,boolean
//more complex like objcet array
let age:number;  //we declare the var and type typewill always start with lowercase
age =12
let userName: string;
userName = 'John'
let isInstructor:boolean;
isInstructor = true

console.log(age)

//more complex
let hobbies: string[];  // init the array of string
hobbies = ['madhu','kumar','12']

let person:{
    name:string;
    age:number
}; // we can use object or {}

person = {
    name:"madhu",
    age:21
}
let people:{
    name:string,
    age:number
}[];

// inference like dynamicalyy tries to now possible types
let course = 'React - The complete guide'
// course = 1234  // it show error becausr of inference
// union types
let course1: string | number;
course1 = 'React - The complete guide';
course1 = 1234;
//functions and types

function add(a:number, b:number):number{  //after we can define the type like number string or boolean
    return a + b;
}
function print(value:any){
    console.log(value)
}
//generics
function insertElement<T>(array:T[], value:T){
    const newArray = [value,...array]
    return newArray
}
const demoArray = [1,2,3,4]
const updateArray = insertElement(demoArray,-1) //output = [-1,1,2,3,4]

