import React from 'react';
import { useAppSelector } from '../../hooks';
import { Card } from '../Card';
import { CardListContainer } from './CardsList.styles';

function CardsList() {
  const { listOfCards } = useAppSelector((state) => state.card);

  return (
    <CardListContainer>
      {listOfCards.length > 0 &&
        listOfCards.map((card, index) => (
          <Card key={`${card.name}-${index}`} card={card} />
        ))}
    </CardListContainer>
  );
}

export default CardsList;
