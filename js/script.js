// Time-based greeting in hero section
function updateGreeting() {
    const greetingEl = document.getElementById("greeting");
    if (!greetingEl) return;

    const now = new Date();
    const hour = now.getHours();
    let greetingText = "";

    if (hour < 12) {
        greetingText = "Good morning!";
    } else if (hour < 18) {
        greetingText = "Good afternoon!";
    } else {
        greetingText = "Good evening!";
    }

    greetingEl.textContent = greetingText + " Welcome to my portfolio.";
}

// Dark mode toggle with localStorage
function setupThemeToggle() {
    const toggleBtn = document.getElementById("themeToggle");
    if (!toggleBtn) return;

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "☀️ Light Mode";
    }

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");

        toggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}

// Insert current year in footer
function setCurrentYear() {
    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}

// Run when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    updateGreeting();
    setupThemeToggle();
    setCurrentYear();

    // Refresh greeting occasionally (optional)
    setInterval(updateGreeting, 5 * 60 * 1000);
});
