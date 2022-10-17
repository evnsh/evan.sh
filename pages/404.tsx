import Container from 'components/Container';
import Link from 'next/link';

export default function NotFound() {
    return (
      <Container
        title="404 – evan.sh"
        description="404 - Page Not Found"
      >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            404 - Page Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            I'm guessing you spelled something wrong. Can you double check that URL?
          </p>
          <Link className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white" href="/">
            Return Home
          </Link>
      </div>
      </Container>
    );
  }