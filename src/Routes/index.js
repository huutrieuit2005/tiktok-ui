import Profile from '~/pages/Profile';

const { default: Following } = require('../pages/Following');
const { default: Home } = require('../pages/Home');

const publicRoutes = [
  { path: '/', element: Home },
  { path: '/following', element: Following },
  { path: '/profile', element: Profile },
];

const pivateRoutes = [];

export { publicRoutes, pivateRoutes };
