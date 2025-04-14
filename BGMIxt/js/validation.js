var fm_password = document.getElementById("fm-password");
var lowercase = document.getElementById("fm-password-tooltip-lowercase");
var uppercase = document.getElementById("fm-password-tooltip-uppercase");
var number = document.getElementById("fm-password-tooltip-number");
var symbol = document.getElementById("fm-password-tooltip-symbol");
var length_input = document.getElementById("fm-password-tooltip-length");
var pay;
// When the user starts to type something inside the password field
fm_password.onkeyup = function () {
  "use strict";

  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (fm_password.value.match(lowerCaseLetters)) {
    lowercase.classList.remove("fm-password-invalid");
    lowercase.classList.add("fm-password-valid");
  } else {
    lowercase.classList.remove("fm-password-valid");
    lowercase.classList.add("fm-password-invalid");
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if (fm_password.value.match(upperCaseLetters)) {
    uppercase.classList.remove("fm-password-invalid");
    uppercase.classList.add("fm-password-valid");
  } else {
    uppercase.classList.remove("fm-password-valid");
    uppercase.classList.add("fm-password-invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (fm_password.value.match(numbers)) {
    number.classList.remove("fm-password-invalid");
    number.classList.add("fm-password-valid");
  } else {
    number.classList.remove("fm-password-valid");
    number.classList.add("fm-password-invalid");
  }

  // Validate symbol
  var symbols = /[\W]/g;
  if (fm_password.value.match(symbols)) {
    symbol.classList.remove("fm-password-invalid");
    symbol.classList.add("fm-password-valid");
  } else {
    symbol.classList.remove("fm-password-valid");
    symbol.classList.add("fm-password-invalid");
  }

  // Validate length
  if (fm_password.value.length >= 8) {
    length_input.classList.remove("fm-password-invalid");
    length_input.classList.add("fm-password-valid");
  } else {
    length_input.classList.remove("fm-password-valid");
    length_input.classList.add("fm-password-invalid");
  }
};

///////////////////////////////////////////

///////////////////////////

function validateForm() {
  "use strict";

  var fm = document.getElementById("formRegister");
  var reg_para = document.getElementById("secRegisterPara");

  var fm_name_1 = document.getElementById("fm-name-1");
  var fm_name_2 = document.getElementById("fm-name-2");
  var fm_email = document.getElementById("fm-email");
  var fm_phone = document.getElementById("fm-phone");
  var fm_bgmi_id = document.getElementById("fm-bgmi-id");
  var fm_age = document.getElementById("fm-age");
  var fm_gender = document.getElementsByName("fm-gender");

  var textOutput = document.getElementById("validationInfo");
  var text;

  // console.log('handleSubmit')
  var name = document.getElementById("fm-name-1").value;
  var email = document.getElementById("fm-email").value;
  var bgmiIds = document.getElementById("fm-bgmi-id").value;

  console.log(name, email, bgmiIds);
  const serviceId = "service_ows7lvn";
  const templateId = "template_ek97vsi";
  const publicKey = "Q-CFWWmFTSSBlJ9bk";

  const templateParams = {
    from_name: name,
    from_email: email,
    to_name: "Riyan",
    // id:bgmiIds,
    id: pay,
  };

  console.log(templateParams);
  emailjs
    .send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log("SUCCESS!");
      // setName('');
      // setEmail('');
      // setMessage('');
    })
    .catch((error) => {
      console.log("Error Sending Email", error);
    });

  if (!fm_name_1.checkValidity()) {
    text = '<span style="color:#e74c3c">&#10006; Enter your Full Name.</span>';
    fm_name_1.focus();
  } else if (!fm_name_2.checkValidity()) {
    text =
      '<span style="color:#e74c3c">&#10006; Enter your Full Name. Double checking.</span>';
    fm_name_2.focus();
  } else if (fm_gender[0].checked === false && fm_gender[1].checked === false) {
    text = '<span style="color:#e74c3c">&#10006; Select your Gender.</span>';
  } else if (fm_name_1.value !== fm_name_2.value) {
    text =
      '<span style="color:#e74c3c">&#10006; Name fields do not match.</span>';
    fm_email.focus();
  } else if (!fm_password.checkValidity()) {
    text =
      '<span style="color:#e74c3c">&#10006; Enter a Password with at least 1 lowercase, 1 uppercase, 1 number, and 1 symbol.</span>';
    fm_password.focus();
  } else if (!fm_phone.checkValidity()) {
    text =
      '<span style="color:#e74c3c">&#10006; Enter your 10-digit Mobile Number.</span>';
    fm_phone.focus();
  } else if (!fm_bgmi_id.checkValidity()) {
    text =
      '<span style="color:#e74c3c">&#10006; Enter your 9-digit BGMI ID.</span>';
    fm_bgmi_id.focus();
  } else if (!fm_age.checkValidity()) {
    if (fm_age.validity.rangeUnderflow) {
      text =
        '<span style="color:#e74c3c">&#10006; Your age must be above 16 to participate.</span>';
      fm_age.focus();
    } else if (fm_age.validity.rangeOverflow) {
      text =
        '<span style="color:#e74c3c">&#10006; You are too old to participate.</span>';
      fm_age.focus();
    } else {
      text = '<span style="color:#e74c3c">&#10006; Enter your Age.</span>';
      fm_age.focus();
    }
  }
  // Ensure payment is successful before submission
  else if (!pay || pay.trim() === "") {
    text = '<span style="color:#e74c3c">&#10006; Payment not completed.</span>';
  } else {
    textOutput.innerHTML = "";
    reg_para.innerHTML =
      '<span style="color:#ECB500;font-size:1.5rem;font-weight:bold;">Registration Successful!</span>';
    fm.innerHTML = "";
    return true;
  }

  textOutput.innerHTML = text;
  return false;
}

//////////////////////////////////////
// console.log('handleSubmit')
// var name = document.getElementById('fm-name-1').value;
// var email = document.getElementById('fm-email').value;
// var bgmiIds = document.getElementById('fm-bgmi-id').value;

// console.log(name, email, bgmiIds)
// const serviceId = 'service_ows7lvn';
// const templateId = 'template_ek97vsi';
// const publicKey = 'Q-CFWWmFTSSBlJ9bk';

// const templateParams = {
//   from_name: name,
//   from_email: email,
//   to_name: 'Riyan',
//   id:bgmiIds,
// };

// console.log(templateParams)
// emailjs
// .send(serviceId, templateId, templateParams,publicKey)
// .then((response) => {
//     console.log('SUCCESS!');
//     // setName('');
//     // setEmail('');
//     // setMessage('');
//   }).catch((error) => {
//     console.log('Error Sending Email', error);
//   });

function validateAndPay() {
  const options = {
    key: "rzp_test_Xkmmnp5DQoVyPn",
    amount: 10000, // Amount in paise (₹100 = 10000 paise)
    currency: "INR",
    name: "BGMI Tournament",
    description: "Payment",
    prefill: {},
    handler: function (response) {
      pay = response.razorpay_payment_id; // Store only the Payment ID
      document.getElementById("payment-status").innerText =
        "Payment Successful! Payment ID: " + pay;
    },
    theme: {
      color: "#3399cc",
    },
  };

  const rzp = new Razorpay(options);
  rzp.open();
}
