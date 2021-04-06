//Get the user name and email from the localstorage and show on the table when the  function render in the dom 
function dispData() {
    for (let i = 0; i < localStorage.length; i++) {
         var key = localStorage.key(i);
        var storedData = JSON.parse(localStorage.getItem(key));
      var list = document.getElementById('output');
        const row = document.createElement('tr');
    row.innerHTML = `
      <td>${ storedData[0]}</td>
      <td>${storedData[1]}</td>
      <td><button onclick="viewdetail('${storedData}')" style="background-color:darkgrey; text-items: center " >View more</button> 
             <button onclick="deleterecord('${storedData[1]}')" style="background-color:darkgrey; text-items: center " >Delete</button> 
  
</td>

    `;
     
    list.appendChild(row);
  }
 
}
//view the all details of selected key
function viewdetail(storedData) {
  console.log("Hello", storedData);
  window.location.replace("view_details.html?" + storedData);
}
 //----Delete the record from localstorage and table
function deleterecord(storedData) {
  console.log("Hello", storedData);
  localStorage.removeItem(storedData);
  //window.open("survey_from_submissions.html" );
  window.location.reload();
  }



