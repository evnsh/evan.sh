import Container from 'components/Container';

export default function Server() {
  return (
    <Container
      title="evan.sh - Server"
      description="Here's what tech I'm currently using for coding and gaming."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          My Server
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          Mid 2022 I decided to transition from using pricey cloud services to self-hosting
          my own services at home. Here's a list of all services I'm hosting as well
          as the specs of my server.
        </p>
        <div className="prose dark:prose-dark w-full">
          <h3 id="specs">Specs</h3>
          <ul>
            <li>HP DL380p Gen 8 (8x LFF)</li>
            <li>1x E5-2680 v2 (10c/20t @ 3.6Ghz)</li>
            <li>64Gb of RAM (8x 8Gb DDR3-1600Mhz ECC)</li>
            <li>2x 460W Redundant PSU</li>
          </ul>
          <h3 id="services">Services</h3>
          <ul>
            <li>WIP</li>
          </ul>
        </div>
      </article>
    </Container>
  );
}