var  //we can  redeclared and reassigned
let   //we cannot redeclared but can reassign
const  //we cannot  redeclared nor reassigned




var a = 11
> a
11
> var a = 44  //redeclare
> a
44
>  a =12
12
> a
12
>  let b = 14
> b
14
> let b = 25
Uncaught SyntaxError: Identifier 'b' has already been declared
> b
14
> b = 42
42
> b
42
> const c = 14

> c
14
> const c = 47
Uncaught SyntaxError: Identifier 'c' has already been declared
> c = 23
Uncaught TypeError: Assignment to constant variable.
> c
14