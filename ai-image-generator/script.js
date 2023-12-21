const generateForm = document.querySelector(".generate-form");
const imageGallery = document.querySelector(".image-gallery");

const OPENAI_API_KEY = "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";

const updateImageCard = (imgDataArray) => {
  imgDataArray.forEach((ImgObject, index) => {
     const imgCard = imageGallery.querySelectorAll(".img-card")[index]; 
  });
}

const generateAiImages(userPrompt, userImgQuantity) => {
  try {
    // send a request to the OpenAI API to generate images based on user inputs
    const response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        prompt: userPrompt,
        n: userQuantity,
        size: "512x512",
        response_format: "b64_json"
      })
    });
    
    if(!response.ok) throw new Error("Failed to generate images! Please try again.");
    
    const { data } = await response.json(); // Get data from the response
    updateImageCard([...data]);
  } catch (error) {
    alert(error.message);
  }
}

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
  generateAiImages(userPrompt, userImgQuantity);
}

generateForm.addEventListener("submit", handleFormSubmission);
