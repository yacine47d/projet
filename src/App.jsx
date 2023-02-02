
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { Button, Tab } from 'react-bootstrap';
import reactLogo from './assets/react.svg'
import Nava from './nava';



function App() {
  const [count, setCount] = useState(0)

const video=[{
  src: `https://www.youtube.com/embed/ufPCITfUQnQ?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
  title: `CSS-in-JS — Max Stoiber`,
},
{
  src: `https://www.youtube.com/embed/v1JAUiqskiw?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
  title: `Modern Forms in React — Erik Rasmussen`,
},
{
  src: `https://www.youtube.com/embed/N0wHweOu-LQ?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
  title: `Engineering led design — Lauren Argenta`,
},
{
  src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
  title: `Rethinking Design Practices — Mark Dalgleish`,
},
{
  src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
  title: `Rethinking Design Practices — Mark Dalgleish`,
},
{
  src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
  title: `Rethinking Design Practices — Mark Dalgleish`,
},
{
  src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
  title: `Rethinking Design Practices — Mark Dalgleish`,
},
{
  src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
  title: `Rethinking Design Practices — Mark Dalgleish`,
},
];
  return (
    
    <div className="container" style={{width:"1000%",height:"100vh",border:"2px solid black" }}>
      <Nava/>
      

      
      <div className='row'>

    
      {

        video.map(e=>(
          <div className='col-3' >
            <iframe src={e.src}></iframe>
        <h5>
      {e.title}
        </h5>

          </div>
        ))
      }
        </div>
    </div>

  )
  }
export default App

