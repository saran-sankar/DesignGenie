import logo from './logo.svg';
import './App.css';
import {
 NavBar,
 ActionCard,
} from './ui-components';

function App() {
  const htmlString = '<h1>Hello, World!</h1><p>This is a sample HTML string.</p>';
  return (
    <>
    <NavBar />
    <div class="grid-container">
    <div class="grid-item"><ActionCard /></div>
    <div class="grid-item"><ActionCard /></div>
    <div class="grid-item"><ActionCard /></div>
    <div class="grid-item"><ActionCard /></div>
    </div>
    </>
  );
}

export default App;
