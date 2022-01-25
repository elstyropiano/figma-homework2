const form = document.getElementById("form");
const psw = document.getElementById("password");
const submit = document.getElementById("submit");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let err = [];
  if (psw.value.length <= 6) {
    err.push("password must be at least 6 characters...");
    document.getElementById("password").style.border = "1px solid #CE0737";
  }

  if (err.length > 0) {
    e.preventDefault();
    errorElement.innerText = err.join(" ");
  }
});
