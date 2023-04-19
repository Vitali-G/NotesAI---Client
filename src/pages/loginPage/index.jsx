import React from 'react'
import { Login } from '../../modules'

export default function loginPage(user_id, setUser_id) {
    return (
      <>
        <Login user_id={user_id} setUser_id={setUser_id} />
    </>
  )
}