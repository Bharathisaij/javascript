var city = "lonDoN"

city.toLowerCase()
'london'
city.toUpperCase()
'LONDON'
city.toLocaleLowerCase()
'london'
city.toString()
'lonDoN'
city.length
6

city[0]
'l'
city[4]
'o'
city[2]
'n'
city.at(0)
'l'
city.at(5)  //a.at(), a.charAt() are mostly used
'N'
city.charAt(0)
'l'
city.charAt(3)
'D'

city[city.length-1]
'N'
city.charAt(-1)
''
city.charAt(-4) //// negative values doesnt work with charAt()
''
city.at(-1)
'N'
city.at(-5)
'o'
city.at(-6) ///// negtaive values with at() gives value from back of the string
'l'

var uname = " Latha  "  ///trim() can remove the before and after spces of the imput. 
uname.trim()
'Latha'

var uname = " Latha . " /// trim() cannt remove the space btw the name and full stop. bcz it is a name with fulstop
uname.trim()
'Latha .'

var a = 'john'
var b = "John"
a == b
false
a===b
false
a.toLowerCase() == b.toLowerCase()
true


var city = "amsTerDaM" 

//// a m s T e r D a M
//// 0 1 2 3 4 5 6 7 8

//// a  m  s  T   e  r  D  a  M
//// -9 -8 -7 -6 -5 -4 -3 -2 -1


city.length
9
city.at(3)
'T'
////slice() extracts a part of a string and returns the extracted part in a new string.

//The method takes 2 parameters: the start position, and the end position (end not included
///If you omit the second parameter, the method will slice out the rest of the string:




city.slice(1)
'msTerDaM'
city.slice(4)
'erDaM'
city.slice(3)
'TerDaM'
city.slice(1, 8) ////Slice out a portion of a string from position 1 to position 8 (8 not included)
'msTerDa'
city.slice(2, 6)
'sTer'

city.slice(-1) ///If a parameter is negative, the position is counted from the end of the string.
'M'
city.slice(-5)
'erDaM'
city.slice(0, -2)
'amsTerD'

city.slice(-2, 2) ///negative then positive didn't work
''
city.slice(2, -2)
'sTerD'
city.slice(-5, -2)
'erD'

var city = "amsTerDaM"
city.at(0).toUpperCase()
'A'
city.slice(1).toLowerCase()
'msterdam'
city.at(0).toUpperCase() + city.slice(1).toLowerCase()
'Amsterdam'

var city = "brAZiL"
city.at(0).toUpperCase() + city.slice(1).toLowerCase()

'Brazil'


//replace() method replaces a specified value with another value in a string:
var a = "I am Learning Javascript"
a.replace('Javascript', 'JS')
'I am Learning JS'
var a = "Hello Javascript, I am Learning Javascript"  //The replace() method replaces only the first match
a.replace('Javascript', 'JS')
'Hello JS, I am learning Javascript'

//to replace all matches, use a regular expression with the /g flag set.

a.replaceAll('Javascript','Js')
'Hello Js, I am Learning Js'

a.replace(/Javascript/g, 'Js')
'Hello Js, I am Learning Js'

a.replace('javascript','js') //By default, the replace() method is case sensitive. javascript dont work so place 'Javascript'
'Hello Javascript, I am Learning Javascript'  

var a = "  Nikitha . "  //here replace is used to remove the extra spaces.
a.replace(/ /g,'')  //here, single space give btw the /(slashes) and globally by g, replaced with nothing so then spaces in the name are removed.
'Nikitha.'  


//A string can be converted to an array with the split() method:

var url = "https://github.com/Bharathisaij/Prj1-Xomato-/tree/main/image"
url.split('/')
(8) ['https:', '', 'github.com', 'Bharathisaij', 'Prj1-Xomato-', 'tree', 'main', 'image']


var a = "Hello Javascript, I am Learning Javascript"
a.split(' ')
(6) ['Hello', 'Javascript,', 'I', 'am', 'Learning', 'Javascript']

//the separator is "", the returned array will be an array of single characters:
var sub = "javascript"
sub.split('')
(10) ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']

var a = ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
a.toString()
'j,a,v,a,s,c,r,i,p,t'
a.toString().replace(/,/g, '')
'javascript'

var a = 10
a.toString()
'10'
""+a
'10'