document.addEventListener('DOMContentLoaded', () => {
    const profileIcon = document.getElementById('profileIcon');
    const profileDropdown = document.getElementById('profileDropdown');
    const authSection = document.getElementById('authSection');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    const signInBtn = document.getElementById('signInBtn');
    const logInBtn = document.getElementById('logInBtn');
    const logoutButton = document.getElementById('logoutButton');
    const deleteAccountButton = document.getElementById('deleteAccountButton');
    const profileButton = document.getElementById('profileButton');
    const loginButton = document.getElementById('loginButton');
    const signInButton = document.getElementById('signInButton');
    
    // Show or hide dropdown based on user authentication status
    function updateProfileDropdown() {
        const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
        profileDropdown.style.display = isAuthenticated ? 'block' : 'none';
        profileButton.style.display = isAuthenticated ? 'block' : 'none';
        logoutButton.style.display = isAuthenticated ? 'block' : 'none';
        deleteAccountButton.style.display = isAuthenticated ? 'block' : 'none';
        loginButton.style.display = isAuthenticated ? 'none' : 'block';
        signInButton.style.display = isAuthenticated ? 'none' : 'block';
    }

    // Event Listener for Profile Icon Click
    profileIcon.addEventListener('click', () => {
        profileDropdown.style.display = profileDropdown.style.display === 'none' ? 'block' : 'none';
    });

    // Sign In Button
    signInBtn.addEventListener('click', () => {
        const username = usernameInput.value;
        const password = passwordInput.value;
        if (username && password) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            localStorage.setItem('isAuthenticated', 'true');
            authSection.style.display = 'none';
            updateProfileDropdown();
        } else {
            passwordError.textContent = 'Please enter both username and password';
        }
    });

    // Log In Button
    logInBtn.addEventListener('click', () => {
        const username = usernameInput.value;
        const password = passwordInput.value;
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');
        if (username === storedUsername && password === storedPassword) {
            localStorage.setItem('isAuthenticated', 'true');
            authSection.style.display = 'none';
            updateProfileDropdown();
        } else {
            passwordError.textContent = 'Invalid username or password';
        }
    });

    // Log Out Button
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.setItem('isAuthenticated', 'false');
        updateProfileDropdown();
    });

    // Delete Account Button
    deleteAccountButton.addEventListener('click', () => {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.setItem('isAuthenticated', 'false');
        updateProfileDropdown();
    });

    // Initial Profile Dropdown State
    updateProfileDropdown();
});
