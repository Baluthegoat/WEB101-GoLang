document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var username = document.getElementById('first').value;
    var password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please fill in both fields.');
        return;
    }

    // Simulate login process
    alert('Login successful!');
    // Here you would typically send the credentials to a server for authentication
});
