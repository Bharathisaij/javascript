console.log() ///for checking output & debugging
alert()  ///for notification
prompt()  ///for taking input from User
confirm()   //// yes or no confirmation

alert("Form is Submitted")

alert("The session is ended")


confirm("Exit the App?")
true
confirm("Exit the App?")
false
//// confirm is basically to take the input true either false

var a = confirm("Exit the App?")
a
true
var a = confirm("Exit the App?")
a
false


prompt("please enter your name!")
'bharathi '
prompt("Enter your age")
'25'

//// the values that enter or returned in the form by prompt are always in the form of "String"

var a = prompt("enter the first value")  //// 50
var b = prompt("enter the second value") ////22
var out = a+b /////
alert(out)
///output is 5022
///bcz it takes as string

var a = prompt("enter the first value")  //// 50
var b = prompt("enter the second value") ////22
var out = Number(a+b) /////
alert(out)

////5022
 //// it doesnt work if we put Number we should convert each variable to num

 var a = prompt("enter the first value")  //// 50
var b = prompt("enter the second value") ////22
var out = Number(a) + Number(b) /////so here the a and b changed to Number 
alert(out)
72
