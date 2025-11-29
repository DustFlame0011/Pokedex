import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from './pages/home';
import DetailPage from './pages/detail';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/detail/:name",
      element: <DetailPage />
    }
  ]);

  return (
  <div className="bg-[url('/public/list_bg6.jpg')] min-h-screen">
    <RouterProvider router={router} />
  </div>
  )
}

export default App
