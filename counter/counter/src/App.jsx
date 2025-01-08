
import './App.css'
import Counter from'./components/counter';

function App() {
  return (
    <>
      <h1> counter App</h1>
      <div className='counter-row'>
      <Counter />
      <Counter />
      <Counter/>
      </div>
      
    </>
  );
}

export default App;
