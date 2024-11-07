import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './Login';
import Car from './Car';
import Hello from './Hello';
import ListCategory from './listCategory';
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/car",
        element: <Car />
    },
    {
        path: "/hello",
        element: <Hello />
    },
    {
        path: "/listcategory",
        element: <ListCategory />

    },

    {
        path: "*",
        element: <div>Không tìm thấy web theo yêu cầu</div>
    }
]);
