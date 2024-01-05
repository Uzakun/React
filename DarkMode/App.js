import './App.css';
import DarkMode from './Components/DarkMode';
import Navbar from './Components/Navbar';
// import TextForm from './Components/TextForm';
 
function App() {
  return (
    <>
    <Navbar title="TextUtils" />
    <div className="container my-3">
    {/* <TextForm heading="Enter The Text Below"/> */}
    <DarkMode/>
    </div>
    
    </> 
  );
}

export default App;