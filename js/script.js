function filterProject(category){
let projects=document.querySelectorAll(".project");

projects.forEach(function(project){
if(category==="all"){
project.style.display="block";
}
else{
if(project.classList.contains(category)){
project.style.display="block";
}else{
project.style.display="none";
}
}
});
}

let form=document.getElementById("contactForm");

if(form){
form.addEventListener("submit",function(e){
e.preventDefault();

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let message=document.getElementById("message").value;
let msg=document.getElementById("formMessage");

if(name==="" || email==="" || message===""){
msg.innerText="Semua field wajib diisi!";
msg.style.color="red";
}
else{
msg.innerText="Pesan berhasil dikirim!";
msg.style.color="green";
form.reset();
}
});
}