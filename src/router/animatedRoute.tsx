import { Layout } from 'components/Layout';
import { motion } from 'framer-motion';
import { routes } from './routes';

type Route = (typeof routes)[0];

const AnimatedRoute = (route: Route) => {
  const Component = () => <route.element />;

  return (
    <Layout id={route.id}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3 }}
      >
        <Component />
      </motion.div>
    </Layout>
  );
};
export { AnimatedRoute };
