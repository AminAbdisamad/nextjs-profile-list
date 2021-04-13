import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
const NotFound = () => {
  //! IMPLEMENT - Redirect to home page after three seconds
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      //   router.go(1) goes one tab forward
      // router.go(-1) goes one tab backward
      router.push('/');
    }, 3000);
  }, []);
  return (
    <div clasName="not-found">
      <h1>404 Not found</h1>
      <p>Page you're looking for cannot be found</p>
      <Link href="/">
        <a className="btn"> Return Home</a>
      </Link>
    </div>
  );
};

export default NotFound;
