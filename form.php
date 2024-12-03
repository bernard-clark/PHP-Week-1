<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Page Title -->
    <title>Application Form with JavaScript</title>
    <!-- Cascade Style Sheets File Connection -->
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <!-- JavaScript File Connection -->
    <script src="code.js"></script>
    <header>Silver Emerald Tech & Co.</header>
    <h1>Application Form</h1>
    <!-- Link to the Home Page -->
    <a href="home.php">Home Page</a>
    <h3>After submitting your info into the application, there will be a one week wait process until we are able to full look through each application to full assess the capabilities of each individual applicant. If you are chosen for the role we will respond to you with an email for an inperson interview, with times we have available for scheduling such, where we will tell you why we chose you for the position. If you are not chosen for the role we will also respond to you with an email saying why you were not chosen for the role.</h3>
    <!-- Form starts here -->
    <form id="applicationForm">
        <!-- Full Name field with error message -->
        <label for="name">Full Name:</label>
        <input type="text" id="name" name="name" required>
        <span class="error" id="nameError"></span> <!-- Placeholder for name error -->

        <!-- Email Address field with error message -->
        <label for="email">Email Address:</label>
        <input type="email" id="email" name="email" required>
        <span class="error" id="emailError"></span> <!-- Placeholder for email error -->

        <!-- Bio field with error message -->
        <label for="bio">Tell us about yourself:</label>
        <textarea id="bio" name="bio" rows="5" required></textarea>
        <span class="error" id="bioError"></span> <!-- Placeholder for bio error -->

        <!-- Submit button -->
        <button type="submit">Submit Application</button>
    </form>
    <!-- Success message placeholder -->
    <div id="confirmationMessage" class="success"></div>
    <!-- PHP Extension -->
    <?php include 'server.php'; ?>
</body>
</html>