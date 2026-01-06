// ============================================
// Menu Data with Nutrition & Allergens
// ============================================

const menuItems = {
    'Bruschetta Classica': {
        nutrition: '220 kcal',
        allergens: 'Gluten'
    },
    'Caprese di Bufala': {
        nutrition: '280 kcal',
        allergens: 'Laktose'
    },
    'Vitello Tonnato': {
        nutrition: '320 kcal',
        allergens: 'Fisch, Eier'
    },
    'Margherita': {
        nutrition: '650 kcal',
        allergens: 'Gluten, Laktose'
    },
    'Diavola': {
        nutrition: '720 kcal',
        allergens: 'Gluten, Laktose'
    },
    'Tartufo': {
        nutrition: '780 kcal',
        allergens: 'Gluten, Laktose'
    },
    'Spaghetti Carbonara': {
        nutrition: '580 kcal',
        allergens: 'Gluten, Eier, Laktose'
    },
    'Penne Arrabbiata': {
        nutrition: '450 kcal',
        allergens: 'Gluten'
    },
    'Ravioli di Ricotta': {
        nutrition: '520 kcal',
        allergens: 'Gluten, Eier, Laktose'
    },
    'Tiramisù della Casa': {
        nutrition: '380 kcal',
        allergens: 'Gluten, Eier, Laktose'
    },
    'Panna Cotta': {
        nutrition: '310 kcal',
        allergens: 'Laktose'
    },
    'Cannoli Siciliani': {
        nutrition: '420 kcal',
        allergens: 'Gluten, Laktose, Nüsse'
    }
};

// ============================================
// Multi-Language Translation Dictionary
// ============================================

