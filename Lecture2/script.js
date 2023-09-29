// Sample image data (you can replace this with your own images)
const images = [
  "https://cdn.pixabay.com/photo/2019/12/02/08/04/city-4667143_640.jpg",
  "https://cdn.pixabay.com/photo/2018/02/10/19/19/goal-3144351_640.jpg",
  "https://cdn.pixabay.com/photo/2019/10/02/09/34/cinque-terre-4520509_640.jpg",
  "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_640.jpghttps://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_640.jpg",
  "https://cdn.pixabay.com/photo/2014/07/21/19/20/lobby-398845_640.jpg",
  "https://cdn.pixabay.com/photo/2016/11/13/12/52/kuala-lumpur-1820944_640.jpg",
  "https://cdn.pixabay.com/photo/2016/11/29/08/55/architecture-1868547_640.jpg",
  "https://cdn.pixabay.com/photo/2017/03/26/16/06/exzenterhaus-2175925_640.jpg",
  "https://cdn.pixabay.com/photo/2014/03/03/16/12/village-279013_640.jpg",
  "https://cdn.pixabay.com/photo/2013/09/14/19/53/city-182223_640.jpg",
  "https://cdn.pixabay.com/photo/2016/09/15/01/57/temple-1670926_640.jpg",
  "https://cdn.pixabay.com/photo/2016/08/13/12/04/building-1590596_640.jpg",
  "https://cdn.pixabay.com/photo/2017/07/19/01/41/clouds-2517653_1280.jpg",
  "https://cdn.pixabay.com/photo/2013/04/09/08/08/building-102110_640.jpg",
  "https://cdn.pixabay.com/photo/2014/06/06/09/36/sydney-opera-house-363244_640.jpg",
  "https://cdn.pixabay.com/photo/2017/08/08/11/50/lighthouse-2611199_640.jpg",
  "https://cdn.pixabay.com/photo/2014/11/13/23/34/palace-530055_640.jpg",
  "https://cdn.pixabay.com/photo/2018/11/24/01/35/christmas-motif-3834860_640.jpg",
  "https://cdn.pixabay.com/photo/2021/05/08/11/24/city-6238228_640.jpg",
  "https://cdn.pixabay.com/photo/2013/11/25/09/47/buildings-217878_640.jpg",
  "https://cdn.pixabay.com/photo/2013/04/18/14/39/ship-105596_640.jpg",
  "https://cdn.pixabay.com/photo/2016/08/29/21/01/walt-disney-center-1629173_640.jpg",
  "https://cdn.pixabay.com/photo/2020/06/15/17/10/ancient-5302626_640.jpg",
  "https://cdn.pixabay.com/photo/2016/01/02/16/59/lighthouse-1118474_640.jpg",
  "https://cdn.pixabay.com/photo/2019/11/05/20/36/travel-4604499_640.jpg",
  "https://cdn.pixabay.com/photo/2020/10/28/11/08/castle-5693094_640.jpg",
  "https://cdn.pixabay.com/photo/2019/10/23/06/30/hamburg-4570577_640.jpg",
  "https://cdn.pixabay.com/photo/2022/04/12/18/00/europe-7128531_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/04/19/08/06/old-town-5062333_640.jpg",
  "https://cdn.pixabay.com/photo/2020/02/06/18/43/santorini-4825173_1280.jpg"
];

let filteredImages = [];

// Function to display images in the gallery
function displayImages() {
  const gallery = document.getElementById("image-gallery");
  gallery.innerHTML = ""; // Clear existing images

  if (filteredImages.length > 0) {
    filteredImages.forEach((image) => {
      const imgElement = document.createElement("img");
      imgElement.src = image;
      gallery.appendChild(imgElement);
    });
  } else {
    images.forEach((image) => {
      const imgElement = document.createElement("img");
      imgElement.src = image;
      gallery.appendChild(imgElement);
    });
  }
}

// Function to filter images based on search input
function filterImages() {
  const searchInput = document.getElementById("search").value.toLowerCase();
  const filtered = images.filter((image) =>
    image.toLowerCase().includes(searchInput)
  );
  filteredImages = filtered;
  displayImages();
}

// Add event listener for the search input
document.getElementById("search").addEventListener("input", filterImages);

// Display all images initially
displayImages();
