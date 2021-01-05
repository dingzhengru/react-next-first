import { useLayoutEffect } from 'react';
import { useRouter } from 'next/router';

function Error({ statusCode }) {
  console.log('Error - Error Component', statusCode);
  const router = useRouter();
  useLayoutEffect(() => {
    if (statusCode == 404) {
      router.push('/');
    }
  }, []);

  return <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>;
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
