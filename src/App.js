import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { publicRoutes, pivateRoutes } from '~/Routes';
import { DefaultLayout } from '~/components/Layout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.Layout || DefaultLayout;
            const Page = route.element;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
