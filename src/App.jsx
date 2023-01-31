import BckImage from './component/bckimage/bckimage';
import Card from './component/card/card';
import Header from './component/header/header';
import HeroList from './component/herolist/herolist';
import QuestionList from './component/questionlist/questionlist';
import './index.css';

function App() {
  return (
    <div className='App'>
      <BckImage>
        <Header />
        <Card />
      </BckImage>
      <HeroList />
      <QuestionList />
    </div>
  );
}

export default App;
