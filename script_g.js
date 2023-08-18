    function toggleMenu() {
      const menu = document.querySelector(".menu");
      const menuIcon = document.querySelector(".menu-icon");
      const sections = document.querySelectorAll("section:not(#section1)");

      menu.classList.toggle("open");
      menuIcon.classList.toggle("open");

      // Toggle the blur effect for the sections
      sections.forEach((section) => {
        section.classList.toggle("blur");
      });
    }

    function scrollToSection(event, direction) {
      event.preventDefault();

      const targetSection = event.target.getAttribute("href");

      // Scroll to the target section with the specified direction
      if (direction === 'down') {
        document.querySelector(targetSection).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        event.target.parentNode.classList.add("animate");
      } else if (direction === 'up') {
        const previousSection = event.target.closest("section").previousElementSibling;
        if (previousSection) {
          previousSection.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
          });
          event.target.parentNode.classList.add("animate");
        }
      }

    }