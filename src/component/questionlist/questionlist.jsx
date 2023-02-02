import Flex from '../flex/flex';
import Form from '../form/form';
import Question from '../question/question';
import Title from '../title/title';

const questionList = [
  {
    text: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    question: 'What is Netflix',
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
    <Flex
      flex='flex'
      direction='column'
      align='center'
      gap='20px'
      color='black'
    >
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
