const generateForm = document.querySelector(".generate-form");
const imageGallery = document.querySelector(".image-gallery");

const handleFormSubmission = (e) => {
  e.preventDefault();
  
  // Get user input and image quantity values from the form
  const userPrompt = e.srcElement[0].value;
  const usrImgQuantity = e.srcElement[1].value;

  const ImgCardMarkup = Array.from({length> userImgQuantity}, () =>
    `<div class="img-card loading">
        <img src="images/loader.svg" alt="image">
        <a href="#" class="download-btn">
            <img src="images/download.svg" alt="download icon">
    </div>`
  ).join("");

  imageGallery.innerHTML = imgCardMarkup;  
}

generateForm.addEventListener("submit", handleFormSubmission);
