const form=document.querySelector('#form');
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const cpassword=document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})

function validateInputs(){
    const usernameVal=username.value.trim();
    const emailVal=email.value.trim();
    const passwordVal=password.value.trim();
    const cpasswordVal=cpassword.value.trim();
}
    if(usernameVal===''){
        setError(username,'Username is required')
    }
    else
        setsucces(username)

    if(emailVal===''){
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        setError(email,'Please enter a valid Email')
    }
    else{
        setsucces(email)
    }

    if(passwordVal===''){
        setError(password,'password is required')
    }
    else if(password.length<8){
        setError(password,'password must be atleast 8 characters long')
    }
    else{
        setsucces(password)
    }

    if(cpasswordVal===''){
        setError(password,'confirm password is required')
    }
    else if(cpasswordVal!==passwordVal){
        setError(cpassword,'password does not match')
    }
    else{
        setError(cpassword)
}
    

function setError(element,message){
    const inputgroup=element.parentElement;
    const errorElement=inputgroup.querySelector('.error')

    errorElement.innerText=message;
    inputgroup.classlist.add('error')
    inputgroup.classlist.remove('success')
}

function setsucces(element){
    const inputgroup=element.parentElement;
    const errorElement=inputgroup.querySelector('.error')

    errorElement.innerText='';
    inputgroup.classlist.add('success')
    inputgroup.classlist.remove('error')
}

const validateEmail=(email)=>{
    return String(email)
    .toLowerCase()
    .match()}       
