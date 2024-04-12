export interface IFriendshipInfo {
  friendId: string;
}

export interface IGetFriendshipListParam {
  userId: string;
}

export interface IGetFriendshipListRes {
  friendshipList: IFriendshipInfo[];
}

export interface IGroupInfo {
  groupId: string;
}

export interface IGetGroupListParam {
  userId: string;
}

export interface IGetGroupListRes {
  groupList: IGroupInfo[];
}
