import {Routes, Route} from 'react-router-dom'
import Filter from '../components/Filter';
import Logo from '../components/Logo';
import Layout from '../components/Layout';
import Home from '../components/Home';

const PrivateRoutes = () => {

    return ( 
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/logo" element={<Logo />} />
                    <Route path="/filter" element={<Filter />} />
                </Route>
            </Routes>
        </>
     );
}
 
export default PrivateRoutes;