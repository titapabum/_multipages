import { Outlet } from 'react-router';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import './Layout.css';
import Footer from '../Footer/Footer';

function Layout({ products, carts }) {
    return (
        <div className='layout-container'>
            <Header />
            <Navbar products={products} carts={carts} />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;
