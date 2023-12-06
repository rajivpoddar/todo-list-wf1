# Todo List App Design

## Architecture
- The application will be built using ReactJS.
- It will be a single-page application (SPA).

## Component Structure
- App: The main container component.
- TodoInput: A component for the input field to add new tasks.
- TodoButton: A button component to submit new tasks.
- TodoList: A component to display the list of tasks.
- TodoItem: A component for each task in the list, including checkmark and delete buttons.

## State Management
- The application will use React's useState hook for managing the state of the todo items.
- The state will include an array of todo items, each with properties for the text and completion status.
- The useEffect hook will be used to handle side effects such as saving to and loading from local storage.

## Data Persistence
- The application will use the browser's local storage to persist the todo items between sessions.