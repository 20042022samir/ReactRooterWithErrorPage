import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Products from "./Pages/Products";
import RootLayout from "./Pages/Root";
import Error from "./Pages/Error";
import ProductDetailPage from "./Pages/ProductDetail.";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement:<Error/>,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/products/:productId',
        element: <ProductDetailPage />
      }
    ]
  }
]);


function App() {
  return <RouterProvider
    router={router}
  />
}

export default App;
