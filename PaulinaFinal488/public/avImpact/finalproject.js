//Validation of log in form
function login () {
	if(loginForm.username.value.toLowerCase() == "example@domain.com") {
		alert('Please enter your real email as your username.');
		loginForm.username.focus();
		return false;
	}
	
	if (loginForm.username.value == "") {
		alert('Please enter your email as your username.');
		loginForm.username.focus();
		return false;
	}
	
	var format = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if (format.test(loginForm.username.value) == false) {
		alert('Please enter a correct format of your email.');
		loginForm.username.focus();
		return false
	}
	
	if (loginForm.user_password.value == "") {
		alert('Please enter your password.');
		document.loginForm.user_password.focus();
		return false; 
	}
	window.open("loginval.html");
}
//Reset
function reset() {
	document.loginForm.reset();
}

//Ends validation for log in form

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

//Find help and Help wanted function
function search_action() {

	if (!document.searchForm.keyword.value) {
		alert('Please enter your keyword.');
		document.searchForm.keyword.focus();
		return false;
	}

	if(searchForm.location.selectedIndex==0) {
		alert('Please select the location.');
		searchForm.location.focus();
		return false;
	}
	
	window.open("search.html");
}

//Reset
function reset() {
	document.searchForm.reset();
}

//Sign up form 
function signup () {

if(signupForm.name.value.toLowerCase() == "enter your name") {
		alert('Please enter your real name.');
		signupForm.name.focus();
		return false;
	}
	
	if (signupForm.name.value == "") {
		alert('Please enter your name.');
		document.signupForm.name.focus();
		return false; 
	}
	
	if(signupForm.last_name.value.toLowerCase() == "enter your last name") {
		alert('Please enter your real last name.');
		signupForm.last_name.focus();
		return false;
	}	
	
	
	if (!document.signupForm.last_name.value) {
		alert('Please enter your last name.');
		document.signupForm.last_name.focus();
		return false;
	}

	if(signupForm.email.value.toLowerCase() == "example@domain.com") {
		alert('Please enter your real email.');
		signupForm.email.focus();
		return false;
	}
	
	if (signupForm.email.value == "") {
		alert('Please enter your email.');
		signupForm.email.focus();
		return false;
	}
	
	var format = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if (format.test(signupForm.email.value) == false) {
		alert('Please enter a correct format of your email.');
		signupForm.email.focus();
		return false;
	}
	
	if(signupForm.user_password.value.toLowerCase() == "create a password") {
		alert('Please create your password.');
		signupForm.user_password.focus();
		return false;
	}
	
	if (!document.signupForm.user_password.value) {
		alert('Please create a password.');
		document.signupForm.user_password.focus();
		return false;
	}
	
	if(signupForm.confirm_password.value.toLowerCase() == "confirm password") {
		alert('Please confirm your password.');
		signupForm.confirm_password.focus();
		return false;
	}
	
	if (document.signupForm.user_password.value != document.signupForm.confirm_password.value) {
		alert('Your passwords do not match. Please try again.');
		document.signupForm.confirm_password.focus();
		return false;
	}
	
//Credit card information of sign up form	
	if(signupForm.fname_card.value.toLowerCase() == "enter your name") {
		alert('Please enter the full name on the card.');
		signupForm.fname_card.focus();
		return false;
	}
	
	if (signupForm.fname_card.value == "") {
		alert('Please enter the full name on the card.');
		document.signupForm.fname_card.focus();
		return false; 
	}
	
	if (!document.signupForm.creditcard.value) {
		alert('Please enter your credit card number.');
		document.signupForm.creditcard.focus();
		return false;
	}
	
	if(isNaN(signupForm.creditcard.value)) {
		alert('Please enter numbers only for your credit card account.');
		sigupForm.creditcard.focus();
		return false;
	}
	
	if((signupForm.creditcard.value).length < 16) {
		alert('Please enter your 16 digit account number.');
		signupForm.creditcard.focus();
		return false;
	}
	
	if(signupForm.type_card.selectedIndex==0) {
		alert('Please select the type of card.');
		signupForm.type_card.focus();
		return false;
	}
	
	if (signupForm.exp_month.selectedIndex==0) {
		alert('Please select expiration month of card.');
		signupForm.exp_month.focus();
		return false;
	}
	
	if (signupForm.exp_year.selectedIndex==0) {
		alert('Please select expiration year of card.');
		signupForm.exp_year.focus();
		return false;
	}
	
	if (signupForm.cvv.value == "") {
		alert('Please enter three digits on back of card.');
		document.signupForm.cvv.focus();
		return false; 
	}
	
	if(isNaN(signupForm.cvv.value)) {
		alert('Please enter numbers only as your CVV.');
		sigupForm.creditcard.focus();
		return false;
	}
	
	if((signupForm.cvv.value).length < 3) {
		alert('Please enter your 3 digits from back of card.');
		signupForm.cvv.focus();
		return false;
	}
	
	window.open("signupval.html");
}

//Reset
function reset() {
	document.signupForm.reset();
}	

//Output of Search of Find Help and Help Wanted when not logged in 
function search_action() {

	if (!document.searchForm.keyword.value) {
		alert('Please enter your keyword.');
		document.searchForm.keyword.focus();
		return false;
	}

	if(searchForm.location.selectedIndex==0) {
		alert('Please select the location.');
		searchForm.location.focus();
		return false;
	}
	
	window.open("search.html");
}

//Reset
function reset() {
	document.searchForm.reset();
}

//Output of Search of Find Help
function search_result() {

	if (!document.searchForm.keyword.value) {
		alert('Please enter your keyword.');
		document.searchForm.keyword.focus();
		return false;
	}

	if(searchForm.location.selectedIndex==0) {
		alert('Please select the location.');
		searchForm.location.focus();
		return false;
	}
	
	window.open("searchresult.html");
}

//Reset
function reset() {
	document.searchForm.reset();
}

//Output of Search of Help Wanted
function hwanted_result() {

	if (!document.helpWanted.keyword.value) {
		alert('Please enter your keyword.');
		document.helpWanted.keyword.focus();
		return false;
	}

	if(helpWanted.location.selectedIndex==0) {
		alert('Please select the location.');
		helpWanted.location.focus();
		return false;
	}
	
	window.open("searchresult2.html");
}

//Reset
function reset() {
	document.helpWanted.reset();
}

