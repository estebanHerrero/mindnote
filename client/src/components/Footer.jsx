import Logo from './logo';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className="bg-[#F5F5F5] text-[#333333] font-sans h-80">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0 text-center">
            <Logo />
            <p className='font-normal text-xs mt-[-10px]'>Buenos Aires - Argentina</p>
            <p className='font-normal text-xs mt-[-2px]'>Derechos reservados | 2024</p>
          </div>
          <div className="flex flex-col md:flex-row space-x-8">
            <div>
              <h3 className="text-lg font-semibold font-sans pb-4">Enlaces rápidos</h3>
              <ul>
                <li className='pb-2'><Link to='/Institucional' className='font-light hover:text-[#16325B] hover:font-normal'>Perfil</Link></li>
                <li className='pb-2'><Link to='/Reclamos' className='font-light hover:text-[#16325B] hover:font-normal'>Cursos</Link></li>
                <li className='pb-2'><Link to='/Contacto' className='font-light hover:text-[#16325B] hover:font-normal'>Carreras</Link></li>
                <li className='pb-2'><Link to='/Contacto' className='font-light hover:text-[#16325B] hover:font-normal'>Posgrados</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;