import React from 'react';
import { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
// import Help from './components/Help';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
const AppLayout = () =>{
    return(
        <div className='app'>
        {/* <Header /> */}
        <Outlet />
        {/* <Footer /> */}
        </div>
   );
};
const Help = lazy(() => import("./components/Help"));

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: (
                <>
                <Body />,
                <Footer />,
                </>
                ),
            },
            {
                path: '/about',
                element:(
                    <>
                      <Header />
                      <About />
                    </>
                  ),
            },
            {
                path: '/help',
                element:(
                    <>
                      <Header />
                      <Suspense fallback={<h1>Loading.......</h1>}>
                      <Help /></Suspense>
                    </>
                  ),
            },
            {
                path: '/restaurants/:resId',
                element: (
                    <>
                      <Header />
                      <RestaurantMenu />
                    </>
                  ),
                
            },
        ],
        errorElement: <Error />,
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
