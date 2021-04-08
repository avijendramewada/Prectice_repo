import React, { useEffect } from 'react';
import './FormSubmission.css';
const FormSubmissionDetail = () => {
    useEffect(() => {
        // Run! Like go get some data from an API.
        for (let i = 0; i < localStorage.length; i++) {
             var key = localStorage.key(i);
            var storedData = JSON.parse(localStorage.getItem(key));
          var list = document.getElementById('output');
            const row = document.createElement('tr');
        row.innerHTML = `
          <td>${ storedData[0]}</td>
          <td>${storedData[1]}</td>
          <td><button onClick="viewdetail('${storedData}')" style="background-color:darkgrey; text-items: center ;width:120px" >View more</button> 
          <button onClick="deleterecord('${storedData[1]}')" style="background-color:darkgrey; text-items: center;width:120px" " >Delete</button> 
      
    </td>
        `;
         
        list.appendChild(row);
      }
    }, []);
    //view the all details of selected key
    // function viewdetail(storedData) {
    //   console.log("Hello", storedData);
    //   window.location.replace("view_details.html?" + storedData);
    // }
    //  //----Delete the record from localstorage and table
    // function deleterecord(storedData) {
    //   console.log("Hello", storedData);
    //   localStorage.removeItem(storedData);
    //   //window.open("survey_from_submissions.html" );
    //   window.location.reload();
    //   }
    
    return (
        <div>
            <body >
       <h1 style={{color: "grey",fontSize:21,marginTop:15}}> User Detail</h1>
    <table id="usertable">
        <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th> Back</th>
        </tr>
        </thead>
    <tbody id="output"></tbody>
    </table>
    </body>
    </div>
    )
}

export default FormSubmissionDetail
