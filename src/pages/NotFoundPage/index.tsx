import { useEffect } from 'react';

export default function NotFoundPage() {
  useEffect(() => {
    console.log('NotFoundPage');
  });

  return (
    <>
      <div>404</div>
      <div>NotFoundPage</div>
    </>
  );
}
