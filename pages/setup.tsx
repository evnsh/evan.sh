import Container from 'components/Container';

export default function Setup() {
  return (
    <Container
      title="evan.sh - Setup"
      description="Here's what tech I'm currently using for coding and gaming."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          My Gear
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          Here's what tech I'm currently using for coding and gaming.
          Most of these have been accumulated over the past few years, with a
          recent home office upgrade in 2022.
        </p>
        <div className="prose dark:prose-dark w-full">
          <h3 id="computer-office">Computer / Office</h3>
          <ul>
            <li>14&quot; Macbook Pro (2021, Base Model)</li>
            <li>34&quot; Huawei MateView GT</li>
            <li>Logitech MX Master 3 Mouse</li>
            <li>Apple Magic Keyboard</li>
            <li>Ikea Desk, Chair and Plants</li>
          </ul>
          <h3 id="coding">Coding</h3>
          <ul>
            <li>
              Editor: VSCode (
              <a href="#">
                Extensions
              </a>
              )
            </li>
            <li>Theme: Rosé Pine</li>
            <li>Terminal: iTerm2 / zsh</li>
          </ul>
          <h3 id="gaming">Gaming</h3>
          <ul>
            <li>NZXT H510i (White)</li>
            <li>AMD Ryzen 5 5600 (6c/12t)</li>
            <li>AMD MPG B550 Gaming Plus</li>
            <li>AMD Radeon RX 6600</li>
          </ul>
          <h3 id="software">Software</h3>
          <ul>
            <li>1Password</li>
            <li>Apple Music</li>
            <li>Discord</li>
            <li>Slack</li>
            <li>Telegram</li>
            <li>Raycast</li>
            <li>Xcode</li>
          </ul>
          <h3 id="other-tech">Other Tech</h3>
          <ul>
            <li>Apple Airpods Pro (1st Gen)</li>
            <li>Apple Watch Series 7</li>
            <li>Apple iPhone 12</li>
            <li>Apple iPad Air (4th Gen)</li>
          </ul>
        </div>
      </article>
    </Container>
  );
}