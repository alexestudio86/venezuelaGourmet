//EXTRACT IMAGES FROM AJAX JSON

postArticle = document.querySelector('div[post-id]');
const showImages = () => {

  // Get Default Text (Para obtener el thumbnail de la imagen, es necesario que se suba sin importar el post)
  fetch('/feeds/posts/default/' + postArticle.getAttribute('post-id') + '?alt=json')
  .then(res => res.json())
  .then(baseDeDatos => {
    // Stringify data post body
    articleUrls = JSON.stringify(baseDeDatos.entry.content);
    // Function for return array of images from regular expretion
    var getUrlsFromText = () => articleUrls.match(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/g);
    for(let [i, getUrlFromText] of getUrlsFromText().entries()){
      if(getUrlFromText.includes('/video.g?')){
        //console.log('descartado');
      }else {
        imageContainer = document.createElement('div');
        imageContainer.classList.add('swiper-slide');
          image = document.createElement('img');
          image.classList.add('w3-image');
          image.setAttribute('alt', 'image'+i);
          image.setAttribute('src', getUrlFromText.replace(/(\/d\/)|(\/s\d{3}\/)|(\/s\d{4}\/)/g, '/s500/'));
          image.style = 'width:100%; height:300px; object-fit:cover';
        postArticle.appendChild(imageContainer);
          imageContainer.appendChild(image);
      }
    }
    leftArrow = document.createElement('div');
    leftArrow.classList.add('swiper-button-next');
    rightArrow = document.createElement('div');
    rightArrow.classList.add('swiper-button-prev');
    postArticle.parentNode.appendChild(leftArrow);
    postArticle.parentNode.appendChild(rightArrow);
  });
}

showImages();
