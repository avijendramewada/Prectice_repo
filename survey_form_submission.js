// Book Class: Represents a Book
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
        return true;
        
    };

}




class SurveyDetail {
  constructor(user_name, user_email,user_number,age,gender,user_message) {
    this.user_name = user_name;
    this.user_email = user_email;
      this.user_number = user_number;
      this.age = age;
      this.gender = gender;
      this.user_message = user_message;
  }
}

// UI Class: Handle UI Tasks
// class UI {
//     static displayRecords() {
//         const records = Store.getRecords();

//         records.forEach((record) => UI.addRecordToList(record));
//     }

//     static addRecordToList(record) {
//         const list = document.querySelector('#record-list');

//         const row = document.createElement('tr');

//         row.innerHTML = `
//       <td>${record.user_name}</td>
//       <td>${record.user_email}</td>
//       <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
//     `;

       
//     }
// }
//   static deleteBook(el) {
//     if(el.classList.contains('delete')) {
//       el.parentElement.parentElement.remove();
//     }
//   }

//   static showAlert(message, className) {
//     const div = document.createElement('div');
//     div.className = `alert alert-${className}`;
//     div.appendChild(document.createTextNode(message));
//     const container = document.querySelector('.container');
//     const form = document.querySelector('#book-form');
//     container.insertBefore(div, form);

//     // Vanish in 3 seconds
//     setTimeout(() => document.querySelector('.alert').remove(), 3000);
//   }

//   static clearFields() {
//     document.querySelector('#title').value = '';
//     document.querySelector('#author').value = '';
//     document.querySelector('#isbn').value = '';
//   }
// }

// Store Class: Handles Storage
class Store {
    static getRecords() {
        let records;
        if (localStorage.getItem('records') === null) {
            records = [];
        } else {
            records = JSON.parse(localStorage.getItem('records'));
        }

        return records;
    }

    static addRecord(record) {
        const records = Store.getRecords();
        records.push(record);
        localStorage.setItem('records', JSON.stringify(records));
    }
}
//   static removeBook(isbn) {
//     const records = Store.getRecords();

//     records.forEach((book, index) => {
//       if(book.isbn === isbn) {
//         books.splice(index, 1);
//       }
//     });

//     localStorage.setItem('books', JSON.stringify(books));
//   }
//}

// Event: Display Books
// document.addEventListener('DOMContentLoaded', UI.displayRecords);// Event: Add a Book
document.getElementById('#survey-form').addEventListener("submit", (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const user_name = document.querySelector("username").value;
  const user_email = document.querySelector("useremail").value;
  const user_number = document.querySelector("usernumber").value;
    const age = document.querySelector("userage").value;
    const gender = document.querySelector("gen").value;
  const user_message = document.querySelector("msg").value;

  // Validate
  if(user_name === '' || user_email === '' || user_number === '') {
    alert('Please fill in all fields');
  } else {
    // Instatiate book
    const record = new SurveyDetail(user_name,user_email,user_number,age,gender,user_message);

    // Add Book to UI
    // UI.addRecordToList(record);

    // Add book to store
    Store.addRecord(record);

    // Show success message
    // UI.showAlert('Book Added', 'success');

    // // Clear fields
    // UI.clearFields();
  }
});

// Event: Remove a Book
// document.querySelector('#book-list').addEventListener('click', (e) => {
//   // Remove book from UI
//   UI.deleteBook(e.target);

//   // Remove book from store
//   Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

//   // Show success message
//   UI.showAlert('Book Removed', 'success');
// });