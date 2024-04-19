import {
  IGetUserInfoParam,
  IGetUserInfoRes,
  IGetUserStatusParam,
  IGetUserStatusRes,
  ISearchFriendshipListParam,
  ISearchFriendshipListRes,
  IUpdateUserInfoParam,
  IUpdateUserInfoRes
} from '../../types/relationship';
import { request } from '../request';

export const searchFriendshipListApi = (
  data: ISearchFriendshipListParam
): Promise<ISearchFriendshipListRes> => {
  return request
    .post<ISearchFriendshipListRes>('/user/search-friend-list', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const getUserInfoApi = (
  data: IGetUserInfoParam
): Promise<IGetUserInfoRes> => {
  return request
    .post<IGetUserInfoRes>('/user/get-user-info', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const getUserStatusApi = (
  data: IGetUserStatusParam
): Promise<IGetUserStatusRes> => {
  return request
    .post<IGetUserStatusRes>('/group-member/get-user-status', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const updateUserInfoApi = (
  data: IUpdateUserInfoParam
): Promise<IUpdateUserInfoRes> => {
  return request
    .post<IUpdateUserInfoRes>('/user/update-user-info', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};
