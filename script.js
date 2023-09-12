
// To Add data to the local Storage
function addData(e){
    e.preventDefault();

   
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let otherName = document.getElementById("otherName").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let ConfirmPassword = document.getElementById("ConfirmPassword").value

    let person= {
        firstName: firstName,
        lastName :lastName,
        otherName : otherName,
        email:email,
        password:password,
        ConfirmPassword: ConfirmPassword
    }
    localStorage.setItem("person",JSON.stringify(person))
}
// To validate password
function validate() {
    const confirm = document.getElementById("password");
    const confirm2= document.getElementById("ConfirmPassword");
    if(confirm.value == confirm2.value)
     return true;
    else alert("Password do not match, Enter correct password");
    }
// To validate username for login
function signIn(e){
     usersName= document.getElementById("userName").value;
    const userPassword =document.getElementById("password").value;
    
    let userInput= {
        userName : firstName,
        userPassword: password

    }

    if(userInput.value == firstName.value && userPassword.value == password.value)
    return true;
    else alert("Enter Correct User Name");
    localStorage.setItem("userInput",JSON.stringify(userInput))
}
