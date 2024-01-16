const accessKey = "";

const searchForm = document.getElementbyId("search-form");
const searchBox = document.getElementbyId("search-box");
const searchResult = document.getElementbyId("search-result");
const showMoreBtn = document.getElementbyId("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages(){
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  if(page === 1){
    searchResult.innerHTML ="";
  }
  
  const results = data.results;

  results.map((results) =>{
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChilde(image);
    searchResult.appendChilde(imageLink);
  })
  showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) =>{
  e.preventDefault();
  page = 1;
  searchImages();
})

showMoreBtn.addEventListener("click", ()=>{
  page++;
})
