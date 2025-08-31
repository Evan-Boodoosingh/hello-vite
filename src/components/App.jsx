import Header from "./Header";
import Main from "./Main";
import Animal from "./Animal";
import './App.css'

function App() {
  return(
    <div className="page">
      <Header />
      <Main />
      <Animal selectedAnimal="dog" />
      <Animal selectedAnimal="cat" />
    </div>
  )
}

export default App