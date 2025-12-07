const Form = document.getElementById("form");
const Submit = document.getElementById("submit");

const userForm = {
  name: "",
  email: "",
  password: "",
};

const createUserForm = () => {
  Form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    if (password.length < 6) {
      alert("Parol kamida 6 ta belgidan iborat bo‘lishi kerak!");
      passwordInput.focus();
      return;
    }

    userForm.name = name.value;
    userForm.email = email.value;
    userForm.password = password.value;

    console.log(userForm);
  });
};

createUserForm();

console.log(userForm);
