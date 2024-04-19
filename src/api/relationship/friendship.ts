import {
  IAddFriendshipParam,
  IAddFriendshipRes,
  IDeleteFriendshipParam,
  IDeleteFriendshipRes,
  IGetFriendshipListParam,
  IGetFriendshipListRes
} from '../../types/relationship';
import { request } from '../request';

export const getFriendshipListApi = (
  data: IGetFriendshipListParam
): Promise<IGetFriendshipListRes> => {
  return request
    .post<IGetFriendshipListRes>('/friendship/get-friendship-list', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const addFriendshipApi = (
  data: IAddFriendshipParam
): Promise<IAddFriendshipRes> => {
  return request
    .post<IAddFriendshipRes>('/friendship/add-friendship', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const deleteFriendApi = (
  data: IDeleteFriendshipParam
): Promise<IDeleteFriendshipRes> => {
  return request
    .post<IDeleteFriendshipRes>('/friendship/delete-friendship', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};
