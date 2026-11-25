// --- Navigation and Scroll Animations ---
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Mobile menu toggle
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when a link is clicked
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Scroll animations for sections
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.08
    });
    sections.forEach(section => {
        observer.observe(section);
    });

    // Active nav link on scroll
    const sectionsForNav = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.nav-link-mobile');

    const activateLink = (sectionId) => {
        navLinks.forEach(link => {
            link.classList.remove('text-amber-500', 'border-amber-500');
            link.classList.add('border-transparent');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('text-amber-500', 'border-amber-500');
                link.classList.remove('border-transparent');
            }
        });
        mobileNavLinks.forEach(link => {
            link.classList.remove('font-bold', 'text-amber-500');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('font-bold', 'text-amber-500');
            }
        });
    };

    const onScroll = () => {
        let currentSection = '';
        const offset = header ? header.offsetHeight + 20 : 120;
        sectionsForNav.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - offset) {
                currentSection = section.getAttribute('id');
            }
        });
        if (currentSection) {
            activateLink(currentSection);
        }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('load', onScroll);

    // Dynamic current year in footer if element exists
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});


// --- Contact Form Handling & Validation ---
const form = document.getElementById('contact-form');
const submitButton = document.getElementById('submit-button');
const successMessage = document.getElementById('form-success-message');
const infoMessage = document.getElementById('form-info-message');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');

// Validation Functions
const setError = (input, message) => {
    const errorDiv = input.nextElementSibling;
    if (errorDiv && errorDiv.classList.contains('error-message')) {
        errorDiv.innerText = message;
        errorDiv.style.display = 'block';
    }
    input.classList.add('border-red-500', 'focus:ring-red-500');
    input.classList.remove('focus:ring-amber-500');
};

const setSuccess = (input) => {
    const errorDiv = input.nextElementSibling;
    if (errorDiv && errorDiv.classList.contains('error-message')) {
        errorDiv.innerText = '';
        errorDiv.style.display = 'none';
    }
    input.classList.remove('border-red-500', 'focus:ring-red-500');
    input.classList.add('focus:ring-amber-500');
};

const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
    // Validates a 10-digit Indian mobile number, optionally with +91 or country prefix
    const re = /^(?:\+?\d{1,3}[- ]?)?[6-9]\d{9}$/;
    return re.test(String(phone).replace(/\s+/g, ''));
};

const validateInputs = () => {
    let isValid = true;
    const nameValue = nameInput ? nameInput.value.trim() : '';
    const emailValue = emailInput ? emailInput.value.trim() : '';
    const phoneValue = phoneInput ? phoneInput.value.trim() : '';
    const messageValue = messageInput ? messageInput.value.trim() : '';

    if (nameValue === '') {
        setError(nameInput, 'Name is required');
        isValid = false;
    } else {
        setSuccess(nameInput);
    }

    if (emailValue === '') {
        setError(emailInput, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(emailInput, 'Please provide a valid email address');
        isValid = false;
    } else {
        setSuccess(emailInput);
    }

    // Phone is optional; only validate format if provided
    if (phoneValue !== '' && !isValidPhone(phoneValue)) {
        setError(phoneInput, 'Please provide a valid phone number (e.g., +91 98948 10613)');
        isValid = false;
    } else if (phoneInput) {
        setSuccess(phoneInput);
    }

    if (messageValue === '') {
        setError(messageInput, 'Message is required');
        isValid = false;
    } else {
        setSuccess(messageInput);
    }

    return isValid;
};

// Form Submission Logic
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (validateInputs()) {
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const phone = phoneInput ? phoneInput.value.trim() : '';
            const message = messageInput.value.trim();

            // Construct mailto link as reliable direct transmission method
            const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
            const bodyContent = `Name: ${name}\nEmail: ${email}\nPhone: ${phone ? phone : 'Not provided'}\n\nMessage:\n${message}`;
            const mailtoUrl = `mailto:priyadharshansanthanams@gmail.com?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;

            if (infoMessage) {
                infoMessage.style.display = 'block';
                infoMessage.innerText = 'Opening your email client to send this message directly...';
            }

            // Launch default email client
            window.location.href = mailtoUrl;

            // Optional reset after delay
            setTimeout(() => {
                if (infoMessage) {
                    infoMessage.style.display = 'none';
                }
            }, 6000);
        }
    });
}
