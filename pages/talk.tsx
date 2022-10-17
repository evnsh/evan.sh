import Container from 'components/Container';

export default function Talk() {
  return (
    <Container
      title="Setup – evan.sh"
      description="Have an inquiry, or want to connect? Feel free to leave a message here"
    >
    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        Let's talk
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Have an inquiry, or want to connect? Feel free to leave a message below,
        or get in touch via Discord, Twitter, or email.
      </p>
      <a
        className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white"
        href="mailto:me@evan.sh">
        me@evan.sh
      </a>
    </div>
    </Container>
  );
}