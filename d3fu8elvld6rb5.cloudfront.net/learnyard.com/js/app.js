// Animate on scroll

new WOW().init({
  offset: 100,
});

const navDropdowns = document.querySelectorAll(".dropdown-link");
Array.from(navDropdowns).forEach((dropdown) => {
  dropdown.addEventListener("click", () => {
    const parentDropdown = dropdown.parentNode.closest(".dropdown");
    const isActive = parentDropdown.classList.contains("active");

    // remove 'active' class from all dropdowns
    document.querySelectorAll(".dropdown").forEach((elem) => {
      elem.classList.remove("active");
    });

    // add 'active' class to the clicked dropdown if it wasn't active before
    if (!isActive) {
      parentDropdown.classList.add("active");
    }
  });
});

window.addEventListener("load", () => {
  if (window.innerWidth > 990) {
    const verticalSliderSection = document.querySelector(
      "#vertical-slider-section"
    ).offsetHeight;

    const addHeight = () => {
      document.querySelector("#vertical-slider-section").style.height =
        verticalSliderSection + "px";
    };

    setTimeout(() => {
      addHeight();
    }, 1000);
  }
});

window.addEventListener("load", () => {
  const dataTabContainer = document.querySelectorAll("[data-tab-container]");

  dataTabContainer.forEach((container) => {
    const theTabs = container.querySelectorAll(".nav-tabs button");

    function theTabClicks(tabClickEvent) {
      const clickedTab = tabClickEvent.currentTarget;

      for (let i = 0; i < theTabs.length; i++) {
        theTabs[i].classList.remove("active");
      }

      clickedTab.classList.add("active");
      tabClickEvent.preventDefault();

      const contentPanes = container.querySelectorAll(".tab-pane");

      for (let i = 0; i < contentPanes.length; i++) {
        contentPanes[i].classList.remove("active");
      }

      const anchorReference = tabClickEvent.target;

      const activePaneId = anchorReference.getAttribute("data-tab");
      const activePane = container.querySelectorAll("." + activePaneId);

      Array.from(activePane).forEach((item) => {
        item.classList.add("active");
      });
    }
    for (let i = 0; i < theTabs.length; i++) {
      theTabs[i].addEventListener("click", theTabClicks);
    }
  });
  // store tabs variable
});

const mobile = window.innerWidth > 767;
const tablet = window.innerWidth < 1024;

document.querySelectorAll("[data-accordion-container]").forEach((container) => {
  const triggers = container.querySelectorAll(".accordion-trigger");
  // const prevActive = [];
  // const allPanes = container.querySelectorAll('.tab-pane');
  triggers.forEach((t) => {
    t.addEventListener("click", (e) => {
      // const currentPanes = document.querySelectorAll(
      //   `.${t.getAttribute("data-tab")}`
      // );

      triggers.forEach((other) => {
        const panes = container.querySelectorAll(
          `.${other.getAttribute("data-tab")}`
        );

        // console.log(panes);
        if (other === t) {
          if (t.parentNode.classList.contains("active")) {
            t.parentNode.classList.remove("active");
            panes.forEach((p) => p.classList.remove("active"));
          } else {
            t.parentNode.classList.add("active");
            panes.forEach((p) => {
              p.parentNode.classList.add("active");
            });
          }
        } else {
          other.parentNode.classList.remove("active");
          panes.forEach((p) => p.parentNode.classList.remove("active"));
        }
      });
    });
  });
});

// Open menu in mobile

const hamburger = document.querySelector(".hamburger");
const mainNav = document.querySelector(".nav-main");

const toggleNav = () => {
  mainNav.classList.toggle("open");
};

// if (blogSlider) {
//   var testimonialSliderRef = tns({
//     container: blogSlider,
//     gutter: 20,
//     items: 1,
//     mouseDrag: false,
//     nav: true,
//     navPosition: "bottom",
//     controls: false,
//     speed: 500,
//     loop: true,

//     responsive: {
//       0: {
//         items: 1,
//         autoplay: true,
//         // loop: true,
//       },
//       768: {
//         items: 3,
//         startIndex: 0,
//         nav: false,
//         controls: true,
//         controlsPosition: "top",
//         controlsText: [leftArrow, rightArrow],
//         mouseDrag: true,
//         autoplay: false,
//         loop: false,
//       },
//     },
//   });
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const cards = document.querySelectorAll(".achievement-grid");

