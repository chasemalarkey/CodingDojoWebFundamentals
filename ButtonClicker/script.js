function logOut(element){
    if (element.innerText === "Log Out")
        {
            element.innerText = "Login"
        }
    else{
        element.innerText = "Log Out";
    }
}

function hide(element){
    element.remove();
}

function addLikes(id){
    alert('Ninja was liked')
    var changeMe = document.querySelector(`#${id}`)
    // console.log(parseInt(changeMe))
    changeMe.innerText= parseInt(changeMe.innerText)+1
}