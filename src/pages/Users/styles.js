import styled from 'styled-components'

import Background from '../../assets/background/noise.png'

export const Container1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  background: url('${Background}');
  background-size: cover;
`
export const Image1 = styled.img`
  margin-top: 3rem;
`
export const Image2 = styled.img`
  margin-left: 1.4rem;
`
export const Container2 = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border-radius: 6.1rem 6.1rem 0px 0px;
  padding: 4.5rem 3.5rem;
`
export const H1 = styled.h1`
  font-weight: bold;
  font-size: 3.4rem;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  line-height: 4rem;
  margin-bottom: 8rem;
`
export const Inputlabel = styled.p`
  font-weight: bold;
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 1);
  line-height: 2.2rem;
  font-style: normal;
  letter-spacing: -0.0408rem;
  margin-left: 2.4rem;
`
export const Input = styled.input`
  width: 34.2rem;
  height: 5.8rem;
  border-radius: 1.4rem;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border: none;
  outline: none;
  padding-left: 2.2rem;
  font-family: Roboto;
  font-size: 1.8rem;
  font-weight: normal;
  font-style: normal;
  line-height: 2.8rem;
  color: #ffff;
  margin-bottom: 3.4rem;
  &::placeholder {
    color: rgba(255, 255, 255, 0.35);
  }
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34.2rem;
  height: 7.4rem;
  border-radius: 1.4rem;
  background: rgba(0, 0, 0, 0.4);
  font-size: 1.8rem;
  font-weight: normal;
  font-style: normal;
  line-height: 2.8rem;
  color: #ffff;
  border: 1px solid #fff1;
  outline: none;
  cursor: pointer;

  img {
    transform: rotateY(180deg);
    margin-right: 2rem;
  }

  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.7;
  }
`
export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 1.4rem;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  width: 34.2rem;
  height: 5.8rem;
  border: none;
  outline: none;
  margin-top: 1.8rem;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 1.8rem;
    color: #ffff;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`
