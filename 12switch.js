if else > multiple conditions  & multiple output
ternory > One condition & one output
Switch > one condition & Multiple output

let uname = "Jake"
switch(uname){
    case 'Jake':
        console.log(`hi ${uname}`);
        case 'Mike':
            console.log(`hi ${uname}`);
        default:
            console.log(`Hello Unknown`)
}
 hi Jake
hi Jake
Hello Unknown

let uname = "Jake"
switch(uname){
    case 'Baby':
        console.log(`hi ${uname}`);
        case 'Mike':
            console.log(`hi ${uname}`);
        default:
            console.log(`Hello Unknown`)
}
Hello Unknown

let uname = "Nancy"
switch(uname){
    case 'Jake':
        console.log(`hi ${uname}`);
        case 'Nancy':
            console.log(`hi ${uname}`);
        default:
            console.log(`Hello Unknown`)
}
hi Nancy
Hello Unknown