import { CommonButton } from './styles';

const Button = ({text, isBg, width}) => {

  return <CommonButton width={width} isBg={isBg}>{text}</CommonButton>;
};

export default Button
