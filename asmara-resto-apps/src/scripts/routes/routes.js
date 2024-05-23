import NowResto from '../views/pages/home';
import Detail from '../views/pages/detail';

const routes = {
  '/': NowResto,
  '/home': NowResto,
  '/detail/:id': Detail,
};

export default routes;
