import './App.css';

import PersonaList from './components/PersonaList';
import PersonaAdd from './components/PersonaAdd';

function App() {
  return (
    <div className="App">
      <h1>Cómputo en la nube</h1>

      <PersonaAdd />
      <PersonaList />

    </div>
  );
}

export default App;
