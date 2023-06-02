/* eslint-disable indent */

import { LoadingState } from '../../Models/common'
import { AuthActions, type AuthActionTypes } from './auth.action'
import { type AuthState } from './auth.model'
import {
  clone
} from 'lodash'

const InitialAuthState: AuthState = {
  token: '',
  userAttributes: {
    UserName: '',
    Name: '',
    Email: ''
  },
  isLoadingSignIn: LoadingState.Loading
}

const AuthReducer = (state: AuthState = InitialAuthState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case AuthActions.SIGNIN_REQUEST: {
      return { ...state, isLoadingSignIn: LoadingState.Loading }
    }
    case AuthActions.SIGNIN_SUCCESS: {
      const newState = clone(state)
      const { Token, UserName, Email, Name } = action.payload
      const userAttributes = newState.userAttributes
      userAttributes.UserName = UserName
      userAttributes.Email = Email
      userAttributes.Name = Name
      newState.userAttributes = userAttributes
      newState.isLoadingSignIn = LoadingState.Success
      newState.token = Token
      return newState
    }
    case AuthActions.SIGNIN_FAIL: {
      return { ...state, isLoadingSignIn: LoadingState.Failure }
    }
    default: {
      return state
    }
  }
}

export default AuthReducer