//   cards.forEach((card) => {
//     card.addEventListener("click", () => {
//       removeActiveClass();
//       card.classList.add("active");
//     });
//   });
//   function removeActiveClass() {
//     cards.forEach((item) => {
//       item.classList.remove("active");
//     });
//   }
// });

const verticalSlider = document.querySelector(".vertical-slider");

if (verticalSlider) {
  var verticalSliderRef = tns({
    container: verticalSlider,
    autoplayButtonOutput: false,
    mouseDrag: false,
    loop: true,
    gutter: 20,
    speed: 4000,
    controls: false,
    axis: tablet ? "horizontal" : "vertical",
    nav: false,
    preventActionWhenRunning: true,
    autoplay: true,
    autoplayTimeout: 0,
    // autoplayHoverPause: true,

    responsive: {
      0: {
        items: 1.7,
      },

      768: {
        items: 3,
      },

      1200: {
        items: 2,
      },
    },
  });
}
// const verticalSliderTwo = document.querySelector('.vertical-slider-2');

// if (verticalSliderTwo) {
//   var verticalSliderTwoRef = tns({
//     container: verticalSliderTwo,
//     autoplayButtonOutput: false,
//     mouseDrag: false,
//     loop: true,
//     gutter: 20,
//     speed: 4000,
//     controls: false,
//     autoplayDirection: 'backward',
//     axis: tablet ? 'horizontal' : 'vertical',
//     nav: false,
//     preventActionWhenRunning: true,
//     autoplay: true,
//     autoplayTimeout: 0,
//     // autoplayHoverPause: true,

//     responsive: {
//       0: {
//         items: 1.7,
//       },

//       768: {
//         items: 3,
//       },

//       1200: {
//         items: 2,
//       },
//     },
//   });
// }

window.addEventListener("orientationchange", () => {
  window.location.reload();
});

document.addEventListener("DOMContentLoaded", function () {
  const tickerContainer = document.querySelector(".tickerContainer");

  // if (mobile) {
  const hamburger = document.querySelector(".hamburger");
  const navMain = document.querySelector(".nav-area");

  const navLinks = document.querySelectorAll(".nav-link");
  hamburger.addEventListener("click", () => {
    navMain.classList.toggle("nav-open");
    hamburger.classList.toggle("active");
    tickerContainer.classList.toggle("nav-open");
  });

  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
      navMain.classList.remove("nav-open");
      hamburger.classList.remove("active");
      tickerContainer.classList.remove("nav-open");
    });
  });
});

// Smooth scroll on anchor click

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Countdown timer

// Set the date we're counting down to
var countDownDate = new Date("Dec 15, 2023 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"

  const daysContainer = document.querySelectorAll(".days-container");
  const hoursContainer = document.querySelectorAll(".hours-container");
  const minutesContainer = document.querySelectorAll(".minutes-container");
  const secondsContainer = document.querySelectorAll(".seconds-container");

  // document.getElementById('timer').innerHTML =
  //   days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

  daysContainer.forEach((day) => {
    day.innerHTML = days + ":";
  });
  hoursContainer.forEach((hour) => {
    hour.innerHTML = hours + ":";
  });
  minutesContainer.forEach((minute) => {
    minute.innerHTML = minutes + ":";
  });
  secondsContainer.forEach((second) => {
    second.innerHTML = seconds;
  });

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

// Popup-Ad
// let intervalID;

// document.addEventListener("DOMContentLoaded", () => {
//   let closebtn = document.querySelector(".close-btn");
//   let popup = document.querySelector(".popup-ad");
//   let popupSlider = document.querySelector(".popup-slider");

//   const callTimeOut = (time) => {
//     setTimeout(() => {
//       popup.classList.remove("visible-popup");
//       popupSlider.classList.remove("animate");
//     }, time);
//   };

//   // pop-up after every 5min = 300000ms
//   intervalID = setInterval(() => {
//     popup.classList.add("visible-popup");
//     popupSlider.classList.add("animate");
//     callTimeOut(15000);
//   }, 300000);

//   closebtn.addEventListener("click", () => {
//     popup.classList.remove("visible-popup");
//     popupSlider.classList.remove("animate");
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  var sliders = document.querySelectorAll(".slider");

  const arrowRight =
    '<svg width="8" height="14" viewBox="0 0 8 14" fill="none"><path d="m1 13 6-6-6-6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  const arrowLeft =
    '<svg width="8" height="14" viewBox="0 0 8 14" fill="none"><path d="M7 13 1 7l6-6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  sliders.forEach(function (sliderElement) {
    var slider = tns({
      container: sliderElement,
      //  gutter: 20,
      items: 1,
      mouseDrag: false,
      nav: false,
      navPosition: "bottom",
      controls: true,
      controlsText: [arrowLeft, arrowRight],
      speed: 500,
      loop: false,

      responsive: {
        0: {
          disable: true,
        },
        550: {
          disable: false,
          items: 3.7,
          startIndex: 0,
          nav: false,
          mouseDrag: true,
          autoplay: false,
          loop: false,
        },
      },
    });
  });
});

