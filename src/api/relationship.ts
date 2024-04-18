import {
  IAddFriendshipParam,
  IAddFriendshipRes,
  IAddGroupParam,
  IAddGroupRes,
  IGetFriendshipListParam,
  IGetFriendshipListRes,
  IGetGroupListParam,
  IGetGroupListRes,
  ISearchFriendshipListParam,
  ISearchFriendshipListRes,
  ISearchGroupListParam,
  ISearchGroupListRes
} from '../types/relationship';
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

export const searchFriendshipListApi = (
  data: ISearchFriendshipListParam
): Promise<ISearchFriendshipListRes> => {
  return request
    .post<ISearchFriendshipListRes>('/user/search-friend-list', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const searchGroupshipListApi = (
  data: ISearchGroupListParam
): Promise<ISearchGroupListRes> => {
  return request
    .post<ISearchGroupListRes>('/group/search-group-list', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const addFriendshipAPI = (
  data: IAddFriendshipParam
): Promise<IAddFriendshipRes> => {
  return request
    .post<IAddFriendshipRes>('/friendship/add-friendship', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const addGroupAPI = (data: IAddGroupParam): Promise<IAddGroupRes> => {
  return request
    .post<IAddGroupRes>('/group-member/add-group', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};
