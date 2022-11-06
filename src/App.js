import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import InputField from './components/InputFIeld';

function App() {
  return (
    <>
    <Navbar/>
    <div className='container my3'>
    <InputField/>
    </div>
    </>
  );
}

export default App;
