import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import AddEmployee from './component/AddEmployee';
import EmployeeUpdate from './component/EmployeeUpdate';
import SalarySheet from './component/SalarySheet';

function App() {
  

   const router = createBrowserRouter([
     {
       path: "/",
       element: <SalarySheet />,
       loader: () => fetch("http://localhost:5000/salary"),
     },
     {
       path: "/add-employee",
       element: <AddEmployee />,
     },
     {
       path: "/employee/:id",
       element: <EmployeeUpdate />,
       loader: ({params}) => fetch(`http://localhost:5000/employee/${params.id}`)
     },
   ]);
  return (
    <div className="px-5 ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
