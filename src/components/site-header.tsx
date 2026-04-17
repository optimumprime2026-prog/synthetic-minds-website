import Image from 'next/image';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav">
        <a className="brand" href="/">
          <Image src="/logo.png" alt="MM Workshop" width={120} height={40} priority />
        </a>
        <nav>
          <a href="#services">Services</a>
          <a href="#how">How it works</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="button button-primary" href="#contact">
          Get started
        </a>
      </div>
    </header>
  );
}
