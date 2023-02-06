import * as S from './anchor.style';

const Anchor = ({ href, title, children, color, zIndex }) => {
  return (
    <S.Anchor href={href} color={color} title={title} zIndex={zIndex}>
      {children}
    </S.Anchor>
  );
};

export default Anchor;
