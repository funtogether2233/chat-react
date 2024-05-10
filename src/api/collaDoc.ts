import {
  IAddCollaDocParam,
  IAddCollaDocRes,
  IDeleteCollaDocParam,
  IDeleteCollaDocRes,
  IGetCollaDocInfoParam,
  IGetCollaDocInfoRes,
  IGetCollaDocListParam,
  IGetCollaDocListRes,
  IUpdateCollaDocInfoParam,
  IUpdateCollaDocInfoRes
} from '../types/collaDoc';
import { request } from './request';

export const getCollaDocInfoApi = (
  data: IGetCollaDocInfoParam
): Promise<IGetCollaDocInfoRes> => {
  return request
    .post<IGetCollaDocInfoRes>('/colla-doc/get-doc-info', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const getCollaDocListApi = (
  data: IGetCollaDocListParam
): Promise<IGetCollaDocListRes> => {
  return request
    .post<IGetCollaDocListRes>('/colla-doc/get-doc-list', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const addCollaDocApi = (
  data: IAddCollaDocParam
): Promise<IAddCollaDocRes> => {
  return request
    .post<IAddCollaDocRes>('/colla-doc/add-doc', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const updateCollaDocInfoApi = (
  data: IUpdateCollaDocInfoParam
): Promise<IUpdateCollaDocInfoRes> => {
  return request
    .post<IUpdateCollaDocInfoRes>('/colla-doc/update-doc-info', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const deleteCollaDocApi = (
  data: IDeleteCollaDocParam
): Promise<IDeleteCollaDocRes> => {
  return request
    .post<IDeleteCollaDocRes>('/colla-doc/delete-doc', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};
