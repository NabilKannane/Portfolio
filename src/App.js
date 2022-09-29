import './App.css';
import Navbar from './components/Navbar/Navbar';
import Section1 from './components/Sections/Section1/Section1';
import Section2 from './components/Sections/Section2/Section2';
import Section3 from './components/Sections/Section3/Section3';
import Section4 from './components/Sections/Section4/Section4';
import Section5 from './components/Sections/Section5/Section5';

function App() {
  return (
    <>
         <Navbar/>
    <div className='container'>

      <Section1 />
      <Section2 />
      <Section3/>
      <Section4/>
      <Section5/>      
    </div>
</>
  );
}

export default App;
