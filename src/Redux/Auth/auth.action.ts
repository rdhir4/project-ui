import axiosInstance from '../../Axios/axios'
import { type ILoginResponse } from './auth.model'
import { type AxiosResponse } from 'axios'

export enum AuthActions {
  SET_AUTH = 'SET_AUTH',
  SIGNIN_REQUEST = 'SIGNIN_REQUEST',
  SIGNIN_SUCCESS = 'SIGNIN_SUCCESS',
  SIGNIN_FAIL = 'SIGNIN_FAIL'
}

export interface SignInRequest {
  type: typeof AuthActions.SIGNIN_REQUEST
}

export interface SignInSuccess {
  type: typeof AuthActions.SIGNIN_SUCCESS
  payload: ILoginResponse
}

export interface SignInFail {
  type: typeof AuthActions.SIGNIN_FAIL
}

export type AuthActionTypes = SignInRequest
| SignInSuccess
| SignInFail

export const signInRequest = (): AuthActionTypes => ({
  type: AuthActions.SIGNIN_REQUEST
})

export const signInSuccess = (payload: ILoginResponse): AuthActionTypes => ({
  type: AuthActions.SIGNIN_SUCCESS,
  payload
})

export const signInFail = (): AuthActionTypes => ({
  type: AuthActions.SIGNIN_FAIL
})

// api calls

export const signIn = (userInput: string, password: string) => async (dispatch: any) => {
  dispatch(signInRequest)
  axiosInstance.post('http://localhost:81/signIn', {
    UserInput: userInput,
    Password: password
  }).then((res: AxiosResponse<ILoginResponse>) => {
    dispatch(signInSuccess(res.data))
  })
    .catch(() => dispatch(signInFail))
}
