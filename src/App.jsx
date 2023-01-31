import BckImage from './component/bckimage/bckimage';
import Card from './component/card/card';
import Footer from './component/footer/footer';
import Header from './component/header/header';
import HeroList from './component/herolist/herolist';
import QuestionList from './component/questionlist/questionlist';
import './index.css';
import * as S from './App.style';
import SignIn from './component/signin/signin';

function App() {
  return (
    <div className='App'>
      {/* <Menu></Menu> */}
      {/* <Router> */}
      <BckImage>
        <S.DivGradient>
          <Header />
          <Card />
        </S.DivGradient>
      </BckImage>
      <HeroList />
      <QuestionList />
      <Footer />
      {/* <Home /> */}
      {/* <SignIn /> */}
      {/* </Router> */}
    </div>
  );
}

export default App;
