function isFull(){
    let msg = document.getElementById('textarea-input').value;
    if(msg.length> 100){
        alert("You wrote over 100 characters")
    }
}

function isEmpty(){
    let name = document.getElementById ('input-Name').value 
    let email = document.getElementById ('input-Email').value 
    let msg = document.getElementById ('textarea-input').value 
    if (email == '') {
        alert ("You Forgot To Write Your Email Try Again") 
    }
    else if (name== ''){
        alert ("You Forgot To Write Your Name Try Again")
    }
    else if (msg== '')
    alert ("You Forgot To Write Your Message Try Again") 
    else{
        alert ("You Succesfully Sent Your Message")
        document.getElementById("input-Name").value = ""
        document.getElementById("input-Email").value = ""
        document.getElementById("textarea-input").value = ""
    }
}