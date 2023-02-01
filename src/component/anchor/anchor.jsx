import * as S from './anchor.style';

const Anchor = ({ href, title, children, color }) => {
  return (
    <S.Anchor href={href} color={color} title={title}>
      {children}
    </S.Anchor>
  );
};

export default Anchor;
