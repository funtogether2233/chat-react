import { IGroupInfo } from './relationship';

export interface ICollaDocInfo {
  id: number;
  groupId: string;
  docName: string;
  docIntroduction: string;
}

export interface IDocItemInfo extends ICollaDocInfo {
  groupInfo: IGroupInfo;
}

export interface IGetCollaDocInfoParam {
  docId: string;
}

export interface IGetCollaDocInfoRes extends ICollaDocInfo {}

export interface IGetCollaDocListParam {
  userId: string;
}

export interface IGetCollaDocListRes {
  docList: IDocItemInfo[];
}

export interface IAddCollaDocParam {
  groupId: string;
}

export interface IAddCollaDocRes extends ICollaDocInfo {}

export interface IUpdateCollaDocInfoParam {
  docId: string;
  updateCollaDocDto: { docName: string; docIntroduction: string };
}

export interface IUpdateCollaDocInfoRes {}

export interface IDeleteCollaDocParam {
  docId: string;
}

export interface IDeleteCollaDocRes {
  docList: IDocItemInfo[];
}
