// 🎨 COLORS
// Changing colors here will change them on page.

// I wrap them in object to easily export for color picker function

// Color Palettes
export const themes = {
  default: {
    "text-color": "#4d4d4d",
    "background-color": "#f7f3e9",
    "clock-background-color": "#ffffff",
    "clock-border-color": "#e0e0e0",
    "button-background-color": "#4d4d4d",
    "button-text-color": "#ffffff",
    "todo-background-color": "#ffffff",
    "todo-textbox-border-color": "#e0e0e0",
    "todo-items-border-color": "#e0e0e0",
    "todo-items-background-color": "#ffffff",
    "delete-button-background-color": "#ffffff",
    "delete-button-border-color": "#e0e0e0",
  },
  latte: {
    "text-color": "#4c4f69",
    "background-color": "#eff1f5",
    "clock-background-color": "#ffffff",
    "clock-border-color": "#e0e0e0",
    "button-background-color": "#4c4f69",
    "button-text-color": "#ffffff",
    "todo-background-color": "#ffffff",
    "todo-textbox-border-color": "#e0e0e0",
    "todo-items-border-color": "#e0e0e0",
    "todo-items-background-color": "#ffffff",
    "delete-button-background-color": "#ffffff",
    "delete-button-border-color": "#e0e0e0",
  },
  sereneDawn: {
    "text-color": "#2f4f4f",
    "background-color": "#f0f8ff",
    "clock-background-color": "#ffefd5",
    "clock-border-color": "#e6e6fa",
    "button-background-color": "#4682b4",
    "button-text-color": "#ffffff",
    "todo-background-color": "#fffafa",
    "todo-textbox-border-color": "#b0c4de",
    "todo-items-border-color": "#b0c4de",
    "todo-items-background-color": "#fffafa",
    "delete-button-background-color": "#fffafa",
    "delete-button-border-color": "#b0c4de",
  },
  twilightBlossom: {
    "text-color": "#5d3fd3",
    "background-color": "#f4e1e6",
    "clock-background-color": "#ffe4e1",
    "clock-border-color": "#d8bfd8",
    "button-background-color": "#c71585",
    "button-text-color": "#ffffff",
    "todo-background-color": "#fff0f5",
    "todo-textbox-border-color": "#dda0dd",
    "todo-items-border-color": "#dda0dd",
    "todo-items-background-color": "#fff0f5",
    "delete-button-background-color": "#fff0f5",
    "delete-button-border-color": "#dda0dd",
  },
  autumnHarvest: {
    "text-color": "#8b4513",
    "background-color": "#fff5ee",
    "clock-background-color": "#ffdead",
    "clock-border-color": "#f4a460",
    "button-background-color": "#d2691e",
    "button-text-color": "#ffffff",
    "todo-background-color": "#fdf5e6",
    "todo-textbox-border-color": "#daa520",
    "todo-items-border-color": "#daa520",
    "todo-items-background-color": "#fdf5e6",
    "delete-button-background-color": "#fdf5e6",
    "delete-button-border-color": "#daa520",
  },
};

export const playlists = {
  "lofi": {
    "name": "Lofi Hip Hop",
    "src": "PLzByH-h3aV9v1W7X5Ty1HOSaG4vPNBcPg",
  },
  "anime": {
    "name": "Anime Openings",
    "src": "PLjNlQ2vXx1xbt30X8TcUfNzw_akVISXEu",
  },
  "jazz": {
    "name": "Jazz",
    "src": "PL0PwxJm2JWCRdZ41OofKKAVGTbuJ8lbnd",
  },
};

// 🖼️ ICONS
// https://boxicons.com/
window.settingsIcon = "cog";
window.todoIcon = "list-ul";
window.deadlineIcon = "alarm-exclamation";
window.musicIcon = "music";
window.playIcon = "play";
window.pauseIcon = "pause";
window.skipIcon = "skip-next";

// Why format them weirdly?

document.querySelector("#settings-icon").setAttribute("name", window.settingsIcon);
document.querySelector("#to-do-icon").setAttribute("name", window.todoIcon);
document.querySelector("#music-icon").setAttribute("name", window.musicIcon);
document.querySelector("#deadline-icon").setAttribute("name", window.deadlineIcon);
