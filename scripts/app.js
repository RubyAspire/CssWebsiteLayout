let burger = document.querySelectorAll(".burger");//return an array of items
let lines = document.querySelectorAll(".line");

function openNav(){
    /*using the get elements by class name we will have to use a for loops to get every item and apply the classlist.toggle*/
    //const navs = document.getElementsByClassName("modal-nav");
    //for (let index = 0; index < navs.length; index++) {
    //    navs[index].classList.toggle("Show");
    //}
    burger.forEach(burg => burg.classList.toggle("bg-burger"));
    burger.forEach(burg => burg.classList.toggle("change"));
    lines.forEach(line => line.classList.toggle("bg-line"));
    
    const navs = document.querySelectorAll(".modal-nav");
    navs.forEach(nav => nav.classList.toggle("Show"));
}
/*for (let index = 0; index < burger.length; index++) {
    burger[index].addEventListener("click", openNav);
  }*/
burger.forEach(burg => burg.addEventListener("click", openNav));