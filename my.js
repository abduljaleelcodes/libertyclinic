const myElement = document.getElementById('mysection');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
        } else {
          entry.target.classList.remove('opacity-100'); // Optional: fade out when leaving viewport
        }
      });
    },
    { threshold: 0.2 } // Trigger when 50% of the element is visible
  );

  observer.observe(myElement);
