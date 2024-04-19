import { IUserInfo } from './relationship';

export interface IMessageInfo {
  fromUserInfo: IUserInfo;
  toId: string;
  msg: string;
  createdTime: string;
}

export interface IGetFriendMessageParam {
  fromId: string;
  toId: string;
}

export interface IGetFriendMessageRes {
  userMessageList: IMessageInfo[];
}
