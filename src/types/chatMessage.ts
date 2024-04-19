import { IUserInfo } from './relationship';

export interface IMessageInfo {
  fromUserInfo: IUserInfo;
  toId: string;
  msg: string;
  time: number;
}
