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
