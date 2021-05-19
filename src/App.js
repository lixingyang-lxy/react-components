import './App.css';
import Suggest from './components/Suggest.jsx'
import Rating from './components/Rating.jsx'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Suggest</h2>
        <div><Suggest options={['eenie', 'meenie', 'miney', 'mo']} /></div>
        <h2>Rating</h2>
        <div>No initial value: <Rating /></div>
        <div>Initial value 4: <Rating defaultValue={4} /></div>
        <div>This one goes to 11: <Rating max={11} /></div>
        <div>Read-only: <Rating readonly={true} defaultValue={3} /></div>
      </header>
    </div>
  );
}

export default App;
