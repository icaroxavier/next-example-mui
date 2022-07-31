import { AppEnvelopeWrapper } from './styles';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useRouter } from 'next/router';
import { Backdrop, Button, CircularProgress } from '@mui/material';
import { useAppSelector } from '../../redux/hooks';
import Image from 'next/image';


export function AppEnvelope(props) {

  const { logout, user } = useContext(AuthContext)
  const { loadingEnvelope } = useAppSelector(store => store.utils)
  const router = useRouter()

  return (
    <AppEnvelopeWrapper>
      <div className="app-envelope-top-bar">
        <Image src={'/images/logo.png'} width='80px' height='80px' alt='Logo image'></Image>
        <span className='message-span'>Olá, {user?.name ?? 'User'}</span>
        <Button className='logout-button' variant='outlined' color='error' onClick={logout}>Sair</Button>

      </div>
      <div className='app-envelope-content'>
        {props.children}
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, position: 'absolute' }}
          open={loadingEnvelope}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </AppEnvelopeWrapper>
  );
}