const translations = {
    de: {
        // Navigation
        menu: 'Speisekarte',
        about: 'Über Uns',
        reviews: 'Bewertungen',
        contact: 'Kontakt',
        bookTable: 'Tisch reservieren',

        // Hero
        heroTitle: 'Düsseldorf isst italienisch.',
        heroSubtitle: 'Handgemachte Pasta & Echte Amore.',
        heroButton: 'Unsere Speisekarte',

        // Menu Section
        menuTitle: 'Unsere Speisekarte',
        menuSubtitle: 'Tradition trifft Geschmack',
        filterAll: 'Alle',
        filterAntipasti: 'Antipasti',
        filterPizza: 'Pizza',
        filterPasta: 'Pasta',
        filterDessert: 'Desserts',

        // Chef Section
        chefTitle: 'Unser Chef Luigi',
        chefSubtitle: 'Tradition aus Neapel',

        // Reviews Section
        reviewsTitle: 'Das sagen unsere Gäste',
        reviewsSubtitle: 'Authentische Bewertungen',

        // Booking Section
        bookingTitle: 'Tisch Reservieren',
        bookingSubtitle: 'Wir freuen uns auf Ihren Besuch',

        // Modal
        modalTitle: 'Tisch Reservieren',
        modalSubtitle: 'Wir freuen uns auf Ihren Besuch!',
        labelDate: 'Datum*',
        labelTime: 'Uhrzeit*',
        labelPersons: 'Anzahl Personen*',
        labelName: 'Name*',
        labelPhone: 'Telefon*',
        labelEmail: 'E-Mail*',
        submitButton: 'Reservierung anfragen',

        // Nutrition
        nutritionInfo: 'ℹ️ Nährwerte',
        nutritionLabel: 'Nährwerte',
        allergensLabel: 'Allergene'
    },
    en: {
        // Navigation
        menu: 'Menu',
        about: 'About Us',
        reviews: 'Reviews',
        contact: 'Contact',
        bookTable: 'Book a Table',

        // Hero
        heroTitle: 'Düsseldorf tastes Italian.',
        heroSubtitle: 'Handmade Pasta & True Amore.',
        heroButton: 'Our Menu',

        // Menu Section
        menuTitle: 'Our Menu',
        menuSubtitle: 'Tradition meets Taste',
        filterAll: 'All',
        filterAntipasti: 'Antipasti',
        filterPizza: 'Pizza',
        filterPasta: 'Pasta',
        filterDessert: 'Desserts',

        // Chef Section
        chefTitle: 'Our Chef Luigi',
        chefSubtitle: 'Tradition from Naples',

        // Reviews Section
        reviewsTitle: 'What Our Guests Say',
        reviewsSubtitle: 'Authentic Reviews',

        // Booking Section
        bookingTitle: 'Book a Table',
        bookingSubtitle: 'We look forward to your visit',

        // Modal
        modalTitle: 'Book a Table',
        modalSubtitle: 'We look forward to your visit!',
        labelDate: 'Date*',
        labelTime: 'Time*',
        labelPersons: 'Number of Guests*',
        labelName: 'Name*',
        labelPhone: 'Phone*',
        labelEmail: 'Email*',
        submitButton: 'Request Booking',

        // Nutrition
        nutritionInfo: 'ℹ️ Nutrition',
        nutritionLabel: 'Nutrition',
        allergensLabel: 'Allergens'
    },
    it: {
        // Navigation
        menu: 'Menu',
        about: 'Chi Siamo',
        reviews: 'Recensioni',
        contact: 'Contatto',
        bookTable: 'Prenota un Tavolo',

        // Hero
        heroTitle: 'Düsseldorf gusta l\'italiano.',
        heroSubtitle: 'Pasta Fatta a Mano & Vero Amore.',
        heroButton: 'Il Nostro Menu',

        // Menu Section
        menuTitle: 'Il Nostro Menu',
        menuSubtitle: 'Tradizione incontra Gusto',
        filterAll: 'Tutti',
        filterAntipasti: 'Antipasti',
        filterPizza: 'Pizza',
        filterPasta: 'Pasta',
        filterDessert: 'Dolci',

        // Chef Section
        chefTitle: 'Il Nostro Chef Luigi',
        chefSubtitle: 'Tradizione da Napoli',

        // Reviews Section
        reviewsTitle: 'Cosa Dicono i Nostri Ospiti',
        reviewsSubtitle: 'Recensioni Autentiche',

        // Booking Section
        bookingTitle: 'Prenota un Tavolo',
        bookingSubtitle: 'Non vediamo l\'ora della tua visita',

        // Modal
        modalTitle: 'Prenota un Tavolo',
        modalSubtitle: 'Non vediamo l\'ora della tua visita!',
        labelDate: 'Data*',
        labelTime: 'Ora*',
        labelPersons: 'Numero di Ospiti*',
        labelName: 'Nome*',
        labelPhone: 'Telefono*',
        labelEmail: 'Email*',
        submitButton: 'Richiedi Prenotazione',

        // Nutrition
        nutritionInfo: 'ℹ️ Valori Nutrizionali',
        nutritionLabel: 'Valori Nutrizionali',
        allergensLabel: 'Allergeni'
    },
    fr: {
        // Navigation
        menu: 'Menu',
        about: 'À Propos',
        reviews: 'Avis',
        contact: 'Contact',
        bookTable: 'Réserver une Table',

        // Hero
        heroTitle: 'Düsseldorf goûte l\'italien.',
        heroSubtitle: 'Pâtes Faites Maison & Vrai Amore.',
        heroButton: 'Notre Menu',

        // Menu Section
        menuTitle: 'Notre Menu',
        menuSubtitle: 'Tradition rencontre Goût',
        filterAll: 'Tous',
        filterAntipasti: 'Antipasti',
        filterPizza: 'Pizza',
        filterPasta: 'Pâtes',
        filterDessert: 'Desserts',

        // Chef Section
        chefTitle: 'Notre Chef Luigi',
        chefSubtitle: 'Tradition de Naples',

        // Reviews Section
        reviewsTitle: 'Ce Que Disent Nos Clients',
        reviewsSubtitle: 'Avis Authentiques',

        // Booking Section
        bookingTitle: 'Réserver une Table',
        bookingSubtitle: 'Nous attendons votre visite avec impatience',

        // Modal
        modalTitle: 'Réserver une Table',
        modalSubtitle: 'Nous attendons votre visite avec impatience!',
        labelDate: 'Date*',
        labelTime: 'Heure*',
        labelPersons: 'Nombre de Personnes*',
        labelName: 'Nom*',
        labelPhone: 'Téléphone*',
        labelEmail: 'Email*',
        submitButton: 'Demander une Réservation',

        // Nutrition
        nutritionInfo: 'ℹ️ Informations Nutritionnelles',
        nutritionLabel: 'Informations Nutritionnelles',
        allergensLabel: 'Allergènes'
    }
};

