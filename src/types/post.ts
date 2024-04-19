import { IUserInfo } from './relationship';

export interface IPostItemInfo {
  userId: string;
  content: string;
  createdTime: string;
  userInfo: IUserInfo;
}

export interface IPostInfo {
  id: number;
  userId: string;
  content: string;
  createdTime: string;
  userInfo: IUserInfo;
}

export interface IPostMessageInfo {
  postId: string;
  userId: string;
  content: string;
  createdTime: string;
  userInfo: IUserInfo;
}

export interface IPostDetail {
  postInfo: IPostInfo;
  postMessageList: IPostMessageInfo[];
}

export interface IGetUserPostListParam {
  userId: string;
}

export interface IGetUserPostListRes {
  postList: IPostInfo[];
}

export interface IGetAllPostListParam {
  userId: string;
}

export interface IGetAllPostListRes {
  allPostList: IPostInfo[];
}

export interface IGetPostDetailParam {
  postId: string;
}

export interface IGetPostDetailRes {
  postDetail: IPostDetail;
}

export interface IAddPostParam {
  userId: string;
  content: string;
}

export interface IAddPostRes {
  postId: string;
}

export interface IAddPostMessageParam {
  postId: string;
  userId: string;
  content: string;
}

export interface IAddPostMessageRes {}
