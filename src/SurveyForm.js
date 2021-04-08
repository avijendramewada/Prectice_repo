import React,{useState} from 'react';
import './Form.css';
import { Link, Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function SurveyForm(){
  const history = useHistory();
  let [username, setName] = useState('');
  let [email, setEmail] = useState('');
  let [usernumber, setNumber] = useState('');
  let [userage, setAge] = useState('');
  let [gender, setGender] = useState('Male');
  let [usermsg, setMsg] = useState('');
  //  const submitForm = e => {
  //   e.preventDefault();
  //   console.log("hello");
  //   this.props.history.push('/thank-you'); // <--- The page you want to redirect your user to.
  // }
  function clearFeild() {
    username = "";
    email = "";
    usernumber = "";
    userage = "";
    gender = "";
    usermsg = "";
  }
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
    else if (isNaN(usernumber) || usernumber < 1|| usernumber.length === 10) {
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
      <div>
        <form>
          <h1>Survey form</h1>
          <h5>Username</h5>
          <input type="text" value={username} onChange={e=>setName(e.target.value) } placeholder="Enter name here"/>
          <h5>Email</h5>
          <input type="text" value={email} onChange={e=>setEmail(e.target.value) } placeholder="Enter email here"/>
          <h5>Number</h5>
          <input name="user_number" value={usernumber} onChange={e=>setNumber(e.target.value) } placeholder="Enter 10 digit number"/>
          <h5>Age</h5>
          <input type="number" value={userage} onChange={e=>setAge(e.target.value) } placeholder="Enter age here"/>
          <div>
            <h5>Gender</h5>
            <input type="radio" name="gender" defaultChecked={gender==='Male' } value="Male" onChange={()=>setGender('Male')}/> Male
            <input type="radio" name="gender" defaultChecked={gender==='Female' } value="Female" onChange={()=>setGender('Female')}/>Female
          </div>
          <div>
            <label htmlFor="msg"></label>
            <p>Any comment or suggestions?</p>
            <textarea type="text" value={usermsg} onChange={e=>setMsg(e.target.value) } rows="4" cols="50" placeholder="Enter Text Here"></textarea>
          </div>
          <div id="submitbutton">
            <button type="submit" id="submit" onClick={Submit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
    
    )
}

export default SurveyForm;
