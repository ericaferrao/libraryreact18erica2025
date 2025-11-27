import logo from './logo.svg';
import './App.css';
import { BooksProvider } from './BooksContext';
import Books from './components/Books';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <BooksProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/books" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;
