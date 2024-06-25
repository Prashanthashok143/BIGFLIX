import React, { useEffect } from 'react';
import "../CSS/NoPage.css"
import { useLocation } from 'react-router-dom';

const NoPage = () => {
  const {pathname}=useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found ☹</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    </div>
    )
}

export default NoPage