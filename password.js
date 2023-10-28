let passwordbox =document.getElementById("password");
let length=12;

const uppercase= "ABCDEFGHIJKLMNOPQRSSTUVWXYZ";
const lowercase="abcdefghijklnopqrstuvwxyz";
const number="1234567890";
const symbol = "!@#$%^&*()[]{}<>~`<>?./,"

const allchars=uppercase+lowercase+number+ symbol;

function generator(){
    let password="";
    password += uppercase[ Math.floor(Math.random()*uppercase.length)];
    password += lowercase[ Math.floor(Math.random()*lowercase.length)];
    password += number[ Math.floor(Math.random()*number.length)];
    password += symbol[ Math.floor(Math.random()*symbol.length)];

    while (length>password.length) {
        password += allchars[ Math.floor(Math.random()*allchars.length)];
    }
    passwordbox.value = password;


}
function copy(){
    passwordbox.select();
    document.execCommand("copy");

}