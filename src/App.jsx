import BckImage from './component/bckimage/bckimage';
import Card from './component/card/card';
import Footer from './component/footer/footer';
import Header from './component/header/header';
import HeroList from './component/herolist/herolist';
import QuestionList from './component/questionlist/questionlist';
import './index.css';

function App() {
  return (
    <div className='App'>
      <BckImage>
        <div className='gradient'>
          <Header />
          <Card />
        </div>
      </BckImage>
      <HeroList />
      <QuestionList />
      <Footer />
    </div>
  );
}

export default App;
