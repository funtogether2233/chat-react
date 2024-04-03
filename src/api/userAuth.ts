import {
  ILoginParam,
  ILoginRes,
  IRegisterParam,
  IRegisterRes
} from '../types/userAuth';
import { request } from './request';

export const loginApi = (data: ILoginParam): Promise<ILoginRes> => {
  return request.post<ILoginRes>('/user-auth/login', data).catch((err) => {
    throw new Error(err.message);
  });
};

export const registerApi = (data: IRegisterParam): Promise<IRegisterRes> => {
  return request
    .post<IRegisterRes>('/user-auth/register', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};
