//among classes
//classlist
//contains
//add
//remove
//toggle




const navToggle = document.querySelector(".btn");
const links = document.querySelector(".topnav");

navToggle.addEventListener('click' , function(){ 
    //console.log(links.classList)
    if(links.classList.contains('show-links')){
        links.classList.remove('show-links');
    } else{
        links.classList.add("show-links");

    }

})


