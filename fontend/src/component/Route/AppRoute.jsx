import { Routes, Route } from 'react-dom'
import ShoppingPage from '../Content/ShoppingPage';


function AppRoute () {
    return (
        <Router>
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                {/* <Route path="/ShoppingPage" element={<ShoppingPage />} /> */}
            </Routes>
        </Router>
    );
}

export default AppRoute