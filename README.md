
https://github.com/user-attachments/assets/787f2ac0-9e02-4b4c-b154-dd743c5139fa
# Quiz App

Welcome to the **Quiz App**, a dynamic and interactive web application designed to test your knowledge on various topics. This app is built using **React**, **PrimeReact** for UI components, and **React Router** for navigation. It provides a seamless user experience with features like timed questions, score calculation, and instant feedback on answers.

---

## Features

### 1. **Interactive Quiz Interface**
   - The app presents questions one at a time in a clean and user-friendly interface.
   - Users can select answers from multiple-choice options.
   - The selected answer is highlighted, and the app provides instant feedback on whether the answer is correct or incorrect.

### 2. **Timer for Each Question**
   - Each question comes with a countdown timer.
   - If the user doesn't answer within the allotted time, the app automatically moves to the next question.
   - The timer ensures a challenging and engaging experience.

### 3. **Score Calculation**
   - The app calculates the user's score based on correct and incorrect answers.
   - Correct answers add points to the total score, while incorrect answers deduct points (negative marking).
   - The final score is displayed at the end of the quiz.

### 4. **Instant Feedback**
   - When a user selects an answer, the app immediately shows whether the answer is correct or incorrect.
   - For incorrect answers, the correct answer is highlighted, helping users learn from their mistakes.

### 5. **Result Page**
   - After completing all questions, the app navigates to a result page.
   - The result page displays the user's total score and a summary of their performance.

### 6. **Responsive Design**
   - The app is fully responsive and works seamlessly on desktops, tablets, and mobile devices.
   - The UI adapts to different screen sizes, ensuring a consistent experience across devices.

### 7. **Dynamic Question Navigation**
   - Users can navigate between questions using a stepper component.
   - The app ensures that users cannot skip questions without answering, maintaining the integrity of the quiz.

### 8. **Keyword Highlights**
   - Each question includes a list of keywords or concepts related to the topic.
   - This feature helps users understand the context of the question and reinforces learning.

---

## How It Works

### 1. **Starting the Quiz**
   - When the app loads, users are presented with the first question.
   - The timer starts immediately, and users must select an answer before the time runs out.

### 2. **Answering Questions**
   - Users can select one or more answers (depending on the question type).
   - After selecting an answer, the app provides instant feedback:
     - If the answer is correct, the selected option turns green.
     - If the answer is incorrect, the selected option turns red, and the correct answer is highlighted in green.

### 3. **Navigating Between Questions**
   - Users can move to the next question using the "Next" button or the stepper component.
   - The app ensures that users cannot proceed without answering the current question.

### 4. **Completing the Quiz**
   - After answering all questions, the app navigates to the result page.
   - The result page displays the user's total score and a summary of their performance.

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **PrimeReact**: A UI component library for React, used for buttons, cards, and other UI elements.
- **React Router**: A library for handling navigation in a React app.
- **JavaScript**: The primary programming language used for logic and functionality.
- **CSS**: Used for styling the app and ensuring a responsive design.

---

## Code Structure

The app is organized into reusable components for better maintainability and scalability. Here's an overview of the key components:

1. **`Container` Component**:
   - The main component that handles the quiz logic.
   - Manages the state for selected answers, score calculation, and navigation.

2. **`Timer` Component**:
   - Displays a countdown timer for each question.
   - Automatically moves to the next question when the timer runs out.

3. **`OptionTab` Component**:
   - Represents a single answer option.
   - Handles user clicks and updates the selected answer state.

4. **`Keywords` Component**:
   - Displays a list of keywords or concepts related to the current question.

5. **`Result` Page**:
   - Displays the user's final score and a summary of their performance.

---

## Why This Project?

This Quiz App demonstrates my ability to:
- Build interactive and dynamic web applications using React.
- Manage state and handle complex logic (e.g., score calculation, timer, and navigation).
- Create a responsive and user-friendly interface.
- Write clean, modular, and reusable code.

---

## How to Run the App

1. Clone the repository:
   ```bash
   git clone https://github.com/prinkaldoshi27/quiz-app.git

2. Navigate to the project directory:
   ```bash
   cd quiz-app

3. Install dependencies:
   ```bash
   npm install

5. Start the development server:
   ```bash
   npm start
   
6. Open your browser and visit http://localhost:3000 to view the app.

## 📸 Screenshots  

### **Demo**  
https://github.com/user-attachments/assets/8826f3f4-33f8-4cc3-b789-08b52a670a06

### **Quiz Homepage**  
![image](https://github.com/user-attachments/assets/b87fa9a7-77b4-478f-83b3-116e03422832)

### **Quiz Question**  
![image](https://github.com/user-attachments/assets/cb9c1116-8134-4328-a57b-d3ac58d0066b)

### **Quiz Result**  
![image](https://github.com/user-attachments/assets/3402cc6f-14a0-4b7c-8069-6623199a471a)


---
