// Search Bar Toggle Functionality
const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');

searchIcon.addEventListener('click', () => {
    searchBar.style.display = searchBar.style.display === 'block' ? 'none' : 'block';
});

// Profile Dropdown Toggle Functionality
const profileIcon = document.getElementById('profile-icon');
const profileDropdown = document.getElementById('profile-dropdown');

profileIcon.addEventListener('click', () => {
    profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
});

// Example for showing user's initials after Sign In
document.getElementById('sign-in-btn').addEventListener('click', () => {
    const userFirstName = 'John';  // Example: Fetch from user data
    const userLastName = 'Doe';    // Example: Fetch from user data
    profileIcon.innerHTML = `${userFirstName[0]}${userLastName[userLastName.length - 1]}`;  // Replace icon with initials
    profileDropdown.style.display = 'none';  // Hide dropdown after sign in
});
