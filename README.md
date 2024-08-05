# pullse-task-management

## This is the front-end part of the assessment for Pullse AI.

## How to Run 
1) Clone the project.
2) If you have not installed npm, please install it from https://www.npmjs.com/.
3) Open a command prompt in the directory of the project and run "npm i" to install all packages in the node_modules directory.
4) After installation, please run the command "npm start".
5) Please ensure you have run the API server as well.

## Pros
1) Created the entire User Interface for authentication of user and CRUD operations for the tasks.
2) Implemented Redux stores for state management.
3) Utilized cookies and JWT verification for security and sustenance of sessions. Only the authentication token is exposed on the front-end.
4) Designed an intelligible and organized file structure with minimalism.
5) Developed components with styles inline to the file, for simplicity and efficiency.
6) Used React Hooks for proper lifecycle management.

## Cons
1) Failed to create modular components in time, thus the <Task /> component became complex. Abstraction should be used to divide tasks such as addition or updation of tasks. Floating modals could be used for the same.
2) Used hardcoded string literals for API calls. Environment variables or config files should be used.
3) The website is not responsive. Material UI can be used to make it responsive.
4) The code is not type-safe. Models could be created to ensure type safety.
5) Services are inline with the views, they should be separated from the view for intelligiblity and efficiency. 
6) Paths used for imports could be simplified by mentioning the basePath in tsconfig.json.
7) No time to remove unnecessary packages from package.json.
