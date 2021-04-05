function dispData() {
  // var key = JSON.parse(localStorage.getItem('user_email'));
  // console.log(key);
  // // console.log(key);
    for (let i = 0; i < localStorage.length; i++) {
         var key = localStorage.key(i);
        var storedData = JSON.parse(localStorage.getItem(key));
      var list = document.getElementById('output');
        const row = document.createElement('tr');
    row.innerHTML = `
      <td>${ storedData[0]}</td>
      <td>${storedData[1]}</td>
      <td><button onclick="viewdetail('${storedData}')" style="background-color:darkgrey; text-items: center " >View more</button></td>
    `;
    list.appendChild(row);
  }
 
}
function viewdetail(storedData) {
  console.log("Hello", storedData);
  window.open("view_details.html?"+storedData );
// for (let i = 0; i < localStorage.length; i++) {
//          var key = localStorage.key(i);
//         var storedData = JSON.parse(localStorage.getItem(key));
//       console.log(storedData[1]);
       
  }
 




