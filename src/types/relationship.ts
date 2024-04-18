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
