import styled from 'styled-components';

export const CardImage = styled.img`
  height: 100px;
  width: 100px;
`;

export const CardContainer = styled.div.attrs(
  (props: { trunfo: boolean }) => props
)`
  display: flex;
  flex-flow: column nowrap;
  border: ${(props) => (props.trunfo ? '2px solid red' : '2px solid black')};
  width: 150px;
  height: 270px;
  justify-content: center;
  align-items: center;
  margin: 5px 3px;
  border-radius: 6px;
`;

export const CardTitle = styled.p`
  font-size: 24px;
  margin: 3px;
`;

export const CardElements = styled.p`
  margin: 3px 5px;
`;
