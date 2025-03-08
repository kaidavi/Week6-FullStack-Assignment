import { useState, useEffect } from "react";
import axios from "axios";

const BugList = () => {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    axios.get("/api/bugs")
      .then((res) => setBugs(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Bug List</h2>
      <ul>
        {bugs.map((bug) => (
          <li key={bug._id}>{bug.title} - {bug.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default BugList;
