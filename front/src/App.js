import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage } from './Pages/MainPage';
import { SelectScentPage } from './Pages/SelectScentPage';
import { SpatialAnalysisPage } from './Pages/SpatialAnalysisPage';
import { MoodAnalysisPage } from './Pages/MoodAnalysisPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={ <MainPage /> } />
        <Route exact path='/select' element={ <SelectScentPage /> } />
        <Route exact path='/spatial' element={ <SpatialAnalysisPage /> } />
        <Route exact path='/mood' element={ <MoodAnalysisPage /> } />
      </Routes>
    </Router>
  );
}

export default App;
