<div align="center">
  <h1>UnfollowSpy</h1>
  <p><strong>Discover who doesn't follow you back on Instagram in a 100% secure and local way.</strong></p>
</div>

---

## About the Project

**UnfollowSpy** is a modern web tool designed with an absolute focus on privacy. Unlike third-party applications that require your login credentials and compromise your account, UnfollowSpy analyzes your data exported directly from Meta (Instagram) **100% locally in your browser**. No personal data or files are sent to external servers.

## Key Features

*   **Total Privacy:** Analyze your followers without the need to log in or provide passwords. All processing is done strictly on your device.
*   **Modern Interface:** Highly polished design focused on usability, featuring brand-inspired SVG gradients, sequential animations, and an environment free of informal distractions.
*   **Comprehensive Time Analysis:** Decodes the timestamps (UNIX timestamps) provided by Meta to accurately indicate the days elapsed since that person started following you.
*   **Smart & Strict Validations:** The system prevents errors through rigorous verification of the original export files (`followers_1.json` and `following.json`).
*   **Optimal Performance:** Super-fast SPA architecture that processes data cross-referencing instantly.

## Architecture & Technologies

*   **Frontend Core:** React 18
*   **Routing:** React Router DOM v6
*   **Build Tool:** Vite
*   **Visual Design:** Modern CSS (UI Variables, Custom Keyframe Animations, Flexbox/Grid)

## Installation & Usage Guide

Follow these steps to start the project on your local machine:

1. **Open your terminal in the project directory**:
   ```bash
   cd "Proyecto Instagram"
   ```

2. **Install all required dependencies**:
   ```bash
   npm install
   ```

3. **Run the local development server**:
   ```bash
   npm run dev
   ```

4. **Start the application**:
   Open the local address provided by the terminal in your web browser (by default `http://localhost:5173`).

## Instructions: How to get your Instagram data

1. Go to the Accounts Center / Account Settings on Instagram (App or Web).
2. Navigate to the **Your activity** > **Download your information** section.
3. Request a copy of your data and make sure to select the **JSON** format.
4. Once you are notified and have downloaded the `.zip` file, extract it on your computer.
5. Launch UnfollowSpy and upload the `followers_1.json` and `following.json` files (which you will find inside the inner `connections/followers_and_following` folder).

---
<div align="center">
  <i>Audit your profile while maintaining absolute control of your data.</i>
</div>
