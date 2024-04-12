import {
  IGetFriendshipListParam,
  IGetFriendshipListRes,
  IGetGroupListParam,
  IGetGroupListRes
} from '../types/chatList';
import { request } from './request';

export const getFriendshipListApi = (
  data: IGetFriendshipListParam
): Promise<IGetFriendshipListRes> => {
  return request
    .post<IGetFriendshipListRes>('/friendship/get-friendship-list', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const getGroupListApi = (
  data: IGetGroupListParam
): Promise<IGetGroupListRes> => {
  return request
    .post<IGetGroupListRes>('/group-member/get-group-list', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};