const logoArea = document.getElementById("logo-area");
const logoAreaDark = document.getElementById("logo-area-dark");
const logoContainer = document.getElementById("logo-container");
const logoAnim = document.querySelectorAll(".logo-video");

logoContainer.addEventListener("mouseenter", function () {
  Array.from(logoAnim).forEach((logo) => {
    logo.play();
    logo.setAttribute("loop", "true");
  });
});

logoContainer.addEventListener("mouseleave", function () {
  Array.from(logoAnim).forEach((logo) => {
    logo.removeAttribute("loop");
    let hasEnded = false;

    logo.addEventListener("ended", function () {
      hasEnded = true;
    });

    const checkEnd = setInterval(function () {
      if (hasEnded) {
        logo.pause();
        logo.currentTime = 0;

        clearInterval(checkEnd);
      }
    }, 200);
  });
});

const dataAnimContainer = document.querySelectorAll("[data-anim-container]");

dataAnimContainer.forEach((container) => {
  document.addEventListener(
    "DOMContentLoaded",
    () => {
      const lis = Array.prototype.slice.call(
        container.querySelectorAll(".anim-common")
      );
      if (lis) {
        const lis_count = lis.length;
        let active_li_index = 0;

        setInterval(() => {
          const active_li = container.querySelector(".anim-common.active");

          if (lis.indexOf(active_li) === lis_count - 1) {
            active_li_index = 0;
          } else {
            active_li_index++;
          }

          active_li.classList.remove("active");
          container
            .querySelectorAll(".anim-common")
            [active_li_index].classList.add("active");
        }, 4000);
      }
    },
    false
  );
});

if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}

const toggleDarkMode = document.querySelectorAll(".toggle-dark-mode");
const heroVideo = document.querySelector(".hero-video");
const heroVideoSrc = document.querySelectorAll(".hero-video-src");
const htmlElem = document.documentElement;
// Function to toggle dark mode
function toggleDarkModeHandler() {
  document.body.classList.toggle("dark");
  document.querySelector(".moon").classList.toggle("sun");
  document.querySelector(".tdnn").classList.toggle("day");

  if (heroVideo) {
    heroVideo.classList.add("animating");
    setTimeout(() => {
      heroVideo.classList.remove("animating");
    }, 600);

    if (document.body.classList.contains("dark")) {
      // Dark mode
      setDarkMode();
    } else {
      // Light mode
      setLightMode();
    }
  } else {
    if (document.body.classList.contains("dark")) {
      saveModeToLocalStorage("dark");
    } else {
      saveModeToLocalStorage("light");
    }
  }
}

// Function to set dark mode
function setDarkMode() {
  if (heroVideo) {
    heroVideo.pause();
    heroVideo.setAttribute(
      "poster",
      "https://d3fu8elvld6rb5.cloudfront.net/learnyard.com/img/earth-dark.jpg"
    );
    heroVideoSrc[0].setAttribute(
      "src",
      "https://d3fu8elvld6rb5.cloudfront.net/learnyard.com/img/hero-globe-dark.webm"
    );
    heroVideoSrc[1].setAttribute(
      "src",
      "https://d3fu8elvld6rb5.cloudfront.net/learnyard.com/img/hero-globe-dark.mp4"
    );
    saveModeToLocalStorage("dark");
    loadAndPlayVideo();
  }
}

