// show the mobile-nav //
const tog = document.querySelector(".tog-btn");
const barsIcon = document.querySelector(".tog-btn i");
const mobNav = document.querySelector(".mobile-nav");

tog.onclick = toggleNav;
document.body.addEventListener("click", removeNav, true);

function toggleNav(event) {
  event.stopPropagation(); //
  mobNav.classList.toggle("show-nav");
  const activeClass = mobNav.classList.contains("show-nav");

  if (activeClass) {
    barsIcon.classList = "fa-solid fa-xmark";
  } else {
    barsIcon.classList = "fa-solid fa-bars";
  }
}

function removeNav(event) {
  if (!mobNav.contains(event.target) && !tog.contains(event.target)) {
    mobNav.classList.remove("show-nav");
    barsIcon.classList = "fa-solid fa-bars";
  }
}
// ////////////////

document
  .querySelector(".search-input")
  .addEventListener("click", function (event) {
    event.stopPropagation();
    document.querySelector(".country-select").style.display = "block";
  });

document.querySelector(".search-input").addEventListener("input", function () {
  let filter = this.value.toLowerCase();
  let options = document.querySelectorAll(".country-select option");
  options.forEach(function (option) {
    if (option.textContent.toLowerCase().indexOf(filter) > -1) {
      option.style.display = "";
    } else {
      option.style.display = "none";
    }
  });
});

document
  .querySelector(".country-select")
  .addEventListener("click", function (event) {
    event.stopPropagation();
    if (event.target.tagName === "OPTION") {
      document.querySelector(".search-input").value = event.target.textContent;
      document.querySelector(".country-select").style.display = "none";
    }
  });

document.addEventListener("click", function (event) {
  let isClickInside = document
    .querySelector(".custom-select-container")
    .contains(event.target);
  if (!isClickInside) {
    document.querySelector(".country-select").style.display = "none";
  }
});

////////////////// ///

document.querySelectorAll(".custom-select-input").forEach((input) => {
  input.addEventListener("click", function (event) {
    event.stopPropagation();
    let dropdown = this.nextElementSibling;
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  });
});

document.querySelectorAll(".custom-select-dropdown").forEach((dropdown) => {
  dropdown.addEventListener("click", function (event) {
    event.stopPropagation();
    if (event.target.tagName === "OPTION") {
      let input = this.previousElementSibling;
      input.value = event.target.textContent;
      this.style.display = "none";
    }
  });
});

document.addEventListener("click", function () {
  document.querySelectorAll(".custom-select-dropdown").forEach((dropdown) => {
    dropdown.style.display = "none";
  });
});

// //////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const selectInput = document.querySelector(".c-s-inp");
  const dropdown = document.querySelector(".c-s-drop");
  const promoCodeDiv = document.getElementById("promo-code");
  const voucherDiv = document.getElementById("discount-voucher");

  dropdown.addEventListener("click", (event) => {
    if (event.target.tagName === "OPTION") {
      selectInput.value = event.target.textContent;
      dropdown.style.display = "none";

      if (event.target.value === "promo") {
        promoCodeDiv.style.display = "flex";
        voucherDiv.style.display = "none";
      } else if (event.target.value === "voucher") {
        promoCodeDiv.style.display = "none";
        voucherDiv.style.display = "flex";
      }
    }
  });

  document.addEventListener("click", (event) => {
    if (!document.querySelector(".c-s-cont").contains(event.target)) {
      dropdown.style.display = "none";
    }
  });
});
