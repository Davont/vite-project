import { Outlet, useNavigate } from 'react-router-dom';
import img from './publics/logo.jpg';
import './index.less';

export default function Page1() {
  const navigate = useNavigate();
  const login = () => {
    navigate('page2');
  };
  return (
    <div className='div1'>
      page1
      <img src={img} />
      <button onClick={login}> login</button>
      <Outlet />
    </div>
  );
}
