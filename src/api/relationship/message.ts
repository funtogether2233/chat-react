import {
  IGetFriendMessageParam,
  IGetFriendMessageRes
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
