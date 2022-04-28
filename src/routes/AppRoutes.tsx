import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login, Game } from '../pages';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}

export default AppRoutes;
