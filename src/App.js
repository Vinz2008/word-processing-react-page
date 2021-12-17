import './App.css';
import NavBar from './components/NavBar';
import Editable from './components/editable';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <h1>Test</h1>
        <Editable/>
      </header>
    </div>
  );
}

export default App;
