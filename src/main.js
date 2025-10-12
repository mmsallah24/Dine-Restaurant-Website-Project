// === BOOKING PAGE ===
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#reservationForm");
  if (form) {
    // Inputs
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const dateInput = document.querySelector("#date");
    const timeInput = document.querySelector("#time");
    const guestCount = document.querySelector("#guestCount");

    // Error messages
    const errorName = document.querySelector("#error-name");
    const errorEmail = document.querySelector("#error-email");
    const errorDate = document.querySelector("#error-date");
    const errorTime = document.querySelector("#error-time");
    const errorGuests = document.querySelector("#error-guests");

    // Increment / Decrement
    const incrementBtn = document.querySelector("#increment");
    const decrementBtn = document.querySelector("#decrement");

    let guests = 4; // default
    guestCount.textContent = `${guests} people`;

    incrementBtn.addEventListener("click", () => {
      guests++;
      guestCount.textContent = `${guests} people`;
      errorGuests.classList.add("hidden");
    });

    decrementBtn.addEventListener("click", () => {
      if (guests > 1) {
        guests--;
        guestCount.textContent = `${guests} people`;
        errorGuests.classList.add("hidden");
      } else {
        errorGuests.classList.remove("hidden");
      }
    });

    // === AM/PM DROPDOWN ===
    const ampmToggle = document.querySelector("#ampmToggle");
    const ampmList = document.querySelector("#ampmList");
    const ampmValue = document.querySelector("#ampmValue");

    // Default: AM with checkmark visible
    let currentPeriod = "AM";
    const checkIcon = `<img src="./images/icons/icon-check.svg" alt="Check" class="inline ml-1 w-3">`;

    // Update dropdown items on open
    const updateDropdown = () => {
      const items = ampmList.querySelectorAll("li");
      items.forEach(item => {
        item.innerHTML = item.textContent === currentPeriod
          ? `${item.textContent} ${checkIcon}`
          : item.textContent;
      });
    };

    ampmToggle.addEventListener("click", () => {
      ampmList.classList.toggle("hidden");
      updateDropdown();
    });

    ampmList.addEventListener("click", e => {
      if (e.target.tagName === "LI") {
        currentPeriod = e.target.textContent.trim().replace("AM", "AM").replace("PM", "PM");
        ampmValue.textContent = currentPeriod;
        updateDropdown();
        ampmList.classList.add("hidden");
      }
    });

    ampmList.querySelectorAll("li").forEach((item) => {
      item.addEventListener("click", () => {
        const selected = item.textContent.trim();
        ampmValue.textContent = selected;

        // 🔧 replace with check icon
        ampmList.querySelectorAll("li").forEach((li) => {
        li.innerHTML = li.textContent; // reset
        });

        item.innerHTML = `${selected} <img src="./images/icons/icon-check.svg" alt="check" class="inline ml-2 w-3 h-3">`;

        ampmList.classList.add("hidden");
      });
    });

    // 🔧 close dropdown if clicked outside
    document.addEventListener("click", (e) => {
      if (!ampmToggle.contains(e.target) && !ampmList.contains(e.target)) {
      ampmList.classList.add("hidden");
      }
    });

    // === FORM VALIDATION ===
    form.addEventListener("submit", e => {
      e.preventDefault();

      let valid = true;

      // Name
      if (nameInput.value.trim() === "") {
        errorName.classList.remove("hidden");
        valid = false;
      } else {
        errorName.classList.add("hidden");
      }

      // Email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        errorEmail.classList.remove("hidden");
        valid = false;
      } else {
        errorEmail.classList.add("hidden");
      }

      // Date
      if (dateInput.value === "") {
        errorDate.classList.remove("hidden");
        valid = false;
      } else {
        errorDate.classList.add("hidden");
      }

      // Time
      if (timeInput.value === "") {
        errorTime.classList.remove("hidden");
        valid = false;
      } else {
        errorTime.classList.add("hidden");
      }

      // Guests
      if (guests < 1) {
        errorGuests.classList.remove("hidden");
        valid = false;
      } else {
        errorGuests.classList.add("hidden");
      }

      if (valid) {
        console.log("Reservation submitted successfully!");
        form.reset();
        guests = 4;
        guestCount.textContent = `${guests} people`;
        currentPeriod = "AM";
        ampmValue.textContent = "AM";
      }
    });
  }

  // === HOMEPAGE EVENT SWITCH (FAMILY / SPECIAL / SOCIAL) ===
  const options = document.querySelectorAll(".option");
  const eventTitle = document.querySelector("#event-title");
  const eventText = document.querySelector("#event-text");
  const eventImage = document.querySelector("#event-image");

  if (options.length) {
    const eventData = {
      family: {
        title: "Family Gathering",
        text: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
        img: "./images/homepage/family-gathering-desktop.jpg",
      },
      special: {
        title: "Special Events",
        text: "Whether it’s a romantic dinner or special celebration, we’ll provide the perfect setting for an unforgettable night.",
        img: "./images/homepage/special-events-desktop.jpg",
      },
      social: {
        title: "Social Events",
        text: "Our relaxed atmosphere and spacious rooms make our restaurant the perfect place for social gatherings and parties.",
        img: "./images/homepage/social-events-desktop.jpg",
      },
    };

    options.forEach(option => {
      option.addEventListener("click", () => {
        options.forEach(o => {
          o.classList.remove("active", "underline", "text-[#111111]");
          o.classList.add("text-[#aaaaaa]");
        });

        option.classList.add("active", "underline", "text-[#111111]");
        option.classList.remove("text-[#aaaaaa]");

        const eventKey = option.getAttribute("data-event");
        const { title, text, img } = eventData[eventKey];

        eventTitle.textContent = title;
        eventText.textContent = text;
        eventImage.src = img;
      });
    });
  }
});
