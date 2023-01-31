import Flex from '../flex/flex';
import Form from '../form/form';
import Question from '../question/question';
import Title from '../title/title';

const QuestionList = () => {
  return (
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
  );
};

export default QuestionList;
