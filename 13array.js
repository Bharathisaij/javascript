//An Array is collection of Homogenous and Hetrogenous Data type
var a = ["hii", "hello", "Jake"] //array of string
var b = [1,2,331,11] //array of numbers
var c = [true, false, true, true] //array of boolean value

var d = ['hello', 234, true, "swathi", 82]

var city = ["Delhi", "Amsterdam", "Venice", "Boston"]
city.length
4
city[0]
'Delhi'
city[3]
'Boston'
city[city.length-1]
'Boston'
city[0,'Paris']
typeof(city)
'object'
//push() > add value in the last of array
//pop() > removes the last value of array
//shift > removes the first value of array
//unshift > removes the first value of array

//below are examples

var city = ["Delhi", "Amsterdam", "Venice", "Boston"]

undefined
city.length
4
city[city.length-1]
'Boston'
city[0]
'Delhi'
city.push("Paris")
5
city
(5) ['Delhi', 'Amsterdam', 'Venice', 'Boston', 'Paris']
city.push("Italy")
6
city
(6) ['Delhi', 'Amsterdam', 'Venice', 'Boston', 'Paris', 'Italy']
city.pop(0)
'Italy'
city
(5) ['Delhi', 'Amsterdam', 'Venice', 'Boston', 'Paris']
city.pop()
'Paris'
city
(4) ['Delhi', 'Amsterdam', 'Venice', 'Boston']
city.shift()
'Delhi'
city
(3) ['Amsterdam', 'Venice', 'Boston']
city.unshift("Belgium")
4
city
(4) ['Belgium', 'Amsterdam', 'Venice', 'Boston']

////slice() extracts a part of a string and returns the extracted part in a new string.

//The method takes 2 parameters: the start position, and the end position (end not included

city.slice(1,2)
['Amsterdam']
city
(4) ['Belgium', 'Amsterdam', 'Venice', 'Boston']

///If you omit the second parameter, the method will slice out the rest of the string:

city.slice(2)
(2) ['Venice', 'Boston']
city.slice(0,1)
['Belgium']
city
(4) ['Belgium', 'Amsterdam', 'Venice', 'Boston']
city.slice(2)
(2) ['Venice', 'Boston']
city.slice(1,2)
['Amsterdam']
city
(4) ['Belgium', 'Amsterdam', 'Venice', 'Boston']
city.slice(-1)
['Boston']
city.slice(-2)
(2) ['Venice', 'Boston']
city.slice(-1,0)
[]
city.slice(-1,2)
[]
city.slice(-3)
(3) ['Amsterdam', 'Venice', 'Boston']

//splice() method can be used to add new items to an array:
//splice(index number, delete count, value to added)
//the first parameter defines the position of where new elements should be added , second parameter defines how many elements tp be removed, third Paramter defines the elements to be added

city
(4) ['Belgium', 'Amsterdam', 'Venice', 'Boston']
city.splice(1,0,"Germany")
[]
city
(5) ['Belgium', 'Germany', 'Amsterdam', 'Venice', 'Boston']
city.splice(2,0,"New York","Cannada")
[]
city
(7) ['Belgium', 'Germany', 'New York', 'Cannada', 'Amsterdam', 'Venice', 'Boston']

//splice(index number, no of values to delete)
city.splice(3,1)
['Cannada']
city.splice(2,3)
(3) ['New York', 'Amsterdam', 'Venice']
city
(3) ['Belgium', 'Germany', 'Boston']
city.indexOf('Cannada')
-1

var a = ['a', 'b', 'c','d']
var b = [1,2,4,5]
a+b
'a,b,c,d1,2,4,5'
a.concat(b)
(8) ['a', 'b', 'c', 'd', 1, 2, 4, 5]
var a = 'hiii'
var b = ["hiii"]
Array.isArray(a)
false
var a = 'hiii'
var b = ["hiii"]
Array.isArray(b)
true
var city = ['Venice', 'Amsterdam',['Red',['Bmw','Audi','Merc'],'Yellow','Green'], 'Boston', 'Pune']
      ////// 0 , 1, 2(array), 3, 4
      /////////0,1,2[0,1(array),2,3],3,4
      ///////// 0, 1, 2 [0, 1[0,1,2],2,3],3,4
city[0]
'Venice'
city[4]
'Pune'
city[2][2]
'Yellow'
city[2][1]
(3) ['Bmw', 'Audi', 'Merc']
city[2][1][1]
'Audi'

city[2][1][2]
'Merc'


