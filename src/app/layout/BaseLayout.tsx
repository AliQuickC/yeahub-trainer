import './index.sass';
import { Header } from '../../widgets/header';
import { Footer } from '../../widgets/footer';
import { Outlet } from 'react-router-dom';

function BaseLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default BaseLayout;
