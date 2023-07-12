function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form input values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let date = document.getElementById("date").value;
    let color = document.getElementById("color").value;

    // Regular expressions for validation
    let nameRegex = /^[A-Za-z\s]+$/;
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let phoneRegex = /^\d{10}$/;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    let ageRegex = /^\d+$/;

    // Validate name
    if (!nameRegex.test(name)) {
      document.getElementById("name").classList.add("error");
      return false;
    }

    // Validate email
    if (!emailRegex.test(email)) {
      document.getElementById("email").classList.add("error");
      return false;
    }

    // Validate phone number
    if (!phoneRegex.test(phone)) {
      document.getElementById("phone").classList.add("error");
      return false;
    }

    // Validate password
    if (!passwordRegex.test(password)) {
      document.getElementById("password").classList.add("error");
      return false;
    }

    // Validate age
    if (!ageRegex.test(age)) {
      document.getElementById("age").classList.add("error");
      return false;
    }

    // Validate gender
    if (gender === "") {
      document.getElementById("gender").classList.add("error");
      return false;
    }

    // Reset error classes
    let inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("error");
    }

    // Reset error class for select
    document.getElementById("gender").classList.remove("error");

    // Display success message
    alert("Form submitted successfully!");

    // Reset the form
    document.getElementById("myForm").reset();
  }

  // Add form submit event listener
  document.getElementById("myForm").addEventListener("submit", validateForm);