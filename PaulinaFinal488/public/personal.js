function button_action () {

if(validateForm.name.value.toLowerCase() == "enter your name") {
		alert('Please enter your real name.');
		validateForm.name.focus();
		return false;
	}
	
	if (validateForm.name.value == "") {
		alert('Please enter your name.');
		document.validateForm.name.focus();
		return false; 
	}
	if(validateForm.email.value.toLowerCase() == "example@domain.com") {
		alert('Please enter your real email.');
		validateForm.email.focus();
		return false;
	}
	
	if (validateForm.email.value == "") {
		alert('Please enter your email.');
		validateForm.email.focus();
		return false;
	}
	
	var format = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if (format.test(validateForm.email.value) == false) {
		alert('Please enter a correct format of your email.');
		validateForm.email.focus();
		return false;
	}
	
	if(validateForm.subject.value == "") {
		alert('Please enter the subject.');
		validateForm.subject.focus();
		return false;
	}
	
	if(validateForm.comment.value == "") {
		alert('Please enter your questions or comments.');
		validateForm.comment.focus();
		return false;
	}
	alert('Thank you! I will get back to you as soon as possible.');
}

function resetForm() {
	document.validateForm.reset();
}


//Code for banner
var slideIndex=0;
showSlides();

function showSlides() {
	var i;
	var slides= document.getElementsByClassName("reviews");
	var dots= document.getElementsByClassName("dot");
	for (i=0; i<slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex> slides.length) {slideIndex=1}
	for (i=0; i<dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
	setTimeout(showSlides, 4000);
}
//Ends code for banner