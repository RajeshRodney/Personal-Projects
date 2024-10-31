var form = document.getElementById('form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    let name= document.getElementById('name');
    let email= document.getElementById('email');
    let subject= document.getElementById('subject');
    let message= document.getElementById('message');
    if (name.value == "" || email.value == ""|| subject.value == "" || message.value == "" ) {
        alert("Ensure you input a value in both fields!");
      } else {
        alert("This form has been successfully submitted!");
    console.log("The person's name for this request is", "'", name.value,"'",
    "\nTheir email is","'",email.value, "'",
    "\nThe subject for their message is","'", subject.value,"'",
    "\nTheir message is","'",message.value,"'"
        );
    form.reset();
      }
});

