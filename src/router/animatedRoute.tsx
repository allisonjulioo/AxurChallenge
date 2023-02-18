import { Layout } from 'components/Layout';
import { motion } from 'framer-motion';
import { routes } from './routes';

const AnimatedRoute = (route: (typeof routes)[0]) => {
  const Component = () => <route.element />;

  return (
    <Layout>
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
