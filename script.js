// Simple and guaranteed to work
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script started!');

    const textMessages = document.querySelectorAll('.text-message');
    const iconsContainer = document.getElementById('iconsContainer');

    // Remove active class from all messages first
    textMessages.forEach(msg => msg.classList.remove('active'));

    // Start the sequence
    startTextSequence();

    function startTextSequence() {
        console.log('Starting text sequence...');

        // Show first message immediately
        showMessage(0);
    }

    function showMessage(index) {
        if (index >= textMessages.length) {
            // All messages done, show icons
            showIcons();
            return;
        }

        console.log('Showing message:', index);

        const message = textMessages[index];
        message.classList.add('active');

        // Wait 3 seconds, then show next message
        setTimeout(() => {
            message.classList.remove('active');
            setTimeout(() => {
                showMessage(index + 1);
            }, 500); // Small delay between messages
        }, 3000);
    }

    function showIcons() {
        console.log('Showing icons...');
        iconsContainer.classList.add('show');

        // Add bounce animation to each icon with delay
        const icons = document.querySelectorAll('.icon-item');
        icons.forEach((icon, index) => {
            icon.style.animationDelay = `${index * 0.2}s`;
        });

        // Add hover effects
        addHoverEffects();
    }

    function addHoverEffects() {
        const icons = document.querySelectorAll('.icon-item');

        icons.forEach(icon => {
            icon.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
            });

            icon.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });

            icon.addEventListener('click', function() {
                this.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    this.style.transform = 'scale(1.1)';
                }, 150);
            });
        });
    }

    // Create some simple floating particles
    createParticles();

    function createParticles() {
        const container = document.body;

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 3px;
                height: 3px;
                background: rgba(255, 255, 255, 0.8);
                border-radius: 50%;
                animation: floatParticle 8s linear infinite;
                left: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 5}s;
            `;

            container.appendChild(particle);
        }

        // Add the animation to CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatParticle {
                0% {
                    transform: translateY(100vh) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100px) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
});

console.log('Script loaded!');
