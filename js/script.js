var button = document.querySelector(".show-cat");
// console.log(button);

var cat =document.querySelector(".cat");
// console.log(cat);
//button.innerText="it is working";  
button.addEventListener("click", function(){
 cat.classList.add("show"); 
})