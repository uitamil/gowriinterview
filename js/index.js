window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    if (scrollY < 100) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            link.parentElement.classList.remove('active');
        });
        return;
    }
    if (scrollY >= document.body.scrollHeight - window.innerHeight - 100) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            link.parentElement.classList.remove('active');
        });
        return;
    }


    const sections = ['Industries', 'services', 'insights', 'consulting', 'about-us'];

    let currentSection = 'home';
    if (scrollY < 100) {
        currentSection = 'home';
    } else if (scrollY >= document.body.scrollHeight - window.innerHeight - 100) {
        currentSection = 'contact';
    }
    for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (!section) continue;
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
            currentSection = sections[i];
        }
    }

    navLinks.forEach(link => {
        link.classList.remove('active');
        link.parentElement.classList.remove('active');
        const href = link.getAttribute('href').substring(1);
        if (
            (href === currentSection) ||
            (href === 'home' && currentSection === 'home')
        ) {
            link.classList.add('active');
            link.parentElement.classList.add('active');
        }
    });
});