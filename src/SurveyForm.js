import React,{useState} from 'react';
import './Form.css';
import { useHistory } from "react-router-dom";
function SurveyForm(){
  const history = useHistory();
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [usernumber, setNumber] = useState('');
  const [userage, setAge] = useState('');
  const [gender, setGender] = useState('Male');
  const [usermsg, setMsg] = useState('');
  //  const submitForm = e => {
  //   e.preventDefault();
  //   console.log("hello");
  //   this.props.history.push('/thank-you'); // <--- The page you want to redirect your user to.
  // }
  // function clearFeild() {
  //   username = "";
  //   email = "";
  //   usernumber = "";
  //   userage = "";
  //   gender = "";
  //   usermsg = "";
  // }
  const Submit = e =>{
    e.preventDefault();

    const reg= /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (username === null || username ==="") {
      alert("Name can't be blank");
      return false;
    }
    if (reg.test(email) === false) {
      alert("Enter valid Email");
      return false;
    }
    else if (isNaN(usernumber) || usernumber < 1 || (usernumber.length)<10) {
      alert("Enter valid mobile number.");
      return false;
    }
    else if (isNaN(userage) || userage < 1 ) {
      alert("Enter valid age");
      return false;
    
    }
       else if (gender === null || gender === "") {
      alert("please selet your gender");
      return false;
    } else if (localStorage.getItem(email) != null && localStorage.getItem(email).length > 0) {
      alert("Email already exist");
      return false;
    } else {
      
       const  userData = [username, email, usernumber, userage, gender, usermsg];
       localStorage.setItem(email, JSON.stringify(userData));
        //  localStorage.setItem('inputs', JSON.stringify(arrData));
     
      }
      history.push('detailpage');
    }
    return (
      <div className="container">
<form>
               <h1 >Survey form</h1>
          
               <label>UserName
               <input type="text" value ={username} onChange ={e => setName(e.target.value) } placeholder="Enter name here"/>
               </label>
                <label>Email
                <input type="text"value ={email} onChange ={e => setEmail(e.target.value) } placeholder="Enter email here"/>  
                </label>
                <label>Mobile Number
                <input type="nuber" name="user_number" value ={usernumber} onChange ={e => setNumber(e.target.value) } placeholder="Enter 10 digit number"/>
                </label>
                <label>Age
                <input type="number" value ={userage} onChange ={e => setAge(e.target.value) } placeholder="Enter age here"/>  
                </label>
                {/* onChange={this.setGender.bind(this)} */}
                <label>Gender<br/>
                <input type="radio" name="gender" checked={gender === 'Male'} value="Male" onClick={() => setGender('Male')}/> Male<br/>
               <input type="radio"  name="gender"checked={gender === 'Female'} value="Female" onClick={() => setGender('Female')}/>Female
                  </label><br/>
                <label  for="msg">
                Any comment or suggestions?
                <textarea type="text" value ={usermsg} onChange ={e => setMsg(e.target.value) } rows="4" cols="50" placeholder="Enter Text Here"></textarea>  
                </label>
              

            
                <div id="submitbutton">
                <button type="submit" id="submit"  onClick ={Submit}>Submit</button>  
            </div>

</form>
</div>    
    )
}

export default SurveyForm;
