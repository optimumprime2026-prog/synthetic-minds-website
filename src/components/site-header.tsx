export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav">
        <a className="brand" href="/">
          Synthetic Minds
        </a>
        <nav>
          <a href="/solutions">Solutions</a>
          <a href="/industries">Industries</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
        <a className="button button-primary" href="/contact">
          Book a call
        </a>
      </div>
    </header>
  );
}
