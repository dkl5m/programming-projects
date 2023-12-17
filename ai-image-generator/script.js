const generateForm = document.querySelector(".generate-form");

const handleFormSubmission = (e) => {
  e.preventDefault();
  
  // Get user input and image quantity values from the form
  const userPrompt = e.srcElement[0].value;
  const usrImgQuantity = e.srcElement[1].value;

  const ImgCardMarkup 
}

generateForm.addEventListener("submit", handleFormSubmission);
