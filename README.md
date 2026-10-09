# Project Todo App

# Libraries / Packages
1. Redux/Redux Toolkit for global state management
2. MUI icons & components for UI
3. react-router-dom for routing 



Examen frågor:

1. State-hantering: Hur håller din app reda på vilka uppgifter som finns och om de är klara? Vad händer med gränssnittet när datan uppdateras?

## svar
Vår App håller koll på genom att använda Reacts egna state. I huvudkomponenten App.jsx har vi deklarerat state som är en array med object i och varje object representerar en todo. När jag lägger till, ändrar, markera som klar eller tar bort en uppgift uppdateras listan med Reacts setTodos som sen renderar om gränssnittet utifrån den nya datan. 

2. Oföränderlighet (Immutability): Varför får man inte ändra en befintlig array direkt med t.ex. .push() i React? Hur gör du istället när du lägger till eller tar bort en uppgift?

## svar
Med Reacts state ändrar man inte befintlig data utan man skapar en ny kopia med ändringarna. 
Varför man inte använder push() i React är för att den ändrar i den befintliga array/todos och React upptäcker inte någa ändringar och uppdaterar inte listan då, ingen om rendering. 
Jag använder spred istället för att skapa en nya array med den nya uppgiften sist. 
setTodos([...todos, {id: Date.now(), task: text, done: false}])
React spread, filter, map ändrar inte orginalet utan den ger tillbaka en nya array och därfor renderar React om gränssnittet.

# 2. Kodgranskning

function addTodo(todos, text) {
  todos.push(text);
  return todos;
}

## feedback
Den gamla funktionen använder todos.push(text) för att lägga till en ny todo. Detta ändrar den befintliga arrayen och returnerar samma arrayreferens samt att setTodos inte finns i functionens scoap. I React bör man i stället skapa en ny array med setTodos, eftersom React använder referenser för att upptäcka förändringar. 

Lösningen är att den nya funktionen tar emot setTodos som en parameter och uppdaterar state med spread-syntax. Funktionen använder även .trim() och stoppar körningen om texten är tom, så att tomma todos inte kan skapas. Efteråt töms textfältet med setText(""). 

 const addTodo = (todos, setTodos, text, setText) => {
    const updatedText = text.trim()
    if(updatedText === "") return
    setTodos([...todos, updatedText])
    setText("")
 }


3. Problemlösning & Reflektion
Hur gjorde du när du körde fast eller stötte på ett problem? Om du använde verktyg som AI, Google eller React-dokumentationen: ge ett konkret exempel på hur du tog hjälp för att förstå och lösa problemet själv

## svar
Jag söker på sökmotorer och kollar olika dokumentationer samt ibland AI för att kunna granska koden. Jag definerar buggen först genom att kolla i projektet om vi får errors och först försöker jag förstå vad buggen beror på. Om jag inte kommer på lösningen själv så söker jag online och förösker förstå varför denna bugg uppstår för att lära mig. Ibland har jag fått build error i netlify och när jag var ny på frontend var det lite svårt att läsa och förstå build errorn jag hade i netlify men ju mer ja kodade ju mer börjag förstå hur jag läser av problemet och fixar det. 



# Redux global state hantering

push i redux toolkit istället för spread?

I Redux Toolkits createSlice är push helt okej, och det är det som rekommenderas där. Det beror på att RTK använder Immer under huven. Du "muterar" bara en draft-kopia, och Immer skapar sedan ett nytt immutable state åt dig.

Inne i createSlice-reducers: state.todos.push(action.payload) fungerar bra. Spread (state.todos = [...state.todos, action.payload]) fungerar också, men det behövs inte.
I vanlig React-state (useState) eller i en handskriven Redux-reducer utan Immer: använd spread, eftersom där får du inte mutera direkt.
