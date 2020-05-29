import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="text-center">
      <div className="display-1">Oops!</div>
      <h1>Page Not Found!</h1>
      <Link href="/">
        <a className="btn btn-primary">Go Home?</a>
      </Link>
    </div>
  );
}
