export interface IFriendshipInfo extends IUserInfo {
  isFriendship?: boolean;
  isInGroup?: boolean;
}

export interface IGetFriendshipListParam {
  userId: string;
}

export interface IGetFriendshipListRes {
  friendshipList: IFriendshipInfo[];
}

export interface ISearchFriendshipListParam {
  userId: string;
  friendId?: string;
  groupId?: string;
}

export interface ISearchFriendshipListRes {
  friendshipList: IFriendshipInfo[];
}

export interface IGroupInfo {
  groupId: string;
  groupName: string;
  groupIntroduction: string;
  avatarImg: string;
  isInGroup?: boolean;
}

export interface IGetGroupListParam {
  userId: string;
}

export interface IGetGroupListRes {
  groupList: IGroupInfo[];
}

export interface ISearchGroupListParam {
  groupId: string;
  userId: string;
}

export interface ISearchGroupListRes {
  groupList: IGroupInfo[];
}

export interface IAddFriendshipParam {
  userId: string;
  friendId: string;
}

export interface IAddFriendshipRes {}

export interface IAddGroupParam {
  userId: string;
  groupId: string;
}

export interface IAddGroupRes {}

export interface ISetUpNewGroupParam {
  userId: string;
  groupId: string;
  groupName: string;
}

export interface ISetUpNewGroupRes {}

export interface IUserInfo {
  userId: string;
  userName: string;
  userIntroduction: string;
  avatarImg: string;
  userStatus?: userStatusEnum;
  isMute?: number;
}

export interface IGetUserInfoParam {
  userId: string;
}

export interface IGetUserInfoRes extends IUserInfo {}

export interface IGetGroupInfoParam {
  groupId: string;
}

export interface IGetGroupInfoRes extends IGroupInfo {}

export interface IUpdateUserInfoParam extends IUserInfo {}

export interface IUpdateUserInfoRes {}

export interface IUpdateGroupInfoParam extends IGroupInfo {}

export interface IUpdateGroupInfoRes {}

export interface IGetGroupMemberListParam {
  groupId: string;
}

export interface IGetGroupMemberListRes {
  groupMemberList: IUserInfo[];
}

export enum userStatusEnum {
  member = '0',
  owner = '1',
  admin = '2'
}

export interface IGetUserStatusParam {
  userId: string;
  groupId: string;
}

export interface IGetUserStatusRes {
  userStatus: userStatusEnum;
}

export interface IAddAdminParam {
  groupId: string;
  userId: string;
}

export interface IAddAdminRes {}

export interface IDeleteAdminParam {
  userId: string;
  groupId: string;
}

export interface IDeleteAdminRes {}

export interface IChangeOwnerParam {
  userId: string;
  memberId: string;
  groupId: string;
}

export interface IChangeOwnerRes {}

export interface IAddMuteParam {
  userId: string;
  groupId: string;
}

export interface IAddMuteRes {}

export interface IDeleteMuteParam {
  userId: string;
  groupId: string;
}

export interface IDeleteMuteRes {}

export interface IGetUserMuteParam {
  userId: string;
  groupId: string;
}

export interface IGetUserMuteRes {
  isMute: number;
}

export interface IExitGroupParam {
  userId: string;
  groupId: string;
}

export interface IExitGroupRes {}

export interface IDisbandGroupParam {
  userId: string;
  groupId: string;
}

export interface IDisbandGroupRes {}

export interface IAddGroupMemberParam {
  userId: string;
  groupId: string;
}

export interface IAddGroupMemberRes {}

export interface IDeleteFriendshipParam {
  userId: string;
  friendId: string;
}

export interface IDeleteFriendshipRes {}

export enum userMuteEnum {
  isMute = 1,
  isNotMute = 0
}
