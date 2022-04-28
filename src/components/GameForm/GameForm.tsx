import React, { useEffect, useState } from 'react';
import { IGameFormObject } from './types';
import {
  MIN_NAME_LENGTH,
  MIN_ATTRIBUTE_VALUE,
  MAX_ATTRIBUTE_VALUE,
  MAX_ATTRIBUTE_TOTAL_VALUE,
} from './constants';
import { addCardToList } from '../../Redux/reducers';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { FormContainer, StyledForm, ElementContainer } from './GameForm.styled';
import { v4 as uuidv4 } from 'uuid';

function GameForm() {
  const dispatch = useAppDispatch();

  const { isLoading, hasTrunfo } = useAppSelector((state) => state.card);

  const [name, setName] = useState('');
  const [attribute1, setAttribute1] = useState('0');
  const [attribute2, setAttribute2] = useState('0');
  const [attribute3, setAttribute3] = useState('0');
  const [rarity, setRarity] = useState('normal');
  const [trunfo, setTrunfo] = useState(false);
  const [buttonStatus, setButtonStatus] = useState(true);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { name: eventName, value, checked },
  }) => {
    const gameFormObject: IGameFormObject = {
      name: () => setName(value),
      attribute1: () => setAttribute1(value),
      attribute2: () => setAttribute2(value),
      attribute3: () => setAttribute3(value),
      trunfo: () => setTrunfo(checked),
    };

    gameFormObject[eventName as keyof IGameFormObject]();
  };

  const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = ({
    target: { value },
  }) => {
    setRarity(value);
  };

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    const id = uuidv4();

    const cardInfo = {
      name,
      attribute1,
      attribute2,
      attribute3,
      rarity,
      trunfo,
      id,
    };

    dispatch(addCardToList(cardInfo));

    setName('');
    setAttribute1('0');
    setAttribute2('0');
    setAttribute3('0');
    setRarity('normal');
    setTrunfo(false);
  };

  const checkButtonAvailability = () => {
    if (name.length < MIN_NAME_LENGTH) return true;

    if (
      +attribute1 > MAX_ATTRIBUTE_VALUE ||
      +attribute2 > MAX_ATTRIBUTE_VALUE ||
      +attribute2 > MAX_ATTRIBUTE_VALUE
    )
      return true;

    if (
      +attribute1 < MIN_ATTRIBUTE_VALUE ||
      +attribute2 < MIN_ATTRIBUTE_VALUE ||
      +attribute3 < MIN_ATTRIBUTE_VALUE
    )
      return true;

    if (+attribute1 + +attribute2 + +attribute3 > MAX_ATTRIBUTE_TOTAL_VALUE)
      return true;

    return false;
  };

  useEffect(() => {
    const isButtonEnabled = checkButtonAvailability();

    setButtonStatus(isButtonEnabled);
  }, [name, attribute1, attribute2, attribute3]);

  return (
    <FormContainer>
      <StyledForm>
        <ElementContainer>
          <label htmlFor="name">
            Name:{' '}
            <input
              value={name}
              onChange={handleChange}
              id="name"
              name="name"
              type="text"
            />
          </label>
        </ElementContainer>

        <ElementContainer>
          <label htmlFor="attribute1">
            Attribute 01:{' '}
            <input
              value={attribute1}
              onChange={handleChange}
              id="attribute1"
              name="attribute1"
              type="number"
            />
          </label>
        </ElementContainer>

        <ElementContainer>
          <label htmlFor="attribute2">
            Attribute 02:{' '}
            <input
              value={attribute2}
              onChange={handleChange}
              id="attribute2"
              name="attribute2"
              type="number"
            />
          </label>
        </ElementContainer>

        <ElementContainer>
          <label htmlFor="attribute3">
            Attribute 03:{' '}
            <input
              value={attribute3}
              onChange={handleChange}
              id="attribute3"
              name="attribute3"
              type="number"
            />
          </label>
        </ElementContainer>

        <ElementContainer>
          <label htmlFor="rarity">
            Rarity:{' '}
            <select
              value={rarity}
              id="rarity"
              name="rarity"
              onChange={handleSelectChange}
            >
              <option value="normal">Normal</option>
              <option value="rare">Rare</option>
              <option value="superRare">Super Rare</option>
            </select>
          </label>
        </ElementContainer>

        {!hasTrunfo && (
          <ElementContainer>
            <label htmlFor="trunfo">
              Trunfo:{' '}
              <input
                checked={trunfo}
                onChange={handleChange}
                id="trunfo"
                name="trunfo"
                type="checkbox"
              />
            </label>
          </ElementContainer>
        )}

        {!isLoading && (
          <ElementContainer>
            <button
              disabled={buttonStatus}
              type="submit"
              onClick={handleSubmit}
            >
              Add Card
            </button>
          </ElementContainer>
        )}
      </StyledForm>
    </FormContainer>
  );
}
export default GameForm;
