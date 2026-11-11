const registrationForm = document.getElementById('registrationForm');
const outputContainer = document.getElementById('outputContainer');

if (registrationForm) {
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const studentName = document.getElementById('fullname').value;
        const registrationNumber = document.getElementById('regno').value;

        outputContainer.innerHTML = `
            <p>Name: ${studentName}</p>
            <p>Registration Number: ${registrationNumber}</p>
            <p style="color: green;">Form successfully submitted!</p>
        `;
    });
}