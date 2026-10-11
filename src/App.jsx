import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StudentProvider } from "./context/StudentContext";
import Navbar from "./components/Navbar";
import StudentList from "./pages/StudentList";
import FavouriteStudents from "./pages/FavouriteStudents";
import "./App.css";

function App() {
  return (
    // Wrap entire app in StudentProvider to provide global state
    <StudentProvider>
      <Router>
        <div className="app-container">
          {/* Navigation Bar */}
          <Navbar />

          {/* Main Page Routing */}
          <main className="content-container">
            <Routes>
              <Route path="/" element={<StudentList />} />
              <Route path="/favourites" element={<FavouriteStudents />} />
            </Routes>
          </main>
        </div>
      </Router>
    </StudentProvider>
  );
}

export default App;
