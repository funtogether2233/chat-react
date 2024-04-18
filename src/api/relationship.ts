import {
  IAddFriendshipParam,
  IAddFriendshipRes,
  IAddGroupParam,
  IAddGroupRes,
  IGetFriendshipListParam,
  IGetFriendshipListRes,
  IGetGroupInfoParam,
  IGetGroupInfoRes,
  IGetGroupListParam,
  IGetGroupListRes,
  IGetUserInfoParam,
  IGetUserInfoRes,
  ISearchFriendshipListParam,
  ISearchFriendshipListRes,
  ISearchGroupListParam,
  ISearchGroupListRes,
  ISetUpNewGroupParam,
  ISetUpNewGroupRes,
  IUpdateGroupInfoParam,
  IUpdateGroupInfoRes,
  IUpdateUserInfoParam,
  IUpdateUserInfoRes
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

export const addFriendshipApi = (
  data: IAddFriendshipParam
): Promise<IAddFriendshipRes> => {
  return request
    .post<IAddFriendshipRes>('/friendship/add-friendship', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const addGroupApi = (data: IAddGroupParam): Promise<IAddGroupRes> => {
  return request
    .post<IAddGroupRes>('/group-member/add-group', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const setUpNewGroupApi = (
  data: ISetUpNewGroupParam
): Promise<ISetUpNewGroupRes> => {
  return request
    .post<ISetUpNewGroupRes>('/group/set-up-new-group', data)
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

export const getGroupInfoApi = (
  data: IGetGroupInfoParam
): Promise<IGetGroupInfoRes> => {
  return request
    .post<IGetGroupInfoRes>('/group/get-group-info', data)
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

export const updateGroupInfoApi = (
  data: IUpdateGroupInfoParam
): Promise<IUpdateGroupInfoRes> => {
  return request
    .post<IUpdateGroupInfoRes>('/group/update-group-info', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};
