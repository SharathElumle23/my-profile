import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    /* Light theme */
    --bg-primary: #ffffff;
    --bg-secondary: #f8f9fa;
    --bg-card: #ffffff;
    --bg-skill: #f8f9fa;
    --text-primary: #212529;
    --text-secondary: #495057;
    --text-muted: #6c757d;
    --border: #dee2e6;
    --shadow: rgba(0, 0, 0, 0.1);
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }

  body.dark {
    /* Dark theme */
    --bg-primary: #0a0a0a;
    --bg-secondary: #1a1a1a;
    --bg-card: #1f1f1f;
    --bg-skill: #181818;
    --text-primary: #ffffff;
    --text-secondary: #e0e0e0;
    --text-muted: #b0b0b0;
    --border: #333333;
    --shadow: rgba(255, 255, 255, 0.1);
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', Arial, sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .navbar {
    background-color: var(--bg-primary) !important;
    transition: background-color 0.3s ease;
  }

  .bg-light {
    background-color: var(--bg-card) !important;
  }

  .text-dark, .text-black {
    color: var(--text-primary) !important;
  }

  .text-muted {
    color: var(--text-muted) !important;
  }

  .btn-outline-dark {
    border-color: var(--text-secondary) !important;
    color: var(--text-secondary) !important;
  }

  .btn-outline-dark:hover {
    background-color: var(--text-secondary) !important;
    color: var(--bg-primary) !important;
  }

  .dark .navbar-nav .nav-link {
    color: var(--text-secondary) !important;
  }

  .dark .navbar-nav .nav-link:hover {
    color: var(--text-primary) !important;
  }

  .theme-toggle-btn {
    transition: all 0.3s ease;
  }

  .theme-toggle-btn:hover {
    background-color: var(--bg-card) !important;
    transform: scale(1.1);
  }

  .text-warning {
    color: var(--text-primary) !important;
  }
`;

export default GlobalStyles;
