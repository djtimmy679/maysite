function authenticate(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorText = document.getElementById("errorText");
    
    if (username === "may" && password === "quirkyboobsfreakydick") {
      // Successful authentication
      window.location.href = "welcome.html"; // Redirect to a welcome page
    } else {
      // Display error message
      errorText.textContent = "Invalid username or password.";
    }
  }