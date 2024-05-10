export const openUrl = (url: string) => {
  window.open(url);
};

export const openNewDoc = ({
  docId,
  userId
}: {
  docId: string;
  userId: string;
}) => {
  const BASE_URL = 'http://localhost:5173/#/collaDoc';
  openUrl(`${BASE_URL}?docId=${docId}&userId=${userId}`);
};
