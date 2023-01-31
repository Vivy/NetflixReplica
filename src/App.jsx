import BckImage from './component/bckimage/bckimage';
import Card from './component/card/card';
import Header from './component/header/header';
import Hero from './component/hero/hero';
import QuestionList from './component/questionlist/questionlist';
import './index.css';

function App() {
  return (
    <div className='App'>
      <BckImage>
        <Header />
        <Card />
      </BckImage>
      <Hero title='lorem10  '>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt,
        voluptates.
      </Hero>
      <Hero title='kasjhfosafoas' direction='row-reverse'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, quas
        sequi?
      </Hero>
      <Hero title='kasjhfosafoas'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, quas
        sequi?
      </Hero>
      <Hero title='kasjhfosafoas' direction='row-reverse'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, quas
        sequi?
      </Hero>
      <QuestionList />
    </div>
  );
}

export default App;
