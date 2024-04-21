import styled from 'styled-components';

interface ButtonProps {
  width: string;
  height: string;
}

const Button = styled.button<ButtonProps>`
  border-radius: 12px;
  font-size: ${(props) => props.theme.fontSizes.small};
  background-color: ${(props) => props.theme.colors.grey};
  border: none;
  cursor: pointer;
  padding: 8px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  &:hover {
    background-color: ${(props) => props.theme.colors.darkGrey};
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ButtonContainer = ({
  text,
  onClick,
  width,
  height,
}: {
  text: string;
  onClick: () => void;
  width: string;
  height: string;
}) => {
  return (
    <Button onClick={onClick} width={width} height={height}>
      {text}
    </Button>
  );
};

export default ButtonContainer;
