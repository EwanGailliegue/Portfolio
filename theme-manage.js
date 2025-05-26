// theme-manager.js - À inclure dans toutes les pages
class ThemeManager {
    constructor() {
        this.THEME_KEY = 'portfolio-theme';
        this.init();
    }

    init() {
        // Charger le thème sauvegardé au chargement de la page
        this.loadSavedTheme();
        
        // Écouter les changements de thème depuis d'autres onglets
        window.addEventListener('storage', (e) => {
            if (e.key === this.THEME_KEY) {
                this.applyTheme(e.newValue);
            }
        });
    }

    loadSavedTheme() {
        const savedTheme = localStorage.getItem(this.THEME_KEY) || 'dark';
        this.applyTheme(savedTheme, false);
    }

    toggleTheme() {
        const body = document.body;
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        this.applyTheme(newTheme, true);
    }

    applyTheme(theme, save = true) {
        const body = document.body;
        const toggleButton = document.querySelector('.toggle-button');
        
        // Appliquer le thème
        body.setAttribute('data-theme', theme);
        
        // Mettre à jour l'icône du bouton
        if (toggleButton) {
            toggleButton.textContent = theme === 'dark' ? '🌙' : '🌞';
        }
        
        // Sauvegarder si nécessaire
        if (save) {
            localStorage.setItem(this.THEME_KEY, theme);
        }
    }
}

// Initialiser le gestionnaire de thème
const themeManager = new ThemeManager();

// Fonction globale pour le toggle (appelée par onclick)
function toggleTheme() {
    themeManager.toggleTheme();
}