import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Root } from "./Pages/Root/Root";
import Homepage from "./Pages/Homepage/Homepage";
import Contact from "./Pages/Contact/Contact";

const router = createBrowserRouter ([
    {
        path: '/',
        element: <Root />,
        children:[
            { index: true, element: <Homepage /> },
            { path: '/contact', element: <Contact /> }
        ]
    }
])


function App() {
  return (
      <HelmetProvider>
            <RouterProvider router={router} />
     </HelmetProvider>
  );
}

export default App;
