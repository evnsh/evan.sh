import Link from 'next/link';

import NowPlaying from './NowPlaying';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <NowPlaying />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link href="/talk">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Let's Talk
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/evandotsh">
			GitHub
		  </ExternalLink>
          <ExternalLink href="https://discord.gg/M9pWVHb">
            Discord
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/setup">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Setup
            </a>
          </Link>
          <Link href="/server">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Server
            </a>
          </Link>
        </div>
      </div>
	  <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
	  <div>
      <a target="_blank" href="https://uptime.betterstack.com"><img style={{width: "130px", height: "52px"}} alt="Better Stack Website Monitoring" src="https://uptime.betterstack.com/assets/static_assets/badges/light.png" /></a>
    </div>
    </footer>
  );
}