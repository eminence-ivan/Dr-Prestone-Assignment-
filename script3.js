const registrationForm = document.getElementById('registrationForm');
const outputContainer = document.getElementById('outputContainer');

if (registrationForm) {
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const enteredName = document.getElementById('fullname').value.trim();
        const enteredRegNo = document.getElementById('regno').value.trim();
        const enteredEmail = document.getElementById('email').value.trim();

        if (enteredName === "" || enteredRegNo === "") {
            outputContainer.innerHTML = "<p style='color: red;'>Error: Full name and registration number cannot be empty.</p>";
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(enteredEmail)) {
            outputContainer.innerHTML = "<p style='color: red;'>Error: Please enter a valid email address format.</p>";
            return;
        }

        outputContainer.innerHTML = `
            <p><strong>Validated Student Information:</strong></p>
            <p>Name: ${enteredName}</p>
            <p>Registration Number: ${enteredRegNo}</p>
            <p>Email: ${enteredEmail}</p>
            <p style='color: green;'>Success: Validation passed successfully!</p>
        `;
    });
}

function testValidation() {
    const sampleName = "Eminence Ivan";
    const sampleRegNo = "SCT211-0001/2024";
    const sampleEmail = "student@example.com";

    const isNameValid = sampleName !== "";
    const isRegNoValid = sampleRegNo !== "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(sampleEmail);

    console.log("Test Name Valid:", isNameValid);
    console.log("Test RegNo Valid:", isRegNoValid);
    console.log("Test Email Valid:", isEmailValid);
}

testValidation();