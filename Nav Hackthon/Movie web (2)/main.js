const apiKey = 'cc41326c90b473b058a330120f8373f8';

// Track shown movie IDs to avoid duplicates
const shownMovies = new Set();

// Helper function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to fetch movies by genre with infinite scroll and pagination
async function fetchMoviesByGenreInfinite(genreId, containerId, region = '') {
    let currentPage = 1;
    const movieContainer = document.getElementById(containerId);

    async function loadMovies() {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=${genreId}&region=${region}&page=${currentPage}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.results.length > 0) {
                const shuffledMovies = shuffleArray(data.results);

                shuffledMovies.forEach(movie => {
                    if (shownMovies.has(movie.id)) return;

                    const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : 'Unknown';
                    const movieItem = `
                        <div class="movie-box">
                            <div class="movie-img">
                                <img src="${movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'https://via.placeholder.com/200x300'}" alt="${movie.title}">
                            </div>
                            <div class="movie-info">
                                <h3>${movie.title}</h3>
                                <p>${movie.overview ? movie.overview : 'No description available.'}</p>
                                <p class="release-date">Release Year: ${releaseYear}</p>
                            </div>
                        </div>
                    `;
                    movieContainer.innerHTML += movieItem;
                    shownMovies.add(movie.id);
                });
                currentPage++;
            } else {
                movieContainer.innerHTML = "No more movies found.";
            }
        } catch (error) {
            movieContainer.innerHTML = "Error fetching movies.";
        }
    }

    await loadMovies();

    movieContainer.addEventListener('scroll', async () => {
        if (movieContainer.scrollLeft + movieContainer.clientWidth >= movieContainer.scrollWidth - 10) {
            await loadMovies();
        }
    });
}

// Function to fetch exclusive Indian movies (Hindi) with infinite scroll
async function fetchExclusiveIndianMoviesInfinite(containerId) {
    let currentPage = 1;
    const movieContainer = document.getElementById(containerId);

    async function loadMovies() {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=hi-IN&region=IN&sort_by=popularity.desc&page=${currentPage}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.results.length > 0) {
                const shuffledMovies = shuffleArray(data.results);

                shuffledMovies.forEach(movie => {
                    if (shownMovies.has(movie.id)) return;

                    const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : 'Unknown';
                    const movieItem = `
                        <div class="movie-box">
                            <div class="movie-img">
                                <img src="${movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'https://via.placeholder.com/200x300'}" alt="${movie.title}">
                            </div>
                            <div class="movie-info">
                                <h3>${movie.title}</h3>
                                <p>${movie.overview ? movie.overview : 'No description available.'}</p>
                                <p class="release-date">Release Year: ${releaseYear}</p>
                            </div>
                        </div>
                    `;
                    movieContainer.innerHTML += movieItem;
                    shownMovies.add(movie.id);
                });
                currentPage++;
            } else {
                movieContainer.innerHTML = "No more movies found.";
            }
        } catch (error) {
            movieContainer.innerHTML = "Error fetching movies.";
        }
    }

    await loadMovies();

    movieContainer.addEventListener('scroll', async () => {
        if (movieContainer.scrollLeft + movieContainer.clientWidth >= movieContainer.scrollWidth - 10) {
            await loadMovies();
        }
    });
}

// Initialize movie sections with infinite scroll
fetchExclusiveIndianMoviesInfinite('exclusiveIndianMovies');
fetchMoviesByGenreInfinite(35, 'comedyMovies'); // Comedy genre id
fetchMoviesByGenreInfinite(28, 'actionMovies'); // Action genre id
fetchMoviesByGenreInfinite(27, 'horrorMovies'); // Horror genre id
fetchMoviesByGenreInfinite(18, 'inspirationalMovies'); // Inspirational genre id
fetchMoviesByGenreInfinite(10751, 'familyMovies'); // Family genre id

// Initialize Swiper for home section
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

async function fetchUpcomingMovies(containerClass) {
  const container = document.querySelector(containerClass);
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;

  try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.results.length > 0) {
          const upcomingMovies = data.results.map(movie => {
              const releaseDate = new Date(movie.release_date);
              const formattedDate = `${releaseDate.getDate()}/${releaseDate.getMonth() + 1}/${releaseDate.getFullYear()}`;
              
              return `
                  <div class="swiper-slide movie-box">
                      <div class="movie-img">
                          <img src="${movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'https://via.placeholder.com/200x300'}" alt="${movie.title}">
                      </div>
                      <div class="movie-info">
                          <h3>${movie.title}</h3>
                          <p>Release Date: ${formattedDate}</p>
                      </div>
                  </div>
              `;
          }).join('');

          container.innerHTML = upcomingMovies;
          
          // Initialize Swiper for the Coming Soon section
          new Swiper(container.closest('.swiper'), {
              slidesPerView: 'auto',
              spaceBetween: 20,
              freeMode: true,
              loop: true,
              autoplay: {
                  delay: 5000,
              },
          });
      } else {
          container.innerHTML = "No upcoming movies found.";
      }
  } catch (error) {
      container.innerHTML = "Error fetching upcoming movies.";
  }
}

// Initialize upcoming movies
fetchUpcomingMovies('.coming-container .swiper-wrapper');

document.addEventListener('DOMContentLoaded', () => {
    // Function to check if the movie item has a description and show/hide accordingly
    function updateMovieVisibility(containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            const movieBoxes = container.querySelectorAll('.movie-box');
            movieBoxes.forEach(box => {
                const description = box.querySelector('.movie-info p');
                if (!description || !description.textContent.trim()) {
                    // Hide movie box if description is missing or empty
                    box.style.display = 'none';
                } else {
                    // Show movie box if description is present
                    box.style.display = 'block';
                }
            });
        }
    }

    // Update visibility for each movie category
    updateMovieVisibility('exclusiveIndianMovies');
    updateMovieVisibility('comedyMovies');
    updateMovieVisibility('actionMovies');
    updateMovieVisibility('horrorMovies');
    updateMovieVisibility('inspirationalMovies');
    updateMovieVisibility('familyMovies');
});
