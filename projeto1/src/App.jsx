import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Titulo from './Título';
function App(){
  return (
  <div> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Titulo cor = "red" />} />
      </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App;