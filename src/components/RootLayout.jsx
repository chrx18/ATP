import { Outlet } from 'react-router-dom';
import Header from './Header';

function RootLayout() {
    return (
        <div>
            <Header />
            <Outlet />

            <footer className="bg-warning text-center py-3 mt-4">
                <p className="mb-0">ATP CHRISTIAN CRISTEA</p>
            </footer>
        </div>
    );
}

export default RootLayout;