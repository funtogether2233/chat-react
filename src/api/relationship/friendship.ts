import {
  IAddFriendshipParam,
  IAddFriendshipRes,
  IAllowPostPermissionParam,
  IAllowPostPermissionRes,
  IBanPostPermissionParam,
  IBanPostPermissionRes,
  IDeleteFriendshipParam,
  IDeleteFriendshipRes,
  IGetFriendPostPermissionParam,
  IGetFriendPostPermissionRes,
  IGetFriendshipListParam,
  IGetFriendshipListRes,
  IGetUserPostPermissionParam,
  IGetUserPostPermissionRes
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

export const getUserPostPermissionApi = (
  data: IGetUserPostPermissionParam
): Promise<IGetUserPostPermissionRes> => {
  return request
    .post<IGetUserPostPermissionRes>(
      '/friendship/get-user-post-permission',
      data
    )
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const getFriendPostPermissionApi = (
  data: IGetFriendPostPermissionParam
): Promise<IGetFriendPostPermissionRes> => {
  return request
    .post<IGetFriendPostPermissionRes>(
      '/friendship/get-friend-post-permission',
      data
    )
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const allowPostPermissionApi = (
  data: IAllowPostPermissionParam
): Promise<IAllowPostPermissionRes> => {
  return request
    .post<IAllowPostPermissionRes>('/friendship/allow-post-permission', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const banPostPermissionApi = (
  data: IBanPostPermissionParam
): Promise<IBanPostPermissionRes> => {
  return request
    .post<IBanPostPermissionRes>('/friendship/ban-post-permission', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};
