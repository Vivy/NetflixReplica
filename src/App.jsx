import './index.css';
import SignIn from './component/signin/signin';
import Home from './component/home/home';
import { Router } from '@reach/router';
import BckImage from './component/bckimage/bckimage';
import DivGradient from './component/divgradient/divgradient';

const App = () => {
  return (
    <DivGradient dataTestId='gradient-home' gradient>
      <Router>
        <Home path='/' />
        <SignIn path='signin' />
      </Router>
    </DivGradient>
  );
};

export default App;
