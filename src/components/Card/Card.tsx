import React from 'react';
import {
  CardImage,
  CardContainer,
  CardTitle,
  CardElements,
} from './Card.styles';
import { ICard } from './types';
import { useAppDispatch } from '../../hooks';
import { removeCard } from '../../Redux/reducers';

function Card({
  card: {
    name,
    cardImage,
    attribute1,
    attribute2,
    attribute3,
    rarity,
    trunfo,
    id,
  },
}: ICard) {
  const dispatch = useAppDispatch();

  const excludeCardFromList: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    dispatch(removeCard((e.target as HTMLButtonElement).name));
  };

  return (
    <div data-testid={name}>
      <CardContainer trunfo={trunfo}>
        <CardTitle>{name}</CardTitle>
        <CardImage src={cardImage} alt={name} />
        <CardElements>Attr 01: {attribute1}</CardElements>
        <CardElements>Attr 02: {attribute2}</CardElements>
        <CardElements>Attr 03: {attribute3}</CardElements>
        <CardElements>{rarity}</CardElements>

        <button name={id} onClick={excludeCardFromList}>
          X
        </button>
      </CardContainer>
    </div>
  );
}

export default Card;
