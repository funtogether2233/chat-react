import dayjs from 'dayjs';

export const getFormatMessageTime = (time: number) => {
  return dayjs(time).format('YYYY-M-D H:m:s');
};
