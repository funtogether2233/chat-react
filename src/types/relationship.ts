export interface IFriendshipInfo {
  userId: string;
  userName: string;
}

export interface IGetFriendshipListParam {
  userId: string;
}

export interface IGetFriendshipListRes {
  friendshipList: IFriendshipInfo[];
}

export interface ISearchFriendshipListParam {
  userId: string;
}

export interface ISearchFriendshipListRes {
  friendshipList: IFriendshipInfo[];
}

export interface IGroupInfo {
  groupId: string;
  groupName: string;
}

export interface IGetGroupListParam {
  userId: string;
}

export interface IGetGroupListRes {
  groupList: IGroupInfo[];
}

export interface ISearchGroupListParam {
  groupId: string;
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
}

export interface IGetUserInfoParam {
  userId: string;
}

export interface IGetUserInfoRes extends IUserInfo {}

export interface IGroupInfo {
  groupId: string;
  groupName: string;
  groupIntroduction: string;
}

export interface IGetGroupInfoParam {
  groupId: string;
}

export interface IGetGroupInfoRes extends IGroupInfo {}

export interface IUpdateUserInfoParam extends IUserInfo {}

export interface IUpdateUserInfoRes {}

export interface IUpdateGroupInfoParam extends IGroupInfo {}

export interface IUpdateGroupInfoRes {}
