var link = document.querySelector(".find-hotels");
    var popup = document.querySelector(".finder-form");
    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.toggle("modal-show");
    });
