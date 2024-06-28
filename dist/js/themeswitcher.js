// Icons
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");
const themeText = document.querySelector(".theme-text");

// Theme Variables
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Icon Toggling
const iconToggle = () => {
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
}

// Text Update
const updateText = () => {
    if (document.documentElement.classList.contains("dark")) {
        themeText.textContent = "Light Mode";
    } else {
        themeText.textContent = "Dark Mode";
    }
}

// Initial Theme Check
const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("display-none");
        updateText();
        return;
    }
    sunIcon.classList.add("display-none");
    updateText();
}

// Manual Theme Switch
const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        updateText();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
    updateText();
}

// Call theme switch on clicking buttons or text
sunIcon.addEventListener("click", () => {
    themeSwitch();
});

moonIcon.addEventListener("click", () => {
    themeSwitch();
});

themeText.addEventListener("click", () => {
    themeSwitch();
});

// invoke theme check on initial load
themeCheck();
