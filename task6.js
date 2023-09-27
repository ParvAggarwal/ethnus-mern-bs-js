const users = [
  { username: "parv", password: "parv" },
  { username: "aggarwal", password: "agg" },
];

document.getElementById("loginButton").addEventListener("click", function (e) {
  e.preventDefault();

  const usernameInput = document.getElementById("usrname").value;
  const passwordInput = document.getElementById("pass").value;

  const foundUser = users.find(
    (user) => user.username === usernameInput && user.password === passwordInput
  );

  if (foundUser) {
    alert("Login successful!");
  } else {
    alert("Invalid Username or Password");
  }
});
