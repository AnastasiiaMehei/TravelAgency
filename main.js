document.addEventListener('DOMContentLoaded', function () {
  var images = [
    './images/banner1.jpeg',
    './images/banner4.png',
    './images/banner5.jpg',
  ];
  var currentIndex = 0;
  var heroImage = document.getElementById('heroImage');
  var nextIndex = (currentIndex + 1) % images.length;

  document.getElementById('btn-img').addEventListener('click', function () {
    var nextImage = document.createElement('img');
    nextImage.src = images[nextIndex];
    nextImage.style.opacity = '0';
    nextImage.style.position = 'absolute';
    nextImage.style.width = '100%';
    // nextImage.style.height = 'auto';
    nextImage.style.transition = 'opacity 1s ease-in-out';
    document.querySelector('.section-hero').appendChild(nextImage);

    setTimeout(function () {
      heroImage.style.opacity = '0';
      heroImage.src = images[nextIndex];
      heroImage.style.opacity = '1';
      nextImage.remove();
      currentIndex = nextIndex;
      nextIndex = (currentIndex + 1) % images.length;
    }, 1000);
  });
});
// Modal
document.addEventListener('DOMContentLoaded', function () {
  var modal = document.getElementById('myModal');
  var btn = document.getElementById('openModal');
  var span = document.querySelector('.close');

  btn.onclick = function (event) {
    event.preventDefault(); // Prevent default link behavior
    modal.style.display = 'block';
  };

  span.onclick = function () {
    modal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
});
// Модалка для замовлення
document.addEventListener('DOMContentLoaded', function () {
  var modal = document.getElementById('modalForServices');
  var btn = document.getElementById('openServicesModal');
  var span = document.querySelector('.close');

  btn.onclick = function (event) {
    event.preventDefault(); // Prevent default link behavior
    modal.style.display = 'block';
  };

  span.onclick = function () {
    modal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
});
