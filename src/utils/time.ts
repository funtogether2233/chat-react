import dayjs from 'dayjs';

export const getFormatMessageTime = (time: string) => {
  return dayjs(time).format('YYYY-M-D H:m:s');
};
