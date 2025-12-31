import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './features/products/productsAPI';
import { selectAllProducts } from './features/products/productsSlice';
import { RouterProvider } from 'react-router-dom';import router from './router/router';
;

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
      <RouterProvider router={router} />
  );
}

export default App;
