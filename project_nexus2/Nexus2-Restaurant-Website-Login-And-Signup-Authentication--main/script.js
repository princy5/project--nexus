function login(event) {
  event.preventDefault();

  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  fetch("http://localhost:5000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.msg === "Login successful") {
        alert("Login successful!");
        // Redirect to another page
      } else {
        alert(data.msg);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function signup(event) {
  event.preventDefault();

  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;

  fetch("http://localhost:5000/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.msg === "User registered successfully") {
        alert("Sign up successful!");
        // Redirect to another page
      } else {
        alert(data.msg);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
