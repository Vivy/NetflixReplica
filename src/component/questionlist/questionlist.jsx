import Flex from '../flex/flex';
import Form from '../form/form';
import Question from '../question/question';
import Title from '../title/title';

const questionList = [
  {
    text: 'lorem',
    question: 'inrebarea1',
  },
  {
    text: 'lorem',
    question: 'inrebarea1',
  },
  {
    text: 'lorem',
    question: 'inrebarea1',
  },
  {
    text: 'lorem',
    question: 'inrebarea1',
  },
  {
    text: 'lorem',
    question: 'inrebarea1',
  },
  {
    text: 'lorem',
    question: 'inrebarea1',
  },
  {
    text: 'lorem',
    question: 'inrebarea1',
  },
];
const QuestionList = () => {
  return (
    <Flex direction='column' align='center' gap='20px' color='black'>
      <Title>Frequently Asked Questions</Title>
      {questionList.map((q, k) => (
        <Question key={k} text={q.text}>
          {q.question}
        </Question>
      ))}
      <Form></Form>
    </Flex>
  );
};

export default QuestionList;
