import { userMuteEnum, userStatusEnum } from '../types/relationship';

export const isGroupOwner = (userStatus: userStatusEnum) => {
  if (userStatus === userStatusEnum.owner) {
    return true;
  }
  return false;
};

export const isGroupAdmin = (userStatus: userStatusEnum) => {
  if (userStatus === userStatusEnum.admin) {
    return true;
  }
  return false;
};

export const isGroupMember = (userStatus: userStatusEnum) => {
  if (userStatus === userStatusEnum.member) {
    return true;
  }
  return false;
};

export const isMuteMember = (isMute: number) => {
  return isMute === userMuteEnum.isMute;
};
