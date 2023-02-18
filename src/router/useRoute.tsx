import { useLocation } from 'react-router-dom';
import { routes } from './routes';

const useRoute = () => {
  const location = useLocation();

  if (!location.pathname) {
    return {
      state: {
        title: 'Not Found',
        label: 'Not Found',
      },
    };
  }

  const { state } = routes.find(route => route.pathname === location.pathname)!;

  return { state };
};

export { useRoute };
