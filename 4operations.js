=  /// used to assign the value
==  /// used to compare the data
=== /// used to compare data and datatype


////example

var a = 10  /// here we assign value to a
var b = "10"  /// we assigned value to b

a==b  ///compares only the data
true
a===b ///not same datatype
false

var c = 98
a==c
false

////if data (==) is false obvisouly the datatype (===) will be false


var a = true
var b = "true"
a==b
false  ////note: it will work only for number if not it would be false
a===b
false

var a = 1
var b = true
a==b
true   ///bcz true is equal to 1 , false is equal to 0
a===b
false


var a = "john"
var b = "John"
a==b
false  ///bcz the javascript is case-sensitive

var a = 10
var b = 12

a==b
false
a>b
false
a<b
true
a>=b
false
a<=b
true
a=>b ///wrong
a=>b
a!=b
true

//negation  - it makes opposite of its original value


var a = true
!a
false

var a = false
!a
true

var a = 1
!a
false

var a = 0
!a
true 
////*note* the values output of this operator are always boolean either true or false


var a = -1
!a
false

var a = "hii"
!a
false

///Truthy = any number except 0 wether +ve or -ve, any string, true (boolean value)

//false = 0, false, null, undefined


isNaN(1) is Not a Number ///bcz 1 is a number so it gives false
false
isNaN(true)
false
isNaN("hii")
true