// Current language
let currentLanguage = 'de';

// ============================================
// Language Switcher Functionality
// ============================================

function updateLanguage(lang) {
    currentLanguage = lang;
    const t = translations[lang];

    // Update navigation
    const navLinks = document.querySelectorAll('.main-nav a:not(.booking-cta)');
    if (navLinks.length >= 4) {
        navLinks[0].textContent = t.menu;
        navLinks[1].textContent = t.about;
        navLinks[2].textContent = t.reviews;
        navLinks[3].textContent = t.contact;
    }

    // Update booking buttons
    document.querySelectorAll('.booking-cta, #mobileBookingCta, #footerBookingCta').forEach(btn => {
        if (btn) btn.textContent = t.bookTable;
    });

    // Update hero section
    const heroTitle = document.querySelector('.hero-content h1');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButton = document.querySelector('.hero-content .cta-button');
    if (heroTitle) heroTitle.textContent = t.heroTitle;
    if (heroSubtitle) heroSubtitle.textContent = t.heroSubtitle;
    if (heroButton) heroButton.textContent = t.heroButton;

    // Update menu section
    const menuTitle = document.querySelector('.menu-section .section-title');
    const menuSubtitle = document.querySelector('.menu-section .section-subtitle');
    if (menuTitle) menuTitle.textContent = t.menuTitle;
    if (menuSubtitle) menuSubtitle.textContent = t.menuSubtitle;

    // Update filter tabs
    const filterTabs = document.querySelectorAll('.filter-tab');
    if (filterTabs.length >= 5) {
        filterTabs[0].textContent = t.filterAll;
        filterTabs[1].textContent = t.filterAntipasti;
        filterTabs[2].textContent = t.filterPizza;
        filterTabs[3].textContent = t.filterPasta;
        filterTabs[4].textContent = t.filterDessert;
    }

    // Update chef section
    const chefTitle = document.querySelector('.chef-section .section-title');
    const chefSubtitle = document.querySelector('.chef-section .lead');
    if (chefTitle) chefTitle.textContent = t.chefTitle;
    if (chefSubtitle) chefSubtitle.textContent = t.chefSubtitle;

    // Update reviews section
    const reviewsTitle = document.querySelector('.reviews-section .section-title');
    const reviewsSubtitle = document.querySelector('.reviews-section .section-subtitle');
    if (reviewsTitle) reviewsTitle.textContent = t.reviewsTitle;
    if (reviewsSubtitle) reviewsSubtitle.textContent = t.reviewsSubtitle;

    // Update booking section
    const bookingTitle = document.querySelector('.booking-section .section-title');
    const bookingSubtitle = document.querySelector('.booking-section .section-subtitle');
    if (bookingTitle) bookingTitle.textContent = t.bookingTitle;
    if (bookingSubtitle) bookingSubtitle.textContent = t.bookingSubtitle;

    // Update modal
    const modalTitle = document.querySelector('.modal-title');
    const modalSubtitle = document.querySelector('.modal-subtitle');
    if (modalTitle) modalTitle.textContent = t.modalTitle;
    if (modalSubtitle) modalSubtitle.textContent = t.modalSubtitle;

    // Update form labels
    const labels = {
        'bookingDate': t.labelDate,
        'bookingTime': t.labelTime,
        'bookingPersons': t.labelPersons,
        'bookingName': t.labelName,
        'bookingPhone': t.labelPhone,
        'bookingEmail': t.labelEmail
    };

    Object.keys(labels).forEach(id => {
        const label = document.querySelector(`label[for="${id}"]`);
        if (label) label.textContent = labels[id];
    });

    const submitButton = document.querySelector('.submit-button');
    if (submitButton) submitButton.textContent = t.submitButton;

    // Update nutrition info buttons
    document.querySelectorAll('.nutrition-info-btn').forEach(btn => {
        btn.textContent = t.nutritionInfo;
    });
}

