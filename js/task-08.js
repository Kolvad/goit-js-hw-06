const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", (e) => {
  e.preventDefault();

  const { email, password } = e.currentTarget.elements;

  if (email.value === "" && password.value === "") {
    alert("Всі поля повинні бути наповнені");
    return;
  }

  const formObj = {
    email: email.value,
    password: password.value,
  };
  formRef.reset();
  console.log(formObj);
});
