import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App.jsx';
import Booking from './page/Booking';


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <App />
<Router>
            <div>
                <Routes>
                    <Route path="/booking" element={<Booking />} />
                    {/* Add other routes here if needed */}
                </Routes>
            </div>
        </Router>
   
  </StrictMode>,
)
