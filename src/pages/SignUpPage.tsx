import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import { BROWSE_PAGE_ROUTE, SIGN_IN_PAGE_ROUTE } from '../constants/routes';
import FooterContainer from '../containers/Footer';
import HeaderContainer from '../containers/Header';
import useFirebaseContext from '../context/hooks/useFirebaseContext';

export default function SignUp() {
  const { firebase } = useFirebaseContext();
  const history = useHistory();
  const [firstName, setFirstName] = useState<string>('');
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const isInvalid: boolean =
    firstName === '' || emailAddress === '' || password === '';

  const handleSignUp = async (event: React.FormEvent<any>) => {
    event.preventDefault();
    try {
      const result = await firebase
        .auth()
        .createUserWithEmailAndPassword(emailAddress, password);
      await result.user?.updateProfile({
        displayName: firstName,
        photoURL: `${Math.floor(Math.random() * 5) + 1}`,
      });
      history.push(BROWSE_PAGE_ROUTE);
    } catch (err) {
      setEmailAddress('');
      setPassword('');
      setError(err.message);
    }
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp}>
            <Form.Input
              placeholder='First Name'
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder='Email address'
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              placeholder='Password'
              value={password}
              type='password'
              autoComplete='off'
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type='submit'>
              Sign Up
            </Form.Submit>
            <Form.Text>
              Already a user?{' '}
              <Form.Link to={SIGN_IN_PAGE_ROUTE}>Sign in now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google rCAPTCHA to ensure you're not a
              bot. Learn more.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
