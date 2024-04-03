export interface ILoginParam {
  userId: string;
  userPwd: string;
}

export interface ILoginRes {
  userId: string;
  success: boolean;
}

export interface IRegisterParam {
  userId: string;
  userPwd: string;
}

export interface IRegisterRes {}