// ============================================
// Fix Menu Images with Specific Unsplash IDs
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    // Fix Caprese image
    const capreseImg = document.querySelector('img[alt="Caprese di Bufala"]');
    if (capreseImg) {
        capreseImg.src = 'https://images.unsplash.com/photo-1529312266912-b33cf6227e24?w=800&h=450&fit=crop';
    }

    // Fix Ravioli image
    const ravioliImg = document.querySelector('img[alt="Ravioli di Ricotta"]');
    if (ravioliImg) {
        ravioliImg.src = 'https://images.unsplash.com/photo-1587394211304-84d49058d8b8?w=800&h=450&fit=crop';
    }

    // Fix Cannoli image
    const cannoliImg = document.querySelector('img[alt="Cannoli Siciliani"]');
    if (cannoliImg) {
        cannoliImg.src = 'https://images.unsplash.com/photo-1551024601-569d6f4638a4?w=800&h=450&fit=crop';
    }

    // Fix Chef Luigi image
    const chefImg = document.querySelector('img[alt="Chef Luigi bei der Pasta-Zubereitung"]');
    if (chefImg) {
        chefImg.src = 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=800&h=1000&fit=crop';
    }

    // ============================================
    // Add Nutrition Info Buttons to Menu Cards
    // ============================================

    document.querySelectorAll('.menu-item').forEach(item => {
        const title = item.querySelector('h3');
        if (title && menuItems[title.textContent]) {
            const menuBadges = item.querySelector('.menu-badges') || item.querySelector('.menu-item-content');

            // Create nutrition button
            const nutritionBtn = document.createElement('button');
            nutritionBtn.className = 'nutrition-info-btn';
            nutritionBtn.textContent = translations[currentLanguage].nutritionInfo;
            nutritionBtn.setAttribute('aria-label', 'Nährwerte anzeigen');

            // Create nutrition overlay
            const overlay = document.createElement('div');
            overlay.className = 'nutrition-overlay';
            overlay.innerHTML = `
                <div class="nutrition-content">
                    <h4>${translations[currentLanguage].nutritionLabel}</h4>
                    <p>${menuItems[title.textContent].nutrition}</p>
                    <h4>${translations[currentLanguage].allergensLabel}</h4>
                    <p>${menuItems[title.textContent].allergens}</p>
                </div>
            `;

            // Toggle overlay on click
            nutritionBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                overlay.classList.toggle('active');
            });

            // Close overlay when clicking outside
            overlay.addEventListener('click', () => {
                overlay.classList.remove('active');
            });

            const imageContainer = item.querySelector('.menu-item-image');
            if (imageContainer) {
                imageContainer.appendChild(overlay);
            }

            if (menuBadges) {
                menuBadges.appendChild(nutritionBtn);
            }
        }
    });

    // ============================================
    // Language Switcher Event Listener
    // ============================================

    const languageSwitcher = document.getElementById('languageSwitcher');
    if (languageSwitcher) {
        languageSwitcher.addEventListener('change', function () {
            updateLanguage(this.value);
        });
    }
});

// ============================================
// Menu Filter Functionality
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    // Get all filter tabs and menu items
    const filterTabs = document.querySelectorAll('.filter-tab');
    const menuItemsElements = document.querySelectorAll('.menu-item');

    // Add click event to each filter tab
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Get the selected category
            const category = this.getAttribute('data-category');

            // Update active state on tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // Filter menu items
            menuItemsElements.forEach(item => {
                const itemCategory = item.getAttribute('data-category');

                if (category === 'all' || itemCategory === category) {
                    // Show item with fade-in effect
                    item.classList.remove('hidden');
                    item.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    // Hide item
                    item.classList.add('hidden');
                }
            });
        });
    });

    // Add CSS animation for fade-in effect
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
});

// ============================================
// Smooth Scrolling for Navigation Links
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Header Background on Scroll
// ============================================

const header = document.querySelector('.main-header');
let lastScroll = 0;

