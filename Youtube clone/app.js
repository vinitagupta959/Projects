 
/*
const videoCardContainer = document.querySelector('.video-container');
const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
const loader = document.querySelector('.loader');
 let api_key = "AIzaSyCfN9CknROolROUhLrpWmaKSCbdH7ILwZo";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";
let searchLink = "https://www.youtube.com/results?search_query=";




fetch(
  video_http +
    new URLSearchParams({
      key: api_key,
      part: "snippet",
      chart: "mostPopular",
      maxResults: 50,
      regionCode: "IN",
    })
)
  .then((res) => res.json())
  .then((data) => {
    //console.log(data)
    data.items.forEach((item) => {
      getChannelIcon(item);
    });
  })
  .catch((err) => console.log(err));
const getChannelIcon = (video_data) => {
  fetch(
    channel_http +
      new URLSearchParams({
        key: api_key,
        part: "snippet",
        id: video_data.snippet.channelId
      }))
      .then(res => res.json())
      .then(data=>{
        video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
        makeVideoCard(video_data);
      })
}
const loader = document.querySelector('.loader');

// Show loader before fetching data
loader.style.display = 'block';

fetch(
  video_http +
    new URLSearchParams({
      key: api_key,
      part: "snippet",
      chart: "mostPopular",
      maxResults: 50,
      regionCode: "IN",
    })
)
  .then((res) => res.json())
  .then((data) => {
    // Hide loader once data is loaded
    loader.style.display = 'none';
    data.items.forEach((item) => {
      getChannelIcon(item);
    });
  })
  .catch((err) => {
    console.log('Fetch error:', err);
    loader.style.display = 'none'; // Hide loader in case of error
  });
const makeVideoCard = (data) => {
    videoCardContainer.innerHTML += `
    <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}">
     <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
  <div class="content">
    <img src="${data.channelThumbnail}" alt="" class="channel-icon">
    <div class="info">
      <h4 class="title">${data.snippet.title}</h4>
      <p class="channel-name">${data.snippet.channelTitle}</p>
    </div>
  </div>
</div>`;
}
// Add event listener for Enter key
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        if (searchInput.value.length) {
            location.href = searchLink + searchInput.value;
        }
    }
});

// search bar
const searchInput=document.querySelector('.search-bar');
const searchBtn=document.querySelector('.search-btn');
let searchLink="https://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click', () => {
    if (searchInput.value.length) { // Fixed property check
        location.href = searchLink + encodeURIComponent(searchInput.value); // Added encodeURIComponent for safety
    }
})






    /*
const videoCardContainer = document.querySelector('.video-container'); // Check if it's a class or id

let api_key = "AIzaSyCfN9CknROolROUhLrpWmaKSCbdH7ILwZo";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";

fetch(
  video_http +
    new URLSearchParams({
      key: api_key,
      part: "snippet",
      chart: "mostPopular",
      maxResults: 50, // Updated to maxResults
      regionCode: "IN",
    })
)
  .then((res) => res.json())
  .then((data) => {
    data.items.forEach((item) => {
      getChannelIcon(item);
    });
  })
  .catch((err) => console.log(err)); // Fixed console.log

const getChannelIcon = (video_data) => {
  fetch(
    channel_http +
      new URLSearchParams({
        key: api_key,
        part: "snippet",
        id: video_data.snippet.channelId
      }))
      .then(res => res.json())
      .then(data => {
        video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url; // Fixed spelling
        makeVideoCard(video_data);
      })
}

const makeVideoCard = (data) => {
    videoCardContainer.innerHTML += `
    <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'"> <!-- Fixed the URL -->
     <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
  <div class="content">
    <img src="${data.channelThumbnail}" alt="" class="channel-icon">
    <div class="info">
      <h4 class="title">${data.snippet.title}</h4>
      <p class="channel-name">${data.snippet.channelTitle}</p>
    </div>
  </div>
</div>`;
}

// Search bar
const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click', () => {
    if (searchInput.value.length) { // Fixed property check
        location.href = searchLink + encodeURIComponent(searchInput.value); // Added encodeURIComponent for safety
    }
})

// Add event listener for Enter key
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        if (searchInput.value.length) {
            location.href = searchLink + searchInput.value;
        }
    }
});
*/
const videoCardContainer = document.querySelector('.video-container');
const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
const loader = document.querySelector('.loader');

let api_key = "AIzaSyCfN9CknROolROUhLrpWmaKSCbdH7ILwZo";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";
let searchLink = "https://www.youtube.com/results?search_query=";

// Show loader before fetching data
loader.style.display = 'block';

const fetchVideos = async () => {
  try {
    const response = await fetch(
      video_http +
        new URLSearchParams({
          key: api_key,
          part: "snippet",
          chart: "mostPopular",
          maxResults: 50,
          regionCode: "IN",
        })
    );
    const data = await response.json();
    // Hide loader once data is loaded
    loader.style.display = 'none';
    data.items.forEach((item) => {
      getChannelIcon(item);
    });
  } catch (err) {
    console.log('Fetch error:', err);
    loader.style.display = 'none'; // Hide loader in case of error
  }
}

const getChannelIcon = async (video_data) => {
  try {
    const response = await fetch(
      channel_http +
        new URLSearchParams({
          key: api_key,
          part: "snippet",
          id: video_data.snippet.channelId
        })
    );
    const data = await response.json();
    video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
    makeVideoCard(video_data);
  } catch (err) {
    console.log('Channel fetch error:', err);
  }
}

const makeVideoCard = (data) => {
  videoCardContainer.innerHTML += `
    <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'">
      <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
      <div class="content">
        <img src="${data.channelThumbnail}" alt="" class="channel-icon">
        <div class="info">
          <h4 class="title">${data.snippet.title}</h4>
          <p class="channel-name">${data.snippet.channelTitle}</p>
        </div>
      </div>
    </div>`;
}

// Add event listener for Enter key
searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    if (searchInput.value.length) {
      location.href = searchLink + encodeURIComponent(searchInput.value);
    }
  }
});

searchBtn.addEventListener('click', () => {
  if (searchInput.value.length) {
    location.href = searchLink + encodeURIComponent(searchInput.value);
  }
})

// Fetch videos when the page loads
fetchVideos();
