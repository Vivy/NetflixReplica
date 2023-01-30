import './App.css';
import BckImage from './component/bckimage/bckimage';
import Card from './component/card/card';
import Flex from './component/flex/flex';
import Form from './component/form/form';
import Header from './component/header/header';
import Hero from './component/hero/hero';
import Question from './component/question/question';
import Title from './component/title/title';
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
      <Flex direction='column' align='center' gap='20px' color='black'>
        <Title>Frequently Asked Questions</Title>
        <Question text='lorem'> intrebarea 1</Question>
        <Question text='abracadabra'> intrebarea 1</Question>
        <Question text='abracadabra'> intrebarea 1</Question>
        <Question text='abracadabra'> intrebarea 1</Question>
        <Question text='abracadabra'> intrebarea 1</Question>
        <Question text='abracadabra'> intrebarea 1</Question>
        <Question text='abracadabra'> intrebarea 1</Question>
        <Question text='abracadabra'> intrebarea 1</Question>
        <Form></Form>
      </Flex>
    </div>
  );
}

export default App;
