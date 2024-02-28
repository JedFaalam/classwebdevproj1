// JavaScript Document

document.addEventListener('DOMContentLoaded', function() {
	const accountButton = document.getElementById('accountButton');
	
	//check if the user is logged in
	function isUserLoggedIn(){	
		
		return localStorage.getItem('SignedIn') !== null;
	}
	
	
	if (isUserLoggedIn()){
		//if yes, then give them their account details
		accountButton.href = 'Account.html';
	} else {
		//if not then direct them to the signin page
		accountButton.href = 'SignIn.html';
	}
	
});