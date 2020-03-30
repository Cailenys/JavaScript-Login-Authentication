/* ======================================================================
    JavaScript Login Authentication
====================================================================== */


var userInfo= [
    {username: "Jason", password: "Basketball3"},
    {username : "Lysa", password: "KitKat"},
    {username : "Bob", password: "Golf!"}
  ]
  
  
  function getInfo() {
   
	let username = document.getElementById('username').value
	let password = document.getElementById('password').value

	for(var i = 0; i < userInfo.length; i++) { // Following example from: https://appsbuilders.org/guides/how-to-build-a-login-system-with-javascript/
		// check is user input matches username and password from the array
		if(username == userInfo[i].username && password == userInfo[i].password) {
			console.log(username + " is logged in!!!")
			// stop the function if this is found to be true
			return
		}
	}
	console.log("The username or password you have entered is not valid")
}