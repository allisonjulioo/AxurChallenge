const Logo = () => {
  return (
    <section>
      <img
        aria-label='Logotipo do app crawler'
        alt='logo_axur'
        height='14'
        src={require('assets/logo.png')}
      />
      <span>| Web Crawlers</span>
    </section>
  );
};
export { Logo };
