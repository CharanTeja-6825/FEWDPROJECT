import { Link, Route, Routes } from 'react-router-dom'
import React from 'react';

const Navbar = () => {
    return (
      <div>
        <Link to="/">KDL</Link>
        <Link to="/lessons">Lessons</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Routes>
          <Route path="/" Component={home} />
          <Route path="/lessons" Component={Lessons} />
          <Route path="/quiz" Component={Quiz} />
          <Route path="/dashboard" Component={Dashboard} />
        </Routes>
      </div>
    );
}

export default Navbar;
