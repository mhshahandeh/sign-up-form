"use strict"

const submitBtn = document.getElementById("submit-info")
// name
const userName = document.querySelector("#first-name")
const nameError = document.querySelector(".first-name-error")
const nameLabel = document.querySelector(".name-label")

// last name
const userLastName = document.querySelector("#last-name")
const lastNameError = document.querySelector(".last-name-error")
const lastNameLabel = document.querySelector(".lastname-label")

// email
const userEmail = document.querySelector("#user-email")
const emailError = document.querySelector(".user-email-error")
const emailLabel = document.querySelector(".email-label")

// password
const userPass = document.querySelector("#user-pass")
const passError = document.querySelector(".user-pass-error")
const passLabel = document.querySelector(".pass-label")

const successMsg = document.querySelector(".success-msg")

// validation regex
let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passValidation = /^[A-Za-z]\w{7,14}$/;

let errorFunc = function() {

    if(userName.value.length === 0) {
        nameLabel.textContent = "نام الزامیست"
        userName.style.borderColor = "red"
        nameError.style.display = "inline"
    }
    if(userName.value.length > 0) {
        nameLabel.textContent = ""
        userName.style.borderColor = "$grayishBlue"
        nameError.style.display = "none"
    }
    if(userLastName.value.length === 0) {
        lastNameLabel.textContent = "نام خانوادگی الزامیست"
        userLastName.style.borderColor = "red"
        lastNameError.style.display = "inline"
    }
    if(userLastName.value.length > 0) {
        lastNameLabel.textContent = ""
        userLastName.style.borderColor = "$grayishBlue"
        lastNameError.style.display = "none"
    }
    if(userEmail.value.length === 0) {
        emailLabel.textContent = "ایمیل الزامیست"
        userEmail.style.borderColor = "red"
        emailError.style.display = "inline"
    }
    if(!userEmail.value.match(emailValidation) && userEmail.value.length !== 0) {
        emailLabel.textContent = "ایمیل معتبر نیست"
        userEmail.style.borderColor = "red"
        emailError.style.display = "inline"
    }
    if(userEmail.value.match(emailValidation)) {
        emailLabel.textContent = ""
        userEmail.style.borderColor = "$grayishBlue"
        emailError.style.display = "none"
    }
    if(userPass.value.length === 0) {
        passLabel.textContent = "رمزعبور الزامیست"
        userPass.style.borderColor = "red"
        passError.style.display = "inline"
    }
    if(!userPass.value.match(passValidation) && userPass.value.length !== 0) {
        passLabel.textContent = "رمز عبور باید بین ۷ تا ۱۶ حرف باشد"
        userPass.style.borderColor = "red"
        passError.style.display = "inline"
    }
    if(userPass.value.match(passValidation)) {
        passLabel.textContent = ""
        userPass.style.borderColor = "$grayishBlue"
        passError.style.display = "none"
    }
    if (
        userName.value.length > 0 &&
        userLastName.value.length > 0 &&
        userEmail.value.match(emailValidation) &&
        userPass.value.match(passValidation)
    ) {
        successMsg.textContent = "با موفقیت ثبت شد. لطفا ایمیل خود را چک کنید."
    } else {
        console.log("unknown error")
    }
}

submitBtn.addEventListener("click", function(e) {
    e.preventDefault()
    errorFunc()
})

userLastName.addEventListener("keyup", function(e) {
    if(e.keyup === 13) {
        e.preventDefault()
        errorFunc()
    }
})
userEmail.addEventListener("keyup", function(e) {
    if(e.keyup === 13) {
        e.preventDefault()
        errorFunc()
    }
})
userPass.addEventListener("keyup", function(e) {
    if(e.keyup === 13) {
        e.preventDefault()
        errorFunc()
    }
})