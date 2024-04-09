import { RecoilRoot } from 'recoil'
import './App.css'
import AddTodos from './components/AddTodos'
import AllTodos from './components/AllTodos'

function App() {

  return (
    <RecoilRoot>
      <>
        <AddTodos />
        <AllTodos />
      </>
    </RecoilRoot>
  )
}

export default App