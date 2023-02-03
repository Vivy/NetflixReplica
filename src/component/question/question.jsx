import { useState } from 'react';
import Flex from '../flex/flex';
import * as S from './question.style';

const Question = ({ children, text }) => {
  const [details, setDetails] = useState(false);

  return (
    <S.Question>
      <Flex
        flex='flex'
        onClick={() => setDetails(!details)}
        justify='space-between'
        margin='0 20px'
      >
        <h1 style={{ color: 'white' }}>{children}</h1>
        {details ? (
          <i
            className='bi bi-x-lg'
            style={{ fontSize: '50px', color: 'white' }}
          />
        ) : (
          <i
            className='bi bi-plus-lg'
            style={{ fontSize: '50px', color: 'white' }}
          />
        )}
      </Flex>
      {details ? (
        <S.Answer>
          {text.map(({ texta, textb, k }) => {
            <div key={k}>
              <span>{texta}</span>
              <br />
              <br />
              <span>{textb}</span>
            </div>;
            {
              console.log(texta, 'asta este texta');
            }
          })}
          {/* {text} */}
        </S.Answer>
      ) : (
        ''
      )}
      {console.log(text, 'asta este text')}
    </S.Question>
  );
};

export default Question;
