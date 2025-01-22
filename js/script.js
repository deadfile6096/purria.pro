
document.addEventListener("DOMContentLoaded", function () {
  // Function to detect if the user is on a mobile device
  const isMobileDevice = () =>
    /Mobi|Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(
      navigator.userAgent
    );

  // Preloader element
  const preLoader = document.querySelector(".pre-loader");

  if (!isMobileDevice()) {
    // Mobile-specific behavior
        // Desktop-specific behavior
    gsap.set("nav", { y: -150 });
    gsap.set(".card", { x: 450 });

    const digit1 = document.querySelector(".digit-1");
    const digit2 = document.querySelector(".digit-2");
    const digit3 = document.querySelector(".digit-3");
    console.log("first");

    const splitTextIntoSpans = (selector) => {
      var element = document.querySelector(selector);
      if (element) {
        var text = element.innerText;
        var splitText = text
          .split("")
          .map((char) => `<span>${char}</span>`)
          .join("");
        element.innerHTML = splitText;
      }
    };

    splitTextIntoSpans(".header h1");
    for (let index = 0; index < 2; index++) {
      for (let j = 0; j < 10; j++) {
        const div = document.createElement("div");
        div.className = "num";
        div.textContent = j;
        digit3.appendChild(div);
      }
    }

    const finalDigit = document.createElement("div");
    finalDigit.className = "num";
    finalDigit.textContent = "0";
    digit3.appendChild(finalDigit);

    const animate = (digit, duration, delay = 1) => {
      const numHeight = digit.querySelector(".num").clientHeight;
      console.log(numHeight);

      const totalDistance =
        (digit.querySelectorAll(".num").length - 1) * numHeight;
      console.log(totalDistance);
      gsap.to(digit, {
        y: -totalDistance,
        duration: duration,
        delay: delay,
        ease: "power2.inOut",
      });
    };
    animate(digit3, 5);
    animate(digit2, 6);
    animate(digit1, 2, 5);

    gsap.to(".progress-bar", {
      width: "30%",
      duration: 2,
      ease: "power4.inOut",
      delay: 7,
    });
    gsap.to(".progress-bar", {
      width: "100%",
      opacity: 0,
      duration: 2,
      delay: 8.5,
      ease: "power3.out",
      onComplete: () => {
        gsap.set(".pre-loader", {
          display: "none",
        });
      },
    });
    gsap.to(".hero-imgs > img", {
      clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
      duration: 1,
      ease: "power4.inOut",
      stagger: 0.25,
      delay: 9,
    });
    gsap.to(".hero", {
      scale: 1.25,
      duration: 3,
      ease: "power3.inOut",
      delay: 8,
    });
    gsap.to(".home-video", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      delay: 10,
    });

    gsap.to("nav", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      delay: 10,
    });
    gsap.to(".card", {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      delay: 10,
    });

    gsap.to("h1 span", {
      top: "0px",
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      delay: 11,
    });
    console.log("last");
  } else {
        gsap.to(".home-video", {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 2,
        });

  }
    }
  

);

  function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(
      navigator.userAgent
    );
  }

  // Dynamically update the href attribute of the link for mobile users
  const formLink = document.getElementById("form-link");
  if (isMobileDevice()) {
    formLink.href = "form-mobile.html"; // Replace with your mobile form page URL
  }