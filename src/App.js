import './App.css';
import { RouterProvider } from 'react-router-dom';
import { useContext } from 'react';
import router from './Routes/router';
import { ThemeContext } from './context/AuthProvider';

function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <div data-theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

