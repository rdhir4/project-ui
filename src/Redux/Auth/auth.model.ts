import { type LoadingState } from '../../Models/common'

export interface AuthState {
  token: string
  userAttributes: IUserAttributes
  isLoadingSignIn: LoadingState
}

export interface IUserAttributes {
  Name: string
  UserName: string
  Email: string
}

export interface ILoginResponse {
  Name: string
  UserName: string
  Email: string
  Token: string
}
