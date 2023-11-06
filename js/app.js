const name=document.getElementById("name");
const surname=document.getElementById("surname");
const username=document.getElementById("username");
const phone=document.getElementById("phone");
const email=document.getElementById("email");
const password=document.getElementById("password");
const btn=document.getElementById("btn");
const validation=()=>{
    if(name.value==''){
        name.style.outlineColor="red";
        name.focus();
        return;
    }

    if(surname.value ==''){
        surname.style.outlineColor="red";
        surname.focus();
        return;
    }
    if(phone.value==""){
        phone.style.outlineColor="red";
        phone.focus();
        return;
    }
    if(email.value==""){
        email.style.outlineColor="red";
        email.focus();
        return;
    }
    if (password.value=="") {
        password.style.outlineColor="red";
        password.focus();
        return;
    }
}
const clearValue=()=>{
    name.value='';
    surname.value="";
    username.value='';
    phone.value='';
    email.value='';
    password.value='';
}
const createObj=()=>{
    let user={};
    user.name=name.value;
    user.surname=surname.value;
    user.username=username.value;
    user.phone=phone.value;
    user.email=email.value;
    user.password=password.value;
    console.log(user);
    const data=localStorage.getItem("users")?JSON.parse(localStorage.getItem('users')):[];

    if (data.length) {
        data.forEach(el => {
            if (el.username=username.value) {
                alert("bunday foydalanuvchi mavjud");
                username.value="";
                username.style.outlineColor="red";
                username.focus();
                return;
            }
        });
    }
    
        data.push(user)
    
        localStorage.setItem('users',JSON.stringify(data));
        clearValue();
        window.location.href="file:///C:/Users/Windows%20CS/Desktop/auth/kirish.html";
}
btn.addEventListener('click',()=>{
   validation();
    createObj();
   
});


