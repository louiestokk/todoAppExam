# Project Todo App

# Librarier / Packages
1. Redux/Redux Toolkit for global state management
2. MUI icons & components for UI
3. react-router-dom for routing 


push i redux toolkit istället för spread?

I Redux Toolkits createSlice är push helt okej, och det är det som rekommenderas där. Det beror på att RTK använder Immer under huven. Du "muterar" bara en draft-kopia, och Immer skapar sedan ett nytt immutable state åt dig.

Inne i createSlice-reducers: state.todos.push(action.payload) fungerar bra. Spread (state.todos = [...state.todos, action.payload]) fungerar också, men det behövs inte.
I vanlig React-state (useState) eller i en handskriven Redux-reducer utan Immer: använd spread, eftersom där får du inte mutera direkt.