import Flex from '../flex/flex';
import Form from '../form/form';
import Question from '../question/question';
import Title from '../title/title';

const questionList = [
  {
    text: [
      'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
      "You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    ],

    question: 'What is Netflix',
  },
  {
    text: [
      'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR7.99 to EUR11.99 a month. No extra costs, no contracts.',
    ],
    question: 'How much does Netflix cost?',
  },
  {
    text: [
      'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.',
      "You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    ],
    question: 'Where can I watch?',
  },
  {
    text: [
      'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
    ],
    question: 'How do I cancel?',
  },
  {
    text: [
      'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
    ],
    question: 'What can I watch on Netflix?',
  },
  {
    text: [
      'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.',
      'Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.',
    ],
    question: 'Is Netflix good for kids?',
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
      padding='24px 0'
    >
      <Title>Frequently Asked Questions</Title>
      {questionList.map(({ text, question }, k) => (
        <Question key={k} text={text}>
          {question}
        </Question>
      ))}
      <Form></Form>
    </Flex>
  );
};

export default QuestionList;
