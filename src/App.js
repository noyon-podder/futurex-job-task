import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import SalarySheet from './component/SalarySheet';

function App() {
   const router = createBrowserRouter([
    {
      path: "/",
      element: <SalarySheet/>,
      loader: () => fetch("http://localhost:5000/salary")
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
