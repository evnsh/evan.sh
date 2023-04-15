import Container from 'components/Container';
import { FaDiscord } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'

export default function Talk() {
  return (
    <Container
      title="Contact – evan.sh"
      description="Have an inquiry, or want to connect? Feel free to reach out via email or Discord"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Let's Connect
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Have a question or just want to say hi? Don't hesitate to reach out!
          You can send me an email or connect with me on Discord.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <a
            className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
            href="https://discord.com/users/399976828166602752"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
          >
            <FaDiscord size={24} />
          </a>
          <a
            className="p-2 bg-gray-200 hover:bg-gray-300 text-black rounded-full"
            href="mailto:me@evan.sh"
            aria-label="Email"
          >
            <HiOutlineMail size={24} />
          </a>
        </div>
      </div>
    </Container>
  );
}