// ============================================
// Menu Filter Functionality
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    // Get all filter tabs and menu items
    const filterTabs = document.querySelectorAll('.filter-tab');
    const menuItems = document.querySelectorAll('.menu-item');

    // Add click event to each filter tab
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Get the selected category
            const category = this.getAttribute('data-category');

            // Update active state on tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // Filter menu items
            menuItems.forEach(item => {
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
            phone: document.getElementById('bookingPhone').value
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