window.addEventListener('scroll', function () {
    const currentScroll = window.pageYOffset;

    // Add solid background when scrolled down
    if (currentScroll > 100) {
        header.style.backgroundColor = 'rgba(43, 43, 43, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
        header.style.padding = '1rem 0';
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.backdropFilter = 'none';
        header.style.padding = '2rem 0';
    }

    lastScroll = currentScroll;
});

// ============================================
// Intersection Observer for Scroll Animations
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for fade-in effect
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(section);
});

// ============================================
// Mobile CTA Button Functionality
// ============================================

const mobileBookingCta = document.getElementById('mobileBookingCta');
let lastScrollPosition = 0;

window.addEventListener('scroll', function () {
    const currentScrollPosition = window.pageYOffset;

    if (window.innerWidth <= 768 && mobileBookingCta) {
        if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 100) {
            // Scrolling down - hide button
            mobileBookingCta.style.transform = 'translateX(-50%) translateY(100px)';
            mobileBookingCta.style.opacity = '0';
        } else {
            // Scrolling up - show button
            mobileBookingCta.style.transform = 'translateX(-50%) translateY(0)';
            mobileBookingCta.style.opacity = '1';
        }
    }

    lastScrollPosition = currentScrollPosition;
});

// ============================================
// Booking Modal Functionality
// ============================================

const bookingModal = document.getElementById('bookingModal');
const bookingCta = document.getElementById('bookingCta');
const footerBookingCta = document.getElementById('footerBookingCta');
const closeModal = document.getElementById('closeModal');
const bookingForm = document.getElementById('bookingForm');

// Open modal when clicking booking CTA
if (bookingCta) {
    bookingCta.addEventListener('click', function (e) {
        e.preventDefault();
        bookingModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// Open modal from footer CTA
if (footerBookingCta) {
    footerBookingCta.addEventListener('click', function (e) {
        e.preventDefault();
        bookingModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// Open modal from mobile CTA
if (mobileBookingCta) {
    mobileBookingCta.addEventListener('click', function (e) {
        e.preventDefault();
        bookingModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// Close modal
function closeBookingModal() {
    bookingModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

if (closeModal) {
    closeModal.addEventListener('click', closeBookingModal);
}

// Close modal when clicking outside
bookingModal.addEventListener('click', function (e) {
    if (e.target === bookingModal) {
        closeBookingModal();
    }
});

// Handle form submission
if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = {
            date: document.getElementById('bookingDate').value,
            time: document.getElementById('bookingTime').value,
            persons: document.getElementById('bookingPersons').value,
            name: document.getElementById('bookingName').value,
            phone: document.getElementById('bookingPhone').value,
            email: document.getElementById('bookingEmail').value
        };

        // In a real application, you would send this data to a server
        console.log('Booking request:', formData);

        // Close modal and show success message
        closeBookingModal();

        // Show success message
        alert('Grazie! Tisch angefragt.\n\nWir haben Ihre Reservierungsanfrage erhalten und werden uns in Kürze bei Ihnen melden.');

        // Reset form
        bookingForm.reset();
    });
}

// ============================================
// Performance: Lazy Loading Enhancement
// ============================================

// Add loading="lazy" to all images if not already set
document.querySelectorAll('img').forEach(img => {
    if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
    }
});

// ============================================
// Menu Item Hover Effect Enhancement
// ============================================

const menuCards = document.querySelectorAll('.menu-item');

menuCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// ============================================
// Review Cards Animation on Scroll
// ============================================

const reviewCards = document.querySelectorAll('.review-card');

const reviewObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 150); // Stagger animation
        }
    });
}, {
    threshold: 0.2
});

reviewCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    reviewObserver.observe(card);
});

// ============================================
// Console Welcome Message
// ============================================

console.log('%c🍝 AMORE & PASTA 🍕', 'color: #c65d47; font-size: 24px; font-weight: bold;');
console.log('%cHandgemachte Pasta & Echte Amore', 'color: #5f6f52; font-size: 14px;');
console.log('%cWebsite by Armin Asad Zadeh Tabrizi', 'color: #2b2b2b; font-size: 12px;');
