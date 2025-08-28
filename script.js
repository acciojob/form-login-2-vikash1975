//your JS code here. If required.
let FirstName=document.getElementById("firstName");
let LastName=document.getElementById("lastName");
let PhoneNumber=document.getElementById("phoneNumber");
let EmailID=document.getElementById("emailId");
let submit=document.getElementById("submit");

submit.addEventListener("click", ()=>{
	alert(`First Name:${FirstName.value} Last Name:${LastName.value} Phone Number:${PhoneNumber.value}  EmailId:${EmailID.value} `)
})