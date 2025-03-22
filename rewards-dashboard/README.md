# Appversal Assignment Reference Document

### Objective: 
The purpose of this assignment is to create a comprehensive rewards management dashboard application. The goals are to demonstrate proficiency in building a complex React application with advanced state management using Redux Toolkit, responsive UI design, and adherence to modern React best practices. The expected learning outcomes include a strong understanding of Redux Toolkit architecture, component design, API integration, and deployment strategies.

## Step-by-Step Instructions:

### Project Setup and Initialization:

1. `Choose a project initialization tool`: Use Create React App (CRA) or Vite. CRA is simpler for quick setup, while Vite offers faster build times and a more modern development experience. Install Node.js and npm (or yarn/pnpm) if you haven't already.
2. `Create the project`: Run npx create-react-app reward-dashboard (for CRA) or npm create vite@latest reward-dashboard --template react (for Vite). Replace "reward-dashboard" with your desired project name.
3. `Navigate to the project directory`: cd reward-dashboard
4. `Install dependencies`: npm install react-router-dom @reduxjs/toolkit react-redux styled-components formik yup json-server (or yarn add or pnpm add). This installs React Router for navigation, Redux Toolkit for state management, styled-components for styling, Formik and Yup for form validation, and json-server for a mock API.
5. `Set up Redux Toolkit store`: Create the src/app/store.js file and configure the Redux store with configureStore from Redux Toolkit.
6. `Configure routing`: Install react-router-dom and set up the main router in App.js, defining routes for different sections of the application (user management, activity management, rewards marketplace, admin dashboard).
7. `Set up mock API service`: Create a db.json file for json-server in the project root (or a separate server directory). Define the initial data structure for users, activities, and rewards. Run json-server --watch db.json --port 3001 (or another port) to start the mock API server.
8. `Create base styling and theme configuration`: Define a global style using styled-components (or your CSS-in-JS solution) to establish a consistent visual theme for the application, including colors, fonts, and spacing.
9. `Set up file structure` Follow project guidelines provided with components, folders, and proper naming conventions.

## Development Process:

### 1. User and Points Management:

  * `Implement users slice with Redux Toolkit`: Create src/features/users/usersSlice.js. Define the initial state, reducers (e.g., addUser, updateUser, deleteUser), and selectors (e.g., selectAllUsers, selectUserById). Use the createEntityAdapter for normalized state.
  * `Create user profile components`: Develop src/features/users/UserProfile.js to display user information, including points balance and transaction history. Fetch user data using useDispatch and useSelector hooks.
  * `Develop points transaction history feature`: Integrate with the activity logging system to display a historical record of point transactions for each user.
  * `Build leaderboard component`: Create src/features/users/Leaderboard.js to display a ranked list of users based on their points balance. Implement sorting and filtering functionality.
  * `Implement search functionality with debouncing`: Integrate a search input field that filters the user list based on user names or IDs. Use debouncing to prevent excessive API calls on each keystroke using lodash or custom implementation. Create async thunk for fetching data based on search query.
  
### 2. Activities System:

  * `Create activities slice and API service`: Create src/features/activities/activitiesSlice.js. Define the initial state, reducers (e.g., addActivity, updateActivity, deleteActivity), and selectors. Create an API service (src/services/api.js) with functions for fetching, creating, updating, and deleting activities.
  * `Develop activity logging components`: Create components for logging new activities with input fields for activity type, description, and points awarded.
  * `Implement activity feed with filtering`: Create src/features/activities/ActivityFeed.js to display a list of recent activities. Implement filtering by activity type, user, or date.
  * `Create activity completion verification logic`: Implement logic to verify that an activity has been properly completed before awarding points (e.g., checking for uploaded content, validated task completion).
  * `Connect activities to point rewards`: Ensure that when an activity is successfully completed and verified, the appropriate number of points is added to the user's account.

### 3. Rewards Marketplace:

  * `Implement rewards slice and API service`: Create src/features/rewards/rewardsSlice.js. Define the initial state, reducers (e.g., addReward, updateReward, deleteReward, redeemReward), and selectors. Create an API service with functions for fetching, creating, updating, and deleting rewards.
  *  `Build reward browsing UI`: Develop src/features/rewards/RewardsList.js to display a list of available rewards with images, descriptions, and point costs. Implement filtering and sorting functionality.
  * `Create reward detail view with redemption flow`: Create a detailed view for each reward with additional information and a redemption button. Handle the redemption process by deducting points from the user's account and creating a redemption record.
  * `Implement shopping cart functionality`: Allow users to add multiple rewards to a shopping cart before redeeming them all at once.
  * `Develop redemption history and status tracking`: Display a list of the user's redemption history, including the status of each redemption (e.g., pending, approved, shipped).

### 4. Admin Dashboard:

  * `Create admin-specific components and routes`: Create a route and components specifically for admin users, protected by role-based access control (if authentication is implemented).
* `Implement CRUD operations for all entities`: Provide forms and components for creating, reading, updating, and deleting users, activities, and rewards.
* `Build analytics dashboard`: Develop a dashboard with charts showing point distribution, redemption trends, and other relevant metrics. Use a charting library like Chart.js or Recharts.
* `Create point adjustment mechanism`: Implement a form for manually adjusting a user's point balance with a required reason for the adjustment. Log all point adjustments.
* `Implement campaign management tools`: Allow admins to create and modify reward campaigns, defining the rewards offered, the duration of the campaign, and any eligibility criteria.

### 5. Authentication (Optional):

* `Implement login/logout functionality`: Create login and logout components.
* `Create protected routes`: Use react-router-dom to protect admin routes, requiring authentication.
* `Add role-based access control`: Implement logic to restrict access to certain features based on the user's role (e.g., admin vs. regular user).
* `Connect user authentication with rewards system`: Make sure user points and activities are properly associated with authenticated users.

### 6. Refinement and Testing:

* `Ensure responsive design`: Use media queries or a responsive UI framework like Material UI or Chakra UI to ensure that the application works well on all screen sizes.
* `Optimize performance`: Implement memoization (using React.memo or useMemo) and virtualization (for long lists) to improve rendering performance.
* `Write unit tests`: Write unit tests for reducers and critical components using Jest and React Testing Library.
* `Implement comprehensive error handling`: Use error boundaries to catch and display errors gracefully.
* `Add final polish to UI elements`: Ensure that all UI elements are visually appealing and easy to use.

### Styling and Design:

1. Choose a Styling Approach: Select a CSS-in-JS library (like styled-components or Emotion) or CSS modules for component styling.
2. Design System: Develop a basic design system that includes color palettes, typography, spacing scales, and reusable component styles.
3. Component Styling: Style individual components with a focus on reusability and consistency. Use prop-based styling for dynamic adjustments.
4. Responsive Design: Use media queries to adapt the layout and styling for different screen sizes. Test on various devices.
5. Accessibility: Ensure the UI is accessible by using semantic HTML, providing proper ARIA attributes, and meeting WCAG guidelines.

### Deployment:

1. Choose a hosting platform: Options include Netlify, Vercel, GitHub Pages, or AWS Amplify.
2. Build the project for production: Run npm run build (or yarn build or pnpm build). This will create an optimized build of your application in the build directory.
3. Deploy the build directory: Follow the deployment instructions for your chosen hosting platform.
4. Configure environment variables: If your application requires environment variables (e.g., API keys), configure them on the hosting platform.
5. Set up continuous deployment: Configure your hosting platform to automatically deploy updates whenever you push changes to your GitHub repository.

### Submission Guidelines:

1. Create a GitHub repository: Create a public GitHub repository for your solution.
2. Include a README: Include a detailed README file with the following information:
3. Setup instructions: How to install dependencies and run the application.
4. Features implemented: A list of the features that you have implemented.
5. Technologies used: A list of the technologies used in the project.
6. Any assumptions or design decisions made: Explain any assumptions you made or design decisions you took during the development process.
7. Provide a demo URL: Deploy your application to a publicly accessible URL (e.g., using Netlify, Vercel, or GitHub Pages) and include the URL in the README file.
8. Submit the repository URL: Submit the URL of your GitHub repository to the assignment submission portal.