import AllTodos from "./components/AllTodos"
import CountCounter from "./components/CountCounter"
import DebouncedInput from "./components/DebouncedInput"
import MousePosition from "./components/MousePosition"
import OnlineNotifier from "./components/OnlineNotifier"

function App() {
  return (
    <>
      <OnlineNotifier />
      <MousePosition />
      <CountCounter />
      <AllTodos />
      <DebouncedInput />
    </>
  )
}

export default App
