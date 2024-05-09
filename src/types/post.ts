import { IUserInfo } from './relationship';

export interface IPostItemInfo {
  id: number;
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
  id: number;
  postId: string;
  postUserId: string;
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

export interface IDeletePostParam {
  postId: string;
}

export interface IDeletePostRes {}

export interface IAddPostMessageParam {
  postId: string;
  userId: string;
  content: string;
}

export interface IAddPostMessageRes {}

export interface IDeletePostMessageParam {
  postMessageId: string;
}

export interface IDeletePostMessageRes {}
