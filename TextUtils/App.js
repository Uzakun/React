import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
 
function App() {
  return (
    <>
    <Navbar title="TextUtils" />
    <div className="container my-3">
    <TextForm heading="Enter The Text Below"/>
    </div>
    </> 
  );
}

export default App;