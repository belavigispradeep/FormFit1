function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Static usernames & passwords
    var users = {
        "user123": "userpass",
        "stakeholder123": "stakepass"
    };

    if (users[username] && users[username] === password) {
        alert("Login successful!");

        // Store session data in localStorage
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", username);

        // Redirect to index.html after login
        window.location.href = "../index.html";  
    } else {
        alert("Invalid Username or Password");
    }
}

// Logout Function
function logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    window.location.href = "pages/login.html"; // Redirect back to login page
}
