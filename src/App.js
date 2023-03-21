import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Contact from "./Pages/Contact/Contact";
import Create from "./Pages/Create/Create";
import Edit from "./Pages/Edit/Edit";
import './index.css';



const router = createBrowserRouter([{
  path: "/",
  element: <HomePage />
}, {
  path: "/contact",
  element: <Contact />
}, {
  path: "/aboutMe",
  element: <Create />
}, {
  path: "/error",
  element: <Edit />
}
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
