const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  if (password.length < 6) {
    alert("Parol kamida 6 ta belgidan iborat bo‘lishi kerak!");
    passwordInput.focus();
    return;
  }

  console.log("Login ma’lumotlari:");
  console.log("Email:", email);
  console.log("Parol:", password);

  alert("Login muvaffaqiyatli! (Console’da ma’lumotlar ko‘rinadi)");
});
