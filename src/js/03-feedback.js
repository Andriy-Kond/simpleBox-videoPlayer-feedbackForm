const formRef = document.querySelector(".feedback-form");
const throttle = require("lodash.throttle");

let formFieldsObj = {};
readLocalStorageFields();

formRef.addEventListener("input", throttle(inputField, 1000));
formRef.addEventListener("submit", submitForm);

function inputField(e) {
  // або:
  // const targetName = e.target.name;
  // const targetValue = e.target.value;
  // formFieldsObj = { ...formFieldsObj, [targetName]: targetValue };
  // або:
  formFieldsObj[e.target.name] = e.target.value;

  localStorage.setItem("formFields", JSON.stringify(formFieldsObj));
}

function readLocalStorageFields() {
  if (localStorage.getItem("formFields")) {
    formFieldsObj = JSON.parse(localStorage.getItem("formFields"));

    const keys = Object.keys(formFieldsObj);
    keys.map(key => {
      formRef[key].value = formFieldsObj[key];
    });
  }
}

function submitForm() {
  e.preventDefault();
  formFieldsObj = {};
  localStorage.removeItem("formFields");
}
