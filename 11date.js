Date is inbuilt method in Javascript

Date()
'Wed Jul 06 2022 22:22:35 GMT+0530 (India Standard Time)'

var a = new Date()  //to get date, month, year seperately
a.getDate()
6
a.getMonth()
6
a.getFullYear()
2022
a.getDay()
3

month start from 0 (as Jan) and end with 11 (as Decemebr)

day start from 1 as Monday and 0 as Sunday
Specifying a day higher than max, will not result in an error but add the overflow to the next month

Javascript Stores date as Milliseconds  since Jan 01, 1970 UTC

one day 24 hours is 86 400 000 milliseconds

