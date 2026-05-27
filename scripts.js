/* ============================= */
/* CARROSSEL PRINCIPAL */
/* ============================= */

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.numbers');

let active = 0;
const total = items.length;
let timer;

function update(direction) {
    const activeItem = document.querySelector('.item.active');
    const activeDot = document.querySelector('.dot.active');

    if (activeItem) {
        activeItem.classList.remove('active');
    }

    if (activeDot) {
        activeDot.classList.remove('active');
    }

    if (direction > 0) {
        active++;

        if (active === total) {
            active = 0;
        }
    }

    if (direction < 0) {
        active--;

        if (active < 0) {
            active = total - 1;
        }
    }

    if (items[active]) {
        items[active].classList.add('active');
    }

    if (dots[active]) {
        dots[active].classList.add('active');
    }

    if (numberIndicator) {
        numberIndicator.textContent = String(active + 1).padStart(2, '0');
    }
}

function resetTimer() {
    clearInterval(timer);

    timer = setInterval(() => {
        const accessibilityEnabled = document.body.classList.contains('accessibility-mode');

        if (!accessibilityEnabled) {
            update(+1);
        }
    }, 5000);
}

if (prevButton && nextButton && items.length > 0) {
    resetTimer();

    prevButton.addEventListener('click', () => {
        update(-1);
        resetTimer();
    });

    nextButton.addEventListener('click', () => {
        update(+1);
        resetTimer();
    });
}

/* ============================= */
/* MENU MOBILE */
/* ============================= */

const menuToggle = document.getElementById('menu-toggle');
const headerMenu = document.getElementById('header-menu');
const menuLinks = document.querySelectorAll('#header-menu a');

if (menuToggle && headerMenu) {
    menuToggle.addEventListener('click', () => {
        const isOpen = headerMenu.classList.toggle('active');

        menuToggle.classList.toggle('active');

        menuToggle.setAttribute('aria-expanded', isOpen);
        menuToggle.setAttribute(
            'aria-label',
            isOpen ? 'Fechar menu' : 'Abrir menu'
        );
    });

    menuLinks.forEach((link) => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            headerMenu.classList.remove('active');

            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Abrir menu');
        });
    });
}

/* ============================= */
/* CARROSSEL DE PARCEIROS */
/* ============================= */

const partnersTrack = document.querySelector('.partners-track');
const partnersPrevButton = document.getElementById('partners-prev');
const partnersNextButton = document.getElementById('partners-next');

let partnersPosition = 0;
const partnersSpeed = 0.8;
const partnersStep = 260;
let partnersPaused = false;
let partnersInitialized = false;

function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function updatePartnersPosition() {
    if (!partnersTrack) {
        return;
    }

    partnersTrack.style.transform = `translateX(${partnersPosition}px)`;
}

function animatePartners() {
    if (!partnersTrack) {
        return;
    }

    const accessibilityEnabled = document.body.classList.contains('accessibility-mode');

    if (!partnersPaused && !accessibilityEnabled && !prefersReducedMotion()) {
        partnersPosition -= partnersSpeed;

        if (partnersPosition <= -partnersTrack.scrollWidth / 2) {
            partnersPosition = 0;
        }

        updatePartnersPosition();
    }

    requestAnimationFrame(animatePartners);
}

if (partnersTrack && !partnersInitialized) {
    partnersTrack.innerHTML += partnersTrack.innerHTML;
    partnersInitialized = true;

    partnersTrack.addEventListener('mouseenter', () => {
        partnersPaused = true;
    });

    partnersTrack.addEventListener('mouseleave', () => {
        partnersPaused = false;
    });

    partnersTrack.addEventListener('focusin', () => {
        partnersPaused = true;
    });

    partnersTrack.addEventListener('focusout', () => {
        partnersPaused = false;
    });

    animatePartners();
}

if (partnersPrevButton && partnersNextButton && partnersTrack) {
    partnersPrevButton.addEventListener('click', () => {
        partnersPosition += partnersStep;

        if (partnersPosition > 0) {
            partnersPosition = -partnersTrack.scrollWidth / 2 + partnersStep;
        }

        updatePartnersPosition();
    });

    partnersNextButton.addEventListener('click', () => {
        partnersPosition -= partnersStep;

        if (partnersPosition <= -partnersTrack.scrollWidth / 2) {
            partnersPosition = 0;
        }

        updatePartnersPosition();
    });
}

/* ============================= */
/* BOTÃO DE ACESSIBILIDADE */
/* ============================= */

const accessibilityButton = document.getElementById('accessibility-button');

if (accessibilityButton) {
    const savedMode = localStorage.getItem('accessibility-mode');

    if (savedMode === 'enabled') {
        document.body.classList.add('accessibility-mode');

        accessibilityButton.setAttribute('aria-label', 'Desativar modo acessível');
        accessibilityButton.setAttribute('title', 'Desativar modo acessível');
    }

    accessibilityButton.addEventListener('click', () => {
        document.body.classList.toggle('accessibility-mode');

        const isEnabled = document.body.classList.contains('accessibility-mode');

        localStorage.setItem(
            'accessibility-mode',
            isEnabled ? 'enabled' : 'disabled'
        );

        accessibilityButton.setAttribute(
            'aria-label',
            isEnabled ? 'Desativar modo acessível' : 'Ativar modo acessível'
        );

        accessibilityButton.setAttribute(
            'title',
            isEnabled ? 'Desativar modo acessível' : 'Ativar modo acessível'
        );

        if (isEnabled && partnersTrack) {
            partnersPosition = 0;
            updatePartnersPosition();
        }
    });
}

/* ============================= */
/* LISTA DE TODOS OS PARCEIROS */
/* ============================= */

const partnersToggleButton = document.getElementById('partners-toggle-button');
const partnersFullList = document.getElementById('partners-full-list');

if (partnersToggleButton && partnersFullList) {
    partnersToggleButton.addEventListener('click', () => {
        const isHidden = partnersFullList.hasAttribute('hidden');

        if (isHidden) {
            partnersFullList.removeAttribute('hidden');
            partnersToggleButton.textContent = 'Ocultar parceiros';
            partnersToggleButton.setAttribute('aria-expanded', 'true');
        } else {
            partnersFullList.setAttribute('hidden', '');
            partnersToggleButton.textContent = 'Ver todos os parceiros';
            partnersToggleButton.setAttribute('aria-expanded', 'false');
        }
    });
}