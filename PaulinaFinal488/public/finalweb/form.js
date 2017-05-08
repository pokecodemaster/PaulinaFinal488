function validateForm() {
	
    var fName = document.forms["contactForm"]["FirstName"].value;
	var lName = document.forms["contactForm"]["LastName"].value;
	var pNumber = document.forms["contactForm"]["PhoneNumber"].value;
	var emaill = document.forms["contactForm"]["Email"].value;
	
    if (fName == null || fName == "") {
        alert("First Name must be filled out");
        return false;
    }
	
    if (lName == null || lName == "") {
        alert("Last Name must be filled out");
        return false;
    }
	
    if (pNumber == null || pNumber == "") {
        alert("Phone Number must be filled out");
        return false;
    }
	
    if (emaill == null || emaill == "") {
        alert("Email must be filled out");
        return false;
    }
	
	return true;
	
	if(fName.length > 0 && lName.length > 0 && pNumber.length > 0 && emaill.lenght > 0){
		document.getElementById("response").innerHTML = "Input OK";
	}
	
}