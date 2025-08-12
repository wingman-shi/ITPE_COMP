// script.js

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "password123") {
    alert("Login successful!");
    window.location.href = "home.html";
  } else {
    alert("Invalid username or password.");
  }
});
