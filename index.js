const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let btnEl = document.getElementById("btn")
let firstPassword = document.getElementById("password1")
let secondPassword = document.getElementById("password2")

function generatePassword(passwordLength){
    // return Array(passwordLength)
    //     .fill(0)
    //     .map(_ => characters[Math.floor(Math.random() * characters.length)])
    //     .join("");
    
    let password =""
    for(let i = 1; i <= passwordLength; i++){
        let randomIndex = Math.floor(Math.random() * characters.length)
        password+= characters[randomIndex]
    }
    return password;
}

function displayPasswords() {
    firstPassword.textContent = generatePassword(15) 
    secondPassword.textContent = generatePassword(15)    
}

