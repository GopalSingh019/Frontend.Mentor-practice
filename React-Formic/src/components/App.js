import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Form1 from './Form1';

function App() {
    const router=createBrowserRouter([{path:"/",element:<Form1></Form1>},
{path:'/persDetail',element:<></>}])
  return (
    <div className="bg-blue-500 h-[100vh]">
        <RouterProvider router={router}/>
    </div>
  )
}

export default App