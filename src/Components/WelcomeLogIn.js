import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { StoreContext } from '../contextAPI/Context.js';

import styled from 'styled-components';

import notebookIcon from '../Images/noteBookImage.png';
import girlMobilePhone from '../Images/girl-mobile.png';

import { axiosWithAuth } from '../Auth/axiosWithAuth.js';

export default function WelcomeLogIn(props) {
  const { userInfo, setUserInfo } = useContext(StoreContext);
  const [form, setForm] = useState({
    username: userInfo.username,
    password: userInfo.password
  });

  const handleChanges = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const onSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('auth/login', form)
      .then(res => {
        console.log(res.data);
        setUserInfo(res.data);
        setTimeout(() => props.history.push('/MyEntries'), 1000);
      })
      .catch(err => {
        if (err.response) {
          console.error('Error logging in: ', err.response.data);
        } else {
          console.error('Error logging in: ', err);
        }
      });
  };

  return (
    <DivContainerWrapper>
      <Header>
        <NoteBookLogo src={notebookIcon} alt="notebook-icon" className="logo" />
        <OneLineADayH1>ONE LINE A DAY</OneLineADayH1>
      </Header>
      <DivWrapper>
        <ImageOfGirl
          src={girlMobilePhone}
          alt="image of girl and large mobile phone"
          className="girlAndPhone"
        />
        <div>
          <H2WelcomeBack>Welcome back!</H2WelcomeBack>
          <form onSubmit={onSubmit}>
            <InputsWrapper
              className="inputsWelcomePage"
              type="username"
              name="username"
              placeholder="USERNAME"
              value={form.username}
              onChange={handleChanges}
            />
            <InputsWrapper
              className="inputsWelcomePage"
              type="password"
              name="password"
              placeholder="PASSWORD"
              value={form.password}
              onChange={handleChanges}
            />
            <DivButtonWrapper>
              <Button>SIGN IN</Button>
            </DivButtonWrapper>
          </form>
          <Paragraph>
            DON'T HAVE AN ACCOUNT?<NavLink to="/">SIGN UP</NavLink>
          </Paragraph>
        </div>
      </DivWrapper>
    </DivContainerWrapper>
  );
}

// styled components
const DivContainerWrapper = styled.div`
  width: 1440px;
  height: 1016px;
  background-color: #fef3f4;
`;

const Header = styled.header`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`;
const NoteBookLogo = styled.img`
  margin-top: 30px;
  margin-left: 3%;
  width: 83px;
  height: 115px;
`;
const OneLineADayH1 = styled.h1`
  font-size: 5rem;
  margin-left: 25%;
  color: rgb(234, 126, 76);
`;
const DivWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const ImageOfGirl = styled.img`
  max-width: 90%;
  height: auto;
  margin-left: 6%;
  margin-right: 5%;
`;
const H2WelcomeBack = styled.h2`
  width: 79%;
  margin-top: 165px;
  margin-left: 30px;
  margin-bottom: 90px;
  color: rgb(194, 170, 184);
  font-size: 2.7rem;
`;

const InputsWrapper = styled.input`
  font-size: 1.5rem;
  width: 400px;
  height: 60px;
  border-radius: 12px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: #ffffff;
  margin-bottom: 50px;
`;
const DivButtonWrapper = styled.div`
  border-bottom: 1px solid rgb(191, 187, 187);
  width: 400px;
`;

const Button = styled.button`
  width: 183px;
  height: 73px;
  border-radius: 12px;
  background-image: linear-gradient(to top, #f5b580, #e87e49 17%);
  color: white;
  font-size: 1.5rem;
  margin-left: 100px;
  margin-bottom: 30px;
`;

const Paragraph = styled.p`
  margin-left: 60px;
  margin-top: 40px;
  text-decoration: none;
`;
