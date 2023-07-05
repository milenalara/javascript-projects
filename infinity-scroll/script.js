// unsplash API
const count = 10;
const apiKey = 'YTHsoKUkvymX3bBIKb7WJePJr6biNPXb4msLdEl5R2w';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// get photos from unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
  } catch (error) {
    // catch error here
  }
}

getPhotos();