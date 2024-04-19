import {
  IGetFriendMessageParam,
  IGetFriendMessageRes,
  IGetGroupMessageParam,
  IGetGroupMessageRes
} from '../../types/chatMessage';
import { request } from '../request';

export const getFriendMessageApi = (
  data: IGetFriendMessageParam
): Promise<IGetFriendMessageRes> => {
  return request
    .post<IGetFriendMessageRes>('/user-message/get-user-message', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const getGroupMessageApi = (
  data: IGetGroupMessageParam
): Promise<IGetGroupMessageRes> => {
  return request
    .post<IGetGroupMessageRes>('/group-message/get-group-message', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};
