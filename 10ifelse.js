if(condition)
{
    // Do something
}else
{
    // do something
}

var a = 3562
if(a%2==0)
{
    console.log('Number ${a} is even')
}else{
    console.log('Number ${a} is Odd')

}
Number ${a} is even

var a = 11769
if(a%2==0)
{
    console.log('Number ${a} is even')
}else{
    console.log('Number ${a} is Odd')

}
 Number ${a} is Odd


 var uname = "Surya"
 if(uname=="Sam"){
    console.log(`Hello ${uname} you are a valid User`)
 }else{
    console.log(`Hello ${uname} you are an invalid user`)
 }
 
Hello Surya you are an invalid user

var uname = "Surya"
if(uname=="Sam"){
   console.log(`Hello ${uname} you are a valid User`)
}else if(uname=="Surya"){
    console.log(`Hello ${uname} you are Admin`)
}else
{
    console.log(`hello ${uname} you are an Unknown User`)
}

 Hello Surya you are Admin


 var uname = "Christy"
 var role = "admin"

 if(role=="admin"){
    if(uname=="Sam"){
        console.log(`Hey ${uname} you are Admin`)
    }else if(uname=="Christy"){
        console.log(`hey ${uname}, you are Super Admin`)
    }else{
        console.log(`hey ${uname}, you are unknown`)

    }
}else if(role=="user"){
             if(uname=="Surya"){
       console.log(`Hello ${uname}, you are the main user`) 
       }else if(uname=="Mike"){
            console.log(`Hey ${uname} you are guest User`)
        }else{
        console.log(`hey ${uname}, you are unknown User`)
        }
    }else{
    console.log(`hey ${uname} you are not a valid Admin`)
 }
hey Christy, you are Super Admin


var uname = "Christy"
 var role = "user"

 if(role=="admin"){
    if(uname=="Sam"){
        console.log(`Hey ${uname} you are Admin`)
    }else if(uname=="Christy"){
        console.log(`hey ${uname}, you are Super Admin`)
    }else{
        console.log(`hey ${uname}, you are unknown`)

    }
}else if(role=="user"){
             if(uname=="Surya"){
       console.log(`Hello ${uname}, you are the main user`) 
       }else if(uname=="Mike"){
            console.log(`Hey ${uname} you are guest User`)
        }else{
        console.log(`hey ${uname}, you are unknown User`)
        }
    }else{
    console.log(`hey ${uname} you are not a valid Admin`)
 }
 hey Christy, you are unknown User


 var uname = "Amit"
var role = "Admin"

// both condition should match
var uname = "Amit"
var role = "Admin"
    
if(uname == "Amit" && role == "Admin"){
 console.log(`hey ${uname}, you are valid amdin`)
}else{
    console.log(`hey ${uname} you are invalid`)
}

hey Amit, you are valid amdin


// Any one should match
if(uname == "Amit" || role == "Admin"){

}

var uname = "Amit"
var role = "Admin"
    
if(uname == "sam" || role == "Admin"){
 console.log(`hey ${uname}, you are valid amdin`)
}else{
    console.log(`hey ${uname} you are invalid`)
}
hey Amit, you are valid amdin

//if both condition are false
var uname = "Amit"
var role = "Admin"
    
if(uname == "sam" || role == "user"){
 console.log(`hey ${uname}, you are valid amdin`)
}else{
    console.log(`hey ${uname} you are invalid`)
}

hey Amit you are invalid


var a = 0  //here is 0 false so else condition is output
if(a){
    console.log(`hiiii`)
}else{
    console.log(`bye`)
}
 bye

 var a =1 
if(a){
    console.log(`hiiii`)
}else{
    console.log(`bye`)
}
 hiiii

var a = -1.4    //based on 4operation.js  here any number except 0 are true. so it gives hii 
if(a){
    console.log(`hiiii`)
}else{
    console.log(`bye`)
}
 hiiii  


 (single line if else condition)
condition ? if condition true : if condition false

var a = 14
a>13?"hii":"bye"
'hii'
var a = 14
a==13?"hii":"bye"
'bye'

var a =53
a>13?a-1:a+2
52
