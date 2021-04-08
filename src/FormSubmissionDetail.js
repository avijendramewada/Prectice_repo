import React from 'react';
import './FormSubmission.css';
const FormSubmissionDetail = () => {
    return (
        <body >
   
       <h1 style="text-align: center;"> User Table</h1>
    <table id="usertable">
        <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th></th>
        </tr>
        </thead>
    <tbody id="output"></tbody>
    </table>
    </body>
    )
}

export default FormSubmissionDetail
