document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');

    // Demo credentials (in a real application, these would be stored securely on a server)
    const validCredentials = {
        username: 'admin',
        password: 'password123'
    };

    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });

    // Handle form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const remember = document.getElementById('remember').checked;

        // Validate credentials
        if (username === validCredentials.username && password === validCredentials.password) {
            // Save to localStorage if remember is checked
            if (remember) {
                localStorage.setItem('username', username);
            } else {
                localStorage.removeItem('username');
            }

            // Redirect to success page
            window.location.href = 'login-success.html';
        } else {
            // Show error message
            errorMessage.textContent = 'Invalid username or password';
            loginForm.reset();
        }
    });

    // Check for remembered username
    const rememberedUsername = localStorage.getItem('username');
    if (rememberedUsername) {
        document.getElementById('username').value = rememberedUsername;
        document.getElementById('remember').checked = true;
    }
});