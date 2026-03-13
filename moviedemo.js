

document.getElementById("breakingNews")?.addEventListener("click",function(){
alert("More movie details coming soon!");
});



document.getElementById("modeToggle")?.addEventListener("click",function(){
document.body.classList.toggle("light-mode");
});



let topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(window.scrollY>200){
topBtn.style.display="block";
}
else{
topBtn.style.display="none";
}

};

topBtn?.addEventListener("click",function(){
window.scrollTo({top:0,behavior:"smooth"});
});



let form=document.getElementById("contactForm");

form?.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let message=document.getElementById("message").value;

if(name=="" || email=="" || message==""){
document.getElementById("msg").innerText="Please fill all fields";
}
else{
document.getElementById("msg").innerText="Message sent successfully!";
}

});