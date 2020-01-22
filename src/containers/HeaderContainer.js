import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { logout, getUser } from '../modules/auth'
import Header from '../components/Header'
const HeaderContainer = () => {
  const user = useSelector(state => state.user)
  return <Header user={user} logout={logout} />
}
export default HeaderContainer
