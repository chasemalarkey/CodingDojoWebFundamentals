function addLikes(id){
    var changeMe = document.querySelector(`#${id}`)
    changeMe.innerText = parseInt(changeMe.innerText)+1
}