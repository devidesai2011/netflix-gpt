import Login from './Login'
import Browse from './Browse'
import PlayMovie from './PlayMovie'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
        {
            path: "/playMovie/:movieId",
            element: <PlayMovie />
        }
    ]);
    return (
        <RouterProvider router={appRouter} />
    )
}

export default Body