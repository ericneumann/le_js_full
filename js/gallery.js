function activateGallery() {
  // Class tags
  let currentClass    = "current";
  let titleClass      = "title";
  let descClass       = "description";

  let thumbnails      = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage       = document.querySelector("#gallery-photo > img");
  let mainImageTitle  = document.querySelector(`#gallery-info > .${titleClass}`);
  let mainImageDesc   = document.querySelector(`#gallery-info > .${descClass}`);
  let galleryInfo     = document.querySelector(`#gallery-info`);

  thumbnails.forEach(thumbnail => {

    // Preload large images
    let largeImageSrc = thumbnail.dataset.largeVersion;
    let largeVersion  = new Image();
    largeVersion.src  = largeImageSrc;
    
    thumbnail.addEventListener("click", function() {
      // Set clicked image as the main image.
      mainImage.setAttribute("src", largeImageSrc);
      mainImage.setAttribute("alt", thumbnail.alt);

      // Change which thumbnail image is current.
      document.querySelector(`#gallery-thumbs > .${currentClass}`).classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);
      
      // Update gallery aside content
      mainImageTitle.textContent = thumbnail.dataset.title;
      mainImageDesc.textContent = thumbnail.dataset.description;

    });

  });
};