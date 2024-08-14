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
// main.js
document.addEventListener('DOMContentLoaded', function () {
  // Modal for Тури
  var myModal = document.getElementById('myModal');
  var openModalBtn = document.getElementById('openModal');
  var closeModalBtn = myModal.querySelector('.close');

  openModalBtn.onclick = function (event) {
    event.preventDefault(); // Prevent default link behavior
    myModal.style.display = 'block';
  };

  closeModalBtn.onclick = function () {
    myModal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target == myModal) {
      myModal.style.display = 'none';
    }
  };

  // Modal for Послуги
  var modalForServices = document.getElementById('modalForServices');
  var openServicesModalBtn = document.getElementById('openServicesModal');
  var closeServicesModalBtn = modalForServices.querySelector('.close');

  openServicesModalBtn.onclick = function (event) {
    event.preventDefault(); // Prevent default link behavior
    modalForServices.style.display = 'block';
  };

  closeServicesModalBtn.onclick = function () {
    modalForServices.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target == modalForServices) {
      modalForServices.style.display = 'none';
    }
  };
});

// main.js
document.addEventListener('DOMContentLoaded', function () {
  // Modal for Навігація
  var navigationModal = document.getElementById('navigationModal');
  var openNavigationModalBtn = document.getElementById('openNavigationModal');
  var closeNavigationModalBtn = navigationModal.querySelector('.close');

  openNavigationModalBtn.onclick = function (event) {
    event.preventDefault(); // Prevent default link behavior
    navigationModal.style.display = 'block';
  };

  closeNavigationModalBtn.onclick = function () {
    navigationModal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target == navigationModal) {
      navigationModal.style.display = 'none';
    }
  };

  // Modal for Підтримка
  var supportModal = document.getElementById('supportModal');
  var openSupportModalBtn = document.getElementById('openSupportModal');
  var closeSupportModalBtn = supportModal.querySelector('.close');

  openSupportModalBtn.onclick = function (event) {
    event.preventDefault(); // Prevent default link behavior
    supportModal.style.display = 'block';
  };

  closeSupportModalBtn.onclick = function () {
    supportModal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target == supportModal) {
      supportModal.style.display = 'none';
    }
  };

  // Modal for Контакти
  var contactsModal = document.getElementById('contactsModal');
  var openContactsModalBtn = document.getElementById('openContactsModal');
  var closeContactsModalBtn = contactsModal.querySelector('.close');

  openContactsModalBtn.onclick = function (event) {
    event.preventDefault(); // Prevent default link behavior
    contactsModal.style.display = 'block';
  };

  closeContactsModalBtn.onclick = function () {
    contactsModal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target == contactsModal) {
      contactsModal.style.display = 'none';
    }
  };
});
