import BckImage from '../bckimage/bckimage';
import Card from '../card/card';
import DivGradient from '../divgradient/divgradient';
import Footer from '../footer/footer';
import Header from '../header/header';
import HeroList from '../herolist/herolist';
import QuestionList from '../questionlist/questionlist';
import * as S from './home.style';

const Home = () => {
  return (
    <S.Home>
      <BckImage>
        <DivGradient>
          <Header />
          <Card />
        </DivGradient>
      </BckImage>
      <HeroList />
      <QuestionList />
      <Footer />
    </S.Home>
  );
};

export default Home;
