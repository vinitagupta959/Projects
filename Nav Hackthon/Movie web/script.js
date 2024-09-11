// let header = document.querySelector('header');

// window.addEventListener('scroll', () =>{
//     header.classList.toggle('shadow', window.scrollY > 0);
// });

// let menu = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () =>{
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }
// window.onscroll = () =>{
//     menu.classList.remove('bx-x');
//     navbar.classList.remove('active');
// }


// var swiper = new Swiper(".home", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//       delay: 4000,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });
// var swiper = new Swiper(".coming-container", {
//     spaceBetween: 20,
//     loop: true,
//     centeredSlides: true,
//     autoplay: {
//       delay: 2000,
//       disableOnInteraction: false,
//     },
//     breakpoints: {
//         0: {
//             slidesPerView: 2,
//         },
//         568: {
//             slidesPerView: 3,
//         },
//         768: {
//             slidesPerView: 4,
//         },
//         968: {
//             slidesPerView: 5,
//         },

//     }
//   });

//   document.addEventListener('click', (event) => {
//     const profileDropdown = document.querySelector('.profile-dropdown');
//     const moreDropdown = document.querySelector('.more-dropdown');
//     const menuIcon = document.getElementById('menu-icon');
    
//     // Toggle Profile Dropdown
//     if (event.target.closest('.profile-icon')) {
//         profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
//         moreDropdown.style.display = 'none'; // Hide the more dropdown if it's open
//     } else {
//         profileDropdown.style.display = 'none';
//     }
    
//     // Toggle More Dropdown
//     if (event.target.closest('.more-btn')) {
//         moreDropdown.style.display = moreDropdown.style.display === 'block' ? 'none' : 'block';
//         profileDropdown.style.display = 'none'; // Hide the profile dropdown if it's open
//     } else {
//         moreDropdown.style.display = 'none';
//     }
    
//     // Toggle Sidebar Menu
//     if (event.target.closest('#menu-icon')) {
//         const sidebar = document.querySelector('.side-bar');
//         sidebar.classList.toggle('active');
//     }
// });
// // Toggle dropdown on click
// document.querySelectorAll('.dropbtn').forEach(button => {
//   button.addEventListener('click', function () {
//     let dropdownContent = this.nextElementSibling;
//     dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
//   });
// });

// // Hide dropdown when clicking outside
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     document.querySelectorAll('.dropdown-content').forEach(content => {
//       content.style.display = 'none';
//     });
//   }
// };
// document.addEventListener('DOMContentLoaded', () => {
//   const playButton = document.querySelector('.play');
//   const videoBackground = document.querySelector('.video-background');
//   const videoPlayer = document.getElementById('video-player');
//   const homeText = document.querySelector('.home-text');

//   playButton.addEventListener('click', (e) => {
//       e.preventDefault(); // Prevent default link behavior
//       videoBackground.classList.add('show');
//       videoPlayer.play();
//       homeText.classList.add('expanded');
//       // Optionally, you can hide the play button after clicking
//       playButton.style.display = 'none';
//   });

//   // Stop the video and hide the background when clicking outside the video or close button
//   document.addEventListener('click', (event) => {
//       if (!event.target.closest('.play') && !event.target.closest('.video-background video')) {
//           videoBackground.classList.remove('show');
//           videoPlayer.pause();
//           videoPlayer.currentTime = 0; // Optionally reset video to start
//           homeText.classList.remove('expanded');
//           playButton.style.display = 'block'; // Optionally show the play button again
//       }
//   });

//   document.addEventListener('selectionchange', function() {
//     const selection = window.getSelection();
//     if (selection.rangeCount > 0) {
//         const range = selection.getRangeAt(0);
//         // Do something with the range...
//     } else {
//         console.log('No valid selection found.');
//     }
// });


// });





//new code
// Header scroll shadow effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

// Menu icon toggle
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Hide menu and navbar on scroll
window.addEventListener('scroll', () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
});

// Swiper initialization for home section
new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});

// Swiper initialization for coming-container section
new Swiper(".coming-container", {
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    breakpoints: {
        0: {
            slidesPerView: 2
        },
        568: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 4
        },
        968: {
            slidesPerView: 5
        }
    }
});

// Dropdown and sidebar menu handling
document.addEventListener('click', (event) => {
    const profileDropdown = document.querySelector('.profile-dropdown');
    const moreDropdown = document.querySelector('.more-dropdown');
    const sidebar = document.querySelector('.side-bar');

    // Toggle Profile Dropdown
    if (event.target.closest('.profile-icon')) {
        profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
        moreDropdown.style.display = 'none'; // Hide the more dropdown if it's open
    } else if (!event.target.closest('.profile-dropdown')) {
        profileDropdown.style.display = 'none';
    }

    // Toggle More Dropdown
    if (event.target.closest('.more-btn')) {
        moreDropdown.style.display = moreDropdown.style.display === 'block' ? 'none' : 'block';
        profileDropdown.style.display = 'none'; // Hide the profile dropdown if it's open
    } else if (!event.target.closest('.more-dropdown')) {
        moreDropdown.style.display = 'none';
    }

    // Toggle Sidebar Menu
    if (event.target.closest('#menu-icon')) {
        sidebar.classList.toggle('active');
    }
});

// Dropdown button handling
document.querySelectorAll('.dropbtn').forEach(button => {
    button.addEventListener('click', function () {
        let dropdownContent = this.nextElementSibling;
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
});

// Hide all dropdowns when clicking outside
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropbtn')) {
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.style.display = 'none';
        });
    }
});

// Video background handling
const playButton = document.querySelector('.play');
const videoBackground = document.querySelector('.video-background');
const videoPlayer = document.getElementById('video-player');
const homeText = document.querySelector('.home-text');

playButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    videoBackground.classList.add('show');
    videoPlayer.play();
    homeText.classList.add('expanded');
    playButton.style.display = 'none';
});

// Hide video background when clicking outside
document.addEventListener('click', (event) => {
    if (!event.target.closest('.play') && !event.target.closest('.video-background video')) {
        videoBackground.classList.remove('show');
        videoPlayer.pause();
        videoPlayer.currentTime = 0; // Optionally reset video to start
        homeText.classList.remove('expanded');
        playButton.style.display = 'block';
    }
});

// Selection change event
function isSelection() {
    const selection = window.getSelection();

    if (selection.rangeCount > 0) {
        try {
            const range = selection.getRangeAt(0);
            // Your logic here
            console.log('Range in isSelection:', range.toString());
        } catch (error) {
            console.error('Error accessing range in isSelection:', error);
        }
    } else {
        console.log('No selection available in isSelection.');
    }
}

document.addEventListener('selectionchange', () => {
    isSelection();
});

