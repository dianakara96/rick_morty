
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import Character from "./components/Character";

const App = () => {
    return (
      <Router>
        <Routes>
        <Route path='/' element={<CharacterList />}/>
        <Route path='/characters/:CharacterId' element={<Character />}/>


        </Routes>
      </Router>
      
    )
  }
  
  export default App



//   import React from 'react';
// import CharacterList from './components/CharacterList';

// function App() {
//   return (
//     <div className="App">
//       <CharacterList />
//     </div>
//   );
// }

// export default App;