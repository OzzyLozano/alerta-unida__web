import Logo from '@/components/icons/logo';
import { useAppearance } from '@/hooks/use-appearance';

const Navbar = () => {
  const theme = useAppearance()
  const changeTheme = () => {
    theme.updateAppearance(theme.appearance === 'light' ? 'dark' : 'light')
  }

  return (
    <header
      className="flex w-full items-center justify-between"
      style={{ height: '5rem', backgroundColor: '#1B71A0' }}
    >
      <a
        href="/"
        className="flex cursor-pointer items-center gap-4 px-4"
      >
        <div
          className="flex items-center justify-center"
          style={{
            backgroundColor: 'white',
            borderRadius: '50%',
            width: '4rem',
            height: '4rem',
          }}
        >
          <Logo />
        </div>
        <h2 className='font-semibold'>Alerta Unida</h2>
      </a>
      <nav className="flex items-center gap-4 px-4 hidden">
        <a href="#inicio">Inicio</a>
        <a href="#nosotros">Sobre Nosotros</a>
        <a href="#contacto">Contáctanos</a>
        <button onClick={changeTheme}>Change Theme</button>
      </nav>
      <div className="flex items-center gap-4 px-4 ">
        <div className="burger-button"></div>
        <button onClick={changeTheme}>Change Theme</button>
      </div>
    </header>
  );
};

export default Navbar;
