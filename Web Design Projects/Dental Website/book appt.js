
var bookForm = document.getElementById('bookForm');


bookForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    let name= document.getElementById('name');
    let email= document.getElementById('email');
    let number= document.getElementById('number');
    let date= document.getElementById('date');
    if (name.value == "" || email.value == ""|| number.value == "" || date.value == "" ) {
        alert("Ensure you input a value in both fields!");
      } else {
        alert("This form has been successfully submitted!");
    console.log("The person's name for this request is", "'", name.value,"'",
    "\nTheir email is","'",email.value, "'",
    "\nTheir number is","'", number.value,"'",
    "\nTheir appointment date is","'",date.value,"'"
        );
    bookForm.reset();
      }
});

