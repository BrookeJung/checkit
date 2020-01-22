import React, { useCallback, useEffect } from 'react'
import Login from '../components/Login'
import { useDispatch } from 'react-redux'
import { googleLogin, facebookLogin, getUser } from '../modules/auth'

const LoginContainer = () => {
  const dispatch = useDispatch()
  const onGoogleLogin = useCallback(() => dispatch(googleLogin), [dispatch])
  const onFaceLogin = useCallback(() => dispatch(facebookLogin), [dispatch])
  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])
  return <Login onGoogleLogin={onGoogleLogin} onFaceLogin={onFaceLogin} />
}

export default React.memo(LoginContainer)
