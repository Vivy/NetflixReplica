import Flex from '../../flex/flex';
import Input from '../../input/input';
import Label from '../../label/label';
import * as S from './smartinput.style';

const SmartInput = ({ type = 'text', id, placeholder }) => {
  return (
    <Flex>
      <Input type={type} id={id} placeholder={placeholder} />

      <Label htmlFor={id}></Label>
    </Flex>
  );
};

export default SmartInput;
