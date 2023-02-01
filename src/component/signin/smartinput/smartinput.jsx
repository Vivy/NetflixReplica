import Flex from '../../flex/flex';
import Input from '../../input/input';
import Label from '../../label/label';
import * as S from './smartinput.style';

const SmartInput = ({ type = 'text', id, placeholder, height, width }) => {
  return (
    <Flex>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        height={height}
        width={width}
      />

      <Label htmlFor={id}></Label>
    </Flex>
  );
};

export default SmartInput;
