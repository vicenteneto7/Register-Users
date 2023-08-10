import React, { useState, useRef } from 'react'

import axios from 'axios'

import Arrow from '../../assets/arrow.svg'
import People1 from '../../assets/logoHome.svg'
import Trash from '../../assets/trash.svg'
import {
  Container1,
  Image2,
  Container2,
  H1,
  Inputlabel,
  Input,
  Button,
  Image1,
  User
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

  const deleteUser = (userId) => {
    const newUsers = users.filter((user) => user.id !== userId)
    setUsers(newUsers)
  }

  return (
    <Container1>
      <Image1 alt="logo-image-people" src={People1} />

      <Container2>
        <H1>Usuários</H1>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="trash" />
              </button>
            </User>
          ))}
        </ul>
        <Button onClick={addNewUser}>
          <Image2 alt="seta" src={Arrow} /> Voltar
        </Button>
      </Container2>
    </Container1>
  )
}
export default App
