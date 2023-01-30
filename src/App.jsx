import './App.css';
import BckImage from './component/bckimage/bckimage';
import Card from './component/card/card';
import Header from './component/header/header';
import Hero from './component/hero/hero';
import './index.css';

function App() {
  return (
    <div className='App'>
      <BckImage>
        <Header />
        <Card />
      </BckImage>
      <Hero />
    </div>
  );
}

export default App;
