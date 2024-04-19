import {
  IAddPostMessageParam,
  IAddPostMessageRes,
  IAddPostParam,
  IAddPostRes,
  IGetAllPostListParam,
  IGetAllPostListRes,
  IGetPostDetailParam,
  IGetPostDetailRes,
  IGetUserPostListParam,
  IGetUserPostListRes
} from '../types/post';
import { request } from './request';

export const getUserPostListApi = (
  data: IGetUserPostListParam
): Promise<IGetUserPostListRes> => {
  return request
    .post<IGetUserPostListRes>('/post/get-user-post-list', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const getAllPostListApi = (
  data: IGetAllPostListParam
): Promise<IGetAllPostListRes> => {
  return request
    .post<IGetAllPostListRes>('/post/get-all-post-list', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const getPostDetailApi = (
  data: IGetPostDetailParam
): Promise<IGetPostDetailRes> => {
  return request
    .post<IGetPostDetailRes>('/post/get-post-detail', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const addPostApi = (data: IAddPostParam): Promise<IAddPostRes> => {
  return request.post<IAddPostRes>('/post/create-post', data).catch((err) => {
    throw new Error(err.message);
  });
};

export const addPostMessageApi = (
  data: IAddPostMessageParam
): Promise<IAddPostMessageRes> => {
  return request
    .post<IAddPostMessageRes>('/post-message/create-post-message', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};
