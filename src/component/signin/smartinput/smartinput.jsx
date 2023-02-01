import Flex from '../../flex/flex';
import Input from '../../input/input';
import Label from '../../label/label';
import * as S from './smartinput.style';

const SmartInput = ({
  type = 'text',
  id,
  bgcolor,
  border,
  placeholder,
  height,
  width,
  textLabel,
  color,
}) => {
  return (
    <Flex>
      <Input
        bgcolor={bgcolor}
        border={border}
        type={type}
        id={id}
        placeholder={placeholder}
        height={height}
        width={width}
      />

      <Label htmlFor={id} color={color}>
        {textLabel}
      </Label>
    </Flex>
  );
};

export default SmartInput;
