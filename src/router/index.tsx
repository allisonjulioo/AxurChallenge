import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatedRoute } from './animatedRoute';
import { routes } from './routes';

const Router = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      {routes.map(route => (
        <Route
          key={route.key}
          path={route.pathname}
          id={route.key}
          element={<AnimatedRoute {...route} />}
        />
      ))}
    </Routes>
  );
};

export { Router };
