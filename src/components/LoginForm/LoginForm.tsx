import React, { useEffect, useState } from 'react';
import { IFormObject } from './types';
import { EMAIL_REGEX, MIN_NAME_LENGTH, MIN_PASSWORD_LENGTH } from './constants';
import { saveUser } from '../../Redux/reducers';
import { useAppDispatch } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import {
  FormContainer,
  StyledForm,
  ElementContainer,
} from './LoginForm.styles';

function LoginForm() {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonStatus, setButtonStatus] = useState(true);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { name: eventName, value },
  }) => {
    const loginFormObject = {
      name: () => setName(value),
      email: () => setEmail(value),
      password: () => setPassword(value),
    };

    loginFormObject[eventName as keyof IFormObject]();
  };

  const handleSubmitClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
    };

    dispatch(saveUser(user));

    navigate('/game');

    setName('');
    setEmail('');
    setPassword('');
  };

  const checkLoginButtonStatus = () => {
    if (name.length < MIN_NAME_LENGTH) return true;

    if (!EMAIL_REGEX.test(email)) return true;

    if (password.length < MIN_PASSWORD_LENGTH) return true;

    return false;
  };

  useEffect(() => {
    const isButtonActive = checkLoginButtonStatus();

    setButtonStatus(isButtonActive);
  }, [name, email, password]);

  return (
    <FormContainer>
      <StyledForm>
        <ElementContainer>
          <label>
            <div>Name:</div>
            <input
              name="name"
              type="text"
              value={name}
              onChange={handleChange}
            />
          </label>
        </ElementContainer>

        <ElementContainer>
          <label>
            <div>Email:</div>
            <input
              name="email"
              type="text"
              value={email}
              onChange={handleChange}
            />
          </label>
        </ElementContainer>

        <ElementContainer>
          <label>
            <div>Password:</div>
            <input
              name="password"
              type="text"
              value={password}
              onChange={handleChange}
            />
          </label>
        </ElementContainer>

        <ElementContainer>
          <button
            type="submit"
            disabled={buttonStatus}
            onClick={handleSubmitClick}
          >
            Login
          </button>
        </ElementContainer>
      </StyledForm>
    </FormContainer>
  );
}

export default LoginForm;
