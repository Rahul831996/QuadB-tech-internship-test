import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Summary from './components/Summary';
const App = () => {
  const [shows, setShows] = useState([]);
 
  useEffect(() => {
    fetchShows();
  }, []);

  // fetching api 

  const fetchShows = async () => {
    try {
      const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
      const data = await response.json();
      setShows(data);
    } catch (error) {
      console.error('Error fetching shows:', error);
    }
  };

  return (
    <Router>
        <Routes>
        <Route path='/'  element={<Home shows={shows}/>} />
        <Route path='/summary/:id'  element={<Summary shows={shows}/>} />
        </Routes>
    </Router>
  );
};

export default App
   