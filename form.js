function validateform(){  
    var user_name = document.myform.user_name.value;
    var user_email = document.myform.user_email.value;
    var user_number = document.myform.user_number.value;
    var age = document.myform.age.value;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
if (user_name==null || user_name==""){  
  alert("Name can't be blank");  
    return false; 
}
    else  if (reg.test(user_email)==false){
  alert("Enter valid Email");  
  return false;  
  }  
else if (isNaN(user_number) || user_number < 1 ) {
  alert("Enter valid mobile number.");  
  return false;  
    }
    else if(isNaN(age) || age < 1){  
  alert("Enter valid age");  
  return false;  
  }  
}  