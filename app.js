/* <div class="carousel-inner">
<div class="carousel-item">
  <img src="https://specials-images.forbesimg.com/imageserve/1181819601/960x0.jpg?fit=scale" class="d-block w-100" alt="...">
  <div class="carousel-caption d-none d-md-block">
    <h5> INTENSITY🔈 </h5>
  </div> */

  const divElement = document.createElement('div');
  divElement.classList.add('carousel-item');

  const imgNew = document.createElement('img');
  imgNew.classList.add('d-block w-100');
  imgNew.setAttribute('src','https://specials-images.forbesimg.com/imageserve/1209906745/960x0.jpg?cropX1=0&cropX2=2915&cropY1=31&cropY2=1670');
  

  divElement.appendChild(imgNew);

