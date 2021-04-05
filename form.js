var userData = [];
function validateform() {
  var user_name = document.myform.user_name.value;
  var user_email = document.myform.user_email.value;
  var user_number = document.myform.user_number.value;
  var age = document.myform.age.value;
  var user_message = document.myform.user_message.value;
  var gender = document.myform.gender.value;
  // var inputs = document.myform.input[type=checkbox]
  // var arrData = [];
  //  inputs.forEach(function(input){
  //   arrData.push({ id: input.id, checked: input.checked });
  // });
  
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  
  
  if (user_name == null || user_name == "") {
    alert("Name can't be blank");
    return false;
  }
  else if (reg.test(user_email) == false) {
    alert("Enter valid Email");
    return false;
  }
  else if (isNaN(user_number) || user_number < 1) {
    alert("Enter valid mobile number.");
    return false;
  }
  else if (isNaN(age) || age < 1) {
    alert("Enter valid age");
    return false;
  }
    
  else {
    var users = JSON.parse(localStorage.getItem('users')) || [];
    // var obj = {
    //   "user_name": user_name,
    //   "user_email": user_email,
    //   "user_number": user_number,
    //   "age": age,
    //   "gender": gender,
    //   "user_message": user_message
    // }
    userData = [user_name, user_email, user_number, age, gender, user_message];
    users.pop(userData);
    // var array = JSON.parse(localStorage.getItem('user_details') || '[]');
    // array.push(user_details);
    localStorage.setItem(user_email, JSON.stringify(userData));
    //  localStorage.setItem('inputs', JSON.stringify(arrData));
  }
}
