function ValidateForm() {


    let FirstName = document.forms['myform']["FirstName"].value;
    let LastName = document.forms['myform']["LastName"].value;
    let password = document.forms['myform']["password"].value;
    let Email = document.forms['myform']["Email"].value;
    let Phone = document.forms['myform']["Phonenumber"].value;
    let address = document.forms['myform']["Address"].value;




    if (FirstName == "" || LastName == "" || password == "" || Email == "" || Phone == "" || address == "") {
        alert("Must Fill all the Field.");
        return false;
    }
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(Email)) {
        alert("Enter correct Email.");
        return false;
    }

    let phonepattern = /^[0-9]{10}$/;
    if (!phonepattern.test(Phone)) {
        alert("Enter valid phone number.");
        return false;
    }
    let passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordpattern.test(password)) {
        alert("Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.");
        return false;
    }

    return true;



}