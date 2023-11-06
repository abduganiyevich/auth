const username=document.getElementById("username");
const password=document.getElementById("password");
const btn=document.getElementById("btn");


btn.addEventListener('click',()=>{
    const data=localStorage.getItem("users")?JSON.parse(localStorage.getItem("users")):[];

    if(data.length) {
       data.forEach((user)=>{
        if(user.username==username.value&&user.password==password.value){
            window.location.href="file:///C:/Users/Windows%20CS/Desktop/auth/success.html"
        }
       })
    }
    
       if (!isExist) {
        alert("siz royhatdan o'tmadingiz");
        window.location.href="file:///C:/Users/Windows%20CS/Desktop/auth/register.html";
    
       }
});