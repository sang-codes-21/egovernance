document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Modal handling
    const serviceCards = document.querySelectorAll('.service-card');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-modal');

    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const modalId = card.dataset.modal;
            const modal = document.getElementById(modalId);
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    const closeModal = (modal) => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    };

    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            closeModal(modal);
        });
    });

    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay')) {
                closeModal(modal);
            }
        });
    });

    // Form handling
    const forms = document.querySelectorAll('.service-form');
    const submitConfirmation = document.getElementById('submit-confirmation');

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Show the confirmation message
            submitConfirmation.style.display = 'block';
            
            // Reset the form
            form.reset();
            
            // Close the modal
            const modal = form.closest('.modal');
            closeModal(modal);

            // Hide the confirmation message after 3 seconds
            setTimeout(() => {
                submitConfirmation.style.display = 'none';
            }, 3000);
        });
    });
});
