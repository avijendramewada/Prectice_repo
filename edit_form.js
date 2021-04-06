function saveArrayData() {
    var queryString = decodeURIComponent(window.location.search);
    queryString = queryString.substring(1);
    var storedData = queryString.split(",");
    console.log('queries', storedData);
    document.getElementById("name").value = storedData[0];
    document.getElementById("mail").value = storedData[1];
    document.getElementById("phonenumber").value = storedData[2];
  document.getElementById("age").value = storedData[3];
  if (storedData[4] == "male") {
    var radiobtn = document.getElementById("selectgen");
    radiobtn.checked = true;
  } else if (storedData[4] == "female") {
     var radiobtn = document.getElementById("selectgen1");
    radiobtn.checked = true;
  } else {
     var radiobtn = document.getElementById("selectgen2");
    radiobtn.checked = true;
  }
    document.getElementById("msg").value = storedData[5];
 
    console.log('gender' + storedData[4]);

}


var userData = [];


function validateform() {
  //document.getElementById("myText").value = "Johnny Bravo";
  var user_name = document.myform.user_name.value;
  var user_email = document.myform.user_email.value;
  var user_number = document.myform.user_number.value;
  var age = document.myform.age.value;
  var user_message = document.myform.user_message.value;
  var gender = document.myform.gender.value;


  // document.myform.user_name.value = "Hello World";
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
      else if (gender == null || gender == "") {
    alert("please selet your gender");
    return false;
  }
    
   else {
      userData = [user_name, user_email,user_number, age, gender, user_message];
      localStorage.setItem(user_email, JSON.stringify(userData));
      //  localStorage.setItem('inputs', JSON.stringify(arrData));
    }
}