// Function to set light mode
function setLightMode() {
  if (heroVideo) {
    heroVideo.pause();
    heroVideo.setAttribute(
      "poster",
      "https://d3fu8elvld6rb5.cloudfront.net/learnyard.com/img/earth-light.jpg"
    );
    heroVideoSrc[0].setAttribute(
      "src",
      "https://d3fu8elvld6rb5.cloudfront.net/learnyard.com/img/hero-globe.webm"
    );
    heroVideoSrc[1].setAttribute(
      "src",
      "https://d3fu8elvld6rb5.cloudfront.net/learnyard.com/img/hero-globe.mp4"
    );
    saveModeToLocalStorage("light");
    loadAndPlayVideo();
  }
}

// Function to save mode to local storage
function saveModeToLocalStorage(mode) {
  localStorage.setItem("mode", mode);
}

// Function to load mode from local storage
function loadModeFromLocalStorage() {
  const savedMode = localStorage.getItem("mode");
  if (savedMode === "dark") {
    document.body.classList.add("dark");
    document.querySelector(".moon").classList.remove("sun");
    document.querySelector(".tdnn").classList.remove("day");
    setDarkMode();
  } else {
    document.body.classList.remove("dark");
    document.querySelector(".moon").classList.add("sun");
    document.querySelector(".tdnn").classList.add("day");
    setLightMode();
  }
}

// Function to load and play video
function loadAndPlayVideo() {
  if (heroVideo) {
    heroVideo.load();
    heroVideo.play();
  }
}

// Event listeners for dark mode toggle
Array.from(toggleDarkMode).forEach((element) => {
  element.addEventListener("click", toggleDarkModeHandler);
});

// Load mode from local storage when the page is loaded
document.addEventListener("DOMContentLoaded", loadModeFromLocalStorage);

// const contactForm = document.querySelector('#contactForm')
// const submit=document.querySelector('#submit')

//  submit.addEventListener('click', () => {
//    console.log('submitted')

//     let requestBody = new FormData(contactForm);
//     fetch("https://webhooks.integrately.com/a/webhooks/35b7c8ec495c412ca1fae2ed2b77d6b5",{
//       method:'POST',
//       body: requestBody ,
//       mode: "no-cors"
//     })

//     .then(response => {
//       alert("Form Submited")
//     })

//     .catch(error => {
//       console.log('failed')
//     });

// })

function hideTicker() {
  document.querySelector(".tickerContainer").classList.add("hidden");
  // Save the state in local storage
  localStorage.setItem("tickerHidden", "true"); // Store as a string
}

// const tickerHide = localStorage.getItem("tickerHidden");
// if (tickerHide === "true") {
//   document.querySelector('.tickerContainer').classList.add('hidden');
// }

var Swipes = new Swiper(".swiper-testimonial", {
  loop: true,
  autoplay: {
    pauseOnMouseEnter: true,
    delay: 3000,
  },
  speed: 700,
  spaceBetween: 20,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    1028: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

var Swipes2 = new Swiper(".instructor-slider", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 700,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".instructor-button-next",
    prevEl: ".instructor-button-prev",
  },
});

const selectCourseMobile = document.querySelector(".select-course-mobile");
const selectCourseDropdown = document.querySelector(".select-course-dropdown");
const selectCourseBtns = document.querySelectorAll(
  ".select-course-dropdown button"
);

selectCourseMobile?.addEventListener("click", () => {
  selectCourseDropdown.classList.toggle("active");

  console.log(selectCourseBtns);
});

Array.from(selectCourseBtns).forEach((dropdown) => {
  dropdown.addEventListener("click", () => {
    console.log("dropdown clicked");
    selectCourseDropdown.classList.remove("active");

    const textContent = dropdown.textContent;

    selectCourseMobile.querySelector("span").textContent = textContent;
  });
});
