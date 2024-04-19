import {
  IAddAdminParam,
  IAddAdminRes,
  IAddGroupMemberParam,
  IAddGroupMemberRes,
  IAddGroupParam,
  IAddGroupRes,
  IChangeOwnerParam,
  IChangeOwnerRes,
  IDeleteAdminParam,
  IDeleteAdminRes,
  IDisbandGroupParam,
  IDisbandGroupRes,
  IExitGroupParam,
  IExitGroupRes,
  IGetGroupInfoParam,
  IGetGroupInfoRes,
  IGetGroupListParam,
  IGetGroupListRes,
  IGetGroupMemberListParam,
  IGetGroupMemberListRes,
  ISearchGroupListParam,
  ISearchGroupListRes,
  ISetUpNewGroupParam,
  ISetUpNewGroupRes,
  IUpdateGroupInfoParam,
  IUpdateGroupInfoRes
} from '../../types/relationship';
import { request } from '../request';

export const getGroupListApi = (
  data: IGetGroupListParam
): Promise<IGetGroupListRes> => {
  return request
    .post<IGetGroupListRes>('/group-member/get-group-list', data)
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

export const getGroupInfoApi = (
  data: IGetGroupInfoParam
): Promise<IGetGroupInfoRes> => {
  return request
    .post<IGetGroupInfoRes>('/group/get-group-info', data)
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

export const disbandGroupApi = (
  data: IDisbandGroupParam
): Promise<IDisbandGroupRes> => {
  return request
    .post<IDisbandGroupRes>('/group/disband-group', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const getGroupMemberListApi = (
  data: IGetGroupMemberListParam
): Promise<IGetGroupMemberListRes> => {
  return request
    .post<IGetGroupMemberListRes>('/group-member/get-group-member-list', data)
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

export const addGroupApi = (data: IAddGroupParam): Promise<IAddGroupRes> => {
  return request
    .post<IAddGroupRes>('/group-member/add-group', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const addGroupMemberApi = (
  data: IAddGroupMemberParam
): Promise<IAddGroupMemberRes> => {
  return request
    .post<IAddGroupMemberRes>('/group-member/add-group-member', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const exitGroupApi = (data: IExitGroupParam): Promise<IExitGroupRes> => {
  return request
    .post<IExitGroupRes>('/group-member/exit-group', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const changeOwnerApi = (
  data: IChangeOwnerParam
): Promise<IChangeOwnerRes> => {
  return request
    .post<IChangeOwnerRes>('/group-member/change-owner', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const addAdminApi = (data: IAddAdminParam): Promise<IAddAdminRes> => {
  return request
    .post<IAddAdminRes>('/group-member/add-admin', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const deleteAdminApi = (
  data: IDeleteAdminParam
): Promise<IDeleteAdminRes> => {
  return request
    .post<IDeleteAdminRes>('/group-member/delete-admin', data)
    .catch((err) => {
      throw new Error(err.message);
    });
};
