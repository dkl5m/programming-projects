const searchForm = document.getElementbyId("search-form");
const searchBox = document.getElementbyId("search-box");
const searchResult = document.getElementbyId("search-result");
const showMoreBtn = document.getElementbyId("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages(){
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;
}
