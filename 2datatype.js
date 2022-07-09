var a = true;
var b = false;

true is equal to 1
false is equal to 0


true + true = 2
true + false = 1
false + false  = 0


10 + true
11
10+false
10
10-false
10
10*true
10
10*false
0
10/false
Infinity
10 + 'true'
'10true'
"true" + "true"
'truetrue'
'true' - 'true'
NaN

'a' + true
'atrue'
'b'+false
'bfalse'

//es5

"10" + "5"
'105'

var a = '10'
var b = '6'

a+b
'106'
a-b
4
parseInt(a)
10
parseInt(b)
6
a+b
'106'
parseInt(a)+parseInt(b)
16

var a ="hii"
parseInt(a)
NaN

var a = 12.2
var b = 2.8

parseInt(a) + parseInt(b)  ///parseInt() doesn't take decimal values it gives only number
14    

parseFloat(a) + parseFloat(b) //parseFloat() takes decimal values and it gives output using decimal values\
15


var a = "Delhi12023" ///if parseInt() faces a string in the Start it gives NaN
parseInt(a)
NaN

var b = "1234Delhi" ////if the string starts with integer or number then the parseInt() gives number till it lasts 
parseInt(b)
1234

var c = "123Delhi4560" //// if the string have number string and number then the parseInt() givs number till it lasts with number if a string is faced then it stops
 
parseInt(c)
123


///es6

var a = "10.11"
var b = "5.3"

Number(a) + Number(b)  ///number is new syntax in es6 instead of parseInt()
15.41
Number(a)- Number(b)
4.81

var a = "Delhi12023"   .///// if Number encounters any string in the value it stops and gives nan

Number(a)- Number(b)
NaN

var b = "1234Delhi"
Number(b)
NaN
