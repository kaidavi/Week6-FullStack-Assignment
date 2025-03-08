import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BugList from "./pages/BugList";
import BugForm from "./pages/BugForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BugList />} />
        <Route path="/new" element={<BugForm />} />
      </Routes>
    </Router>
  );
}

export default App;
