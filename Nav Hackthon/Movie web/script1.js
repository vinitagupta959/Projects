signInBtn.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');

    // पासवर्ड वैलिडेशन (कम से कम एक अक्षर, एक नंबर, और एक स्पेशल कैरेक्टर होना चाहिए)
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (passwordPattern.test(password)) {
        // अगर पासवर्ड वैलिड है, तो username और password localStorage में स्टोर करें
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        // प्रोफाइल सेक्शन दिखाएँ और साइन इन फॉर्म छुपाएँ
        authSection.style.display = 'none';
        profileSection.style.display = 'block';
        profileUsername.textContent = username;

        // एरर मैसेज हटाएँ
        passwordError.textContent = '';
    } else {
        // अगर पासवर्ड वैलिड नहीं है, तो एरर मैसेज दिखाएँ
        passwordError.textContent = "Password must contain at least one letter, one number, and one special character.";
    }
});
// Profile Icon Click Event Listener
const profileIcon = document.getElementById('profileIcon');
const profileDropdown = document.getElementById('profileDropdown');
const profileButton = document.getElementById('profileButton');
const logoutButton = document.getElementById('logoutButton');

let isDropdownVisible = false;

profileIcon.addEventListener('click', () => {
    isDropdownVisible = !isDropdownVisible;
    profileDropdown.style.display = isDropdownVisible ? 'block' : 'none';
    profileButton.style.display = isDropdownVisible ? 'block' : 'none';
    logoutButton.style.display = isDropdownVisible ? 'block' : 'none';
});

// Log Out Button Click Event Listener
logoutButton.addEventListener('click', () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');

    profileSection.style.display = 'none';
    authSection.style.display = 'block';
});