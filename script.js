document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active-link');
                    if (link.getAttribute('href').replace('#', '') === entry.target.id) {
                        link.classList.add('active-link');
                    }
                });
            }
        });
    }, { threshold: 0.3 });

    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });
});
