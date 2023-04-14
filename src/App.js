import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import SalarySheet from './component/SalarySheet';
import AddEmployee from './component/AddEmployee';

function App() {
   const router = createBrowserRouter([
    {
      path: "/",
      element: <SalarySheet/>,
      loader: () => fetch("http://localhost:5000/salary")
    },
    {
      path: "/add-employee",
      element: <AddEmployee/>
    }
  ])
  return (
    <div className="px-5 ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
