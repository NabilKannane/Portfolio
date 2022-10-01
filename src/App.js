import './App.css';
import Navbar from './components/Navbar/Navbar';
import Section1 from './components/Sections/Section1/Section1';
import Section2 from './components/Sections/Section2/Section2';
import Section3 from './components/Sections/Section3/Section3';
import Section4 from './components/Sections/Section4/Section4';
import Section5 from './components/Sections/Section5/Section5';
import React , {useState ,useEffect} from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";
import Footer from "./components/Footer/Footer";

function App() {
  const [loading , setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])

  return (
    <>
    {
      loading ?
(<div className='loader'>
<ScaleLoader color={'#4a5cfc'} loading={loading} size={100} />
</div>) : 
  <>
    <Navbar/>
  <div className='container'>

      <Section1 />
      <Section2 />
      <Section3/>
      <Section4/>
      <Section5/>      
    </div>
    <Footer/>
    </>
    }

 
    
      
    
      
</>
  );
}

export default App;
