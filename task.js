//////////////////// registration form///////////////////////
function handleRegistration(event) {
  event.preventDefault();

  let userName = document.querySelector("#username");
  let email = document.querySelector("#email");
  let phoneNumber = document.querySelector("#PhoneNumber");
  let gender = document.querySelector("#gender");
  let dob = document.querySelector("#dob");
  let password = document.querySelector("#password");

  let userInfo = {
    id: null,
    userName: userName.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
    gender: gender.value,
    dob: dob.value,
    password: password.value,
  };

  let Result = validateInputs(
    userInfo,
    userName,
    email,
    phoneNumber,
    gender,
    dob,
    password
  );

  if (Result === true) {
    let storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData === null) {
      userInfo.id = 1;
      localStorage.setItem("userData", JSON.stringify([userInfo]));
    } else {
      userInfo.id = storedData.length + 1;
      localStorage.setItem(
        "userData",
        JSON.stringify([...storedData, userInfo])
      );
    }
    window.location.href = "login.html";
  }
}

function validateInputs(
  userInfo,
  userName,
  email,
  phoneNumber,
  gender,
  dob,
  password
) {
  if (
    userInfo.userName === "" ||
    userInfo.email === "" ||
    userInfo.phoneNumber === "" ||
    userInfo.gender === "select" ||
    userInfo.dob === "" ||
    userInfo.password === ""
  ) {
    if (userInfo.userName === "") {
      markLoginErr(userName);
    } else {
      removeLoginErr(userName);
    }

    if (userInfo.email === "") {
      markLoginErr(email);
    } else {
      removeLoginErr(email);
    }

    if (userInfo.phoneNumber === "") {
      markLoginErr(phoneNumber);
    } else {
      removeLoginErr(phoneNumber);
    }

    if (userInfo.gender === "select") {
      markLoginErr(gender);
    } else {
      removeLoginErr(gender);
    }

    if (userInfo.dob === "") {
      markLoginErr(dob);
    } else {
      removeLoginErr(dob);
    }

    if (userInfo.password === "") {
      markLoginErr(password);
    } else {
      removeLoginErr(password);
    }

    return false;
  } else {
    return true;
  }
}

////////////////////////// login from/////////////////////////////////////
function handleLogin(event) {
  event.preventDefault();

  let loginEmail = document.querySelector("#loginEmail");
  let loginPassword = document.querySelector("#loginPassword");

  if (loginEmail.value === "" || loginPassword.value === "") {
    if (loginEmail.value === "") {
      markLoginErr(loginEmail);
    } else {
      removeLoginErr(loginEmail);
    }
    if (loginPassword.value === "") {
      markLoginErr(loginPassword);
    } else {
      removeLoginErr(loginPassword);
    }
  } else {
    removeLoginErr(loginEmail);
    removeLoginErr(loginPassword);

    let userInputData = {
      email: loginEmail.value,
      password: loginPassword.value,
    };

    let storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData === null) {
      document.querySelector(".errorMsgBox").style.display = "flex";
    } else {
      let vaildUserLogin = checkVaildUser(
        userInputData,
        loginEmail,
        loginPassword
      );

      if (vaildUserLogin === true) {
        window.location.href = "content.html";
      }
    }
  }
}
function checkVaildUser(userInputData, loginEmail, loginPassword) {
  let storedData = JSON.parse(localStorage.getItem("userData"));

  if (
    storedData[0].email !== userInputData.email ||
    storedData[0].password !== userInputData.password
  ) {
    if (storedData[0].email !== userInputData.email) {
      markLoginErr(loginEmail);
    } else {
      removeLoginErr(loginEmail);
    }

    if (storedData[0].password !== userInputData.password) {
      markLoginErr(loginPassword);
    } else {
      removeLoginErr(loginPassword);
    }
    return false;
  } else {
    return true;
  }
}

////////////////error////////////////
function markLoginErr(inputField) {
  inputField.parentElement.classList.add("error");
}
function removeLoginErr(inputField) {
  inputField.parentElement.classList.remove("error");
}
///////////////empty user data/////////
function RegisterFirst() {
  window.location.href = "index.html";
  document.querySelector(".errorMsgBox").style.display = "none";
}
