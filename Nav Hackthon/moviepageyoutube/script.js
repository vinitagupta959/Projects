function toggleDropdown() {
    const dropdown = document.getElementById('profileDropdown');
    const signInOption = document.getElementById('signInOption');
    const logOutOption = document.getElementById('logOutOption');

    // Check if the dropdown is currently displayed
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        // Show the dropdown
        dropdown.style.display = 'block';

        // Simulate user authentication state
        const isAuthenticated = false; // Change to `true` to show 'Log Out'

        if (isAuthenticated) {
            signInOption.style.display = 'none';
            logOutOption.style.display = 'block';
        } else {
            signInOption.style.display = 'block';
            logOutOption.style.display = 'none';
        }
    } else {
        // Hide the dropdown
        dropdown.style.display = 'none';
    }
}

// Optional: Hide the dropdown if clicked outside
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('profileDropdown');
    if (!event.target.closest('.profile-icon') && dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    }
});
