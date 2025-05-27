function toggleTheme() {
            const body = document.body;
            const toggleButton = document.querySelector('.toggle-button');
            const currentTheme = body.getAttribute('data-theme');
            
            if (currentTheme === 'dark') {
                body.setAttribute('data-theme', 'light');
                toggleButton.textContent = '🌞';
                localStorage.setItem('theme', 'light');
            } else {
                body.setAttribute('data-theme', 'dark');
                toggleButton.textContent = '🌛​';
                localStorage.setItem('theme', 'dark');
            }
        }


        // Charger le thème sauvegardé
        document.addEventListener('DOMContentLoaded', function() {
            const savedTheme = localStorage.getItem('theme') || 'dark';
            const body = document.body;
            const toggleButton = document.querySelector('.toggle-button');
            
            body.setAttribute('data-theme', savedTheme);
            toggleButton.textContent = savedTheme === 'dark' ? '🌛' : '🌞';

            // Animation d'entrée progressive
            const cards = document.querySelectorAll('.competency-card');
            cards.forEach((card, index) => {
                card.style.animationDelay = `${0.1 + index * 0.1}s`;
            });
        });