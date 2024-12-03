// Get references to the form and its elements
const form = document.getElementById('applicationForm'); // The form element
const nameInput = document.getElementById('name'); // Name input field
const emailInput = document.getElementById('email'); // Email input field
const bioInput = document.getElementById('bio'); // Bio textarea

// Error message placeholders
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const bioError = document.getElementById('bioError');
const confirmationMessage = document.getElementById('confirmationMessage');
            
// Add an event listener to the form's submit event
form.addEventListener('submit', function (event) {
let valid = true; // Assume the form is valid

// Clear any previous error messages
nameError.textContent = '';
emailError.textContent = '';
bioError.textContent = '';
confirmationMessage.textContent = '';

    // Validate the Name field
    if (nameInput.value.trim() === '') {
        // If the name field is empty, show an error message
            nameError.textContent = 'Name is required.';
            valid = false; // Mark the form as invalid
    }

    // Validate the Email field
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
    if (emailInput.value.trim() === '') {
        // If the email field is empty, show an error message
        emailError.textContent = 'Email is required.';
        valid = false; // Mark the form as invalid
    } else if (!emailPattern.test(emailInput.value.trim())) {
            // If the email format is invalid, show an error message
            emailError.textContent = 'Please enter a valid email address.';
            valid = false; // Mark the form as invalid
        }

    // Validate the Bio field
    if (bioInput.value.trim() === '') {
        // If the bio field is empty, show an error message
        bioError.textContent = 'Bio is required.';
        valid = false; // Mark the form as invalid
    }

    // If the form is invalid, prevent submission
    if (!valid) {
        event.preventDefault(); // Prevent the default form submission behavior
    } else {
        // If the form is valid, display a confirmation message
        event.preventDefault(); // Prevent the actual form submission
        confirmationMessage.textContent = `Thank you for applying, ${nameInput.value.trim()}! We have received your application.`;
        form.reset(); // Reset the form fields
        }
});