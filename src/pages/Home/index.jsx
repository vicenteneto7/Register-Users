import React, { useState, useRef } from 'react'

import axios from 'axios'

import Arrow from '../../assets/arrow.svg'
import People1 from '../../assets/logoHome.svg'
import {
  Container1,
  Image2,
  Container2,
  H1,
  Inputlabel,
  Input,
  Button,
  Image1
} from './styles'

const App = () => {
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()

  const addNewUser = async () => {
    const { data: newUser } = await axios.post('http://localhost:3001/users', {
      name: inputName.current.value,
      age: inputAge.current.value
    })

    console.log(newUser)

    setUsers([...users, newUser])
  }

  return (
    <Container1>
      <Image1 alt="logo-image-people" src={People1} />

      <Container2>
        <H1>Cadastre-se</H1>
        <Inputlabel>Nome</Inputlabel>
        <Input ref={inputName} placeholder="Nome"></Input>
        <Inputlabel>Idade</Inputlabel>
        <Input ref={inputAge} placeholder="Age"></Input>
        <Button onClick={addNewUser}>
          Cadastrar
          <Image2 alt="seta" src={Arrow} />
        </Button>
      </Container2>
    </Container1>
  )
}
export default App
