import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Training } from './pages/Training';
import { Check } from './pages/Check';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Training />} />
        <Route path="/check" element={<Check />} />
      </Routes>
    </div>
  );
}

