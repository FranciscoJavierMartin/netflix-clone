import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Form } from '../components';
import { BROWSE_PAGE_ROUTE, SIGN_UP_PAGE_ROUTE } from '../constants/routes';
import FooterContainer from '../containers/Footer';
import HeaderContainer from '../containers/Header';
import useFirebaseContext from '../context/hooks/useFirebaseContext';

export default function SignIn() {
  const { firebase } = useFirebaseContext();
  const history = useHistory();
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const isInvalid: boolean = emailAddress === '' || password === '';

  const handleSignIn = async (event: React.FormEvent<any>) => {
    event.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
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
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn}>
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
            <Form.Submit type='submit' disabled={isInvalid}>
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix?{' '}
            <Form.Link to={SIGN_UP_PAGE_ROUTE}>Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google rCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
