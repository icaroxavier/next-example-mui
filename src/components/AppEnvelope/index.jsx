import { AppEnvelopeWrapper } from './styles';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useRouter } from 'next/router';
import { Backdrop, CircularProgress } from '@mui/material';
import { useAppSelector } from '../../redux/hooks';


export function AppEnvelope(props) {

  const { logout, user } = useContext(AuthContext)
  const { loadingEnvelope } = useAppSelector(store => store.utils)
  const router = useRouter()

  return (
    <AppEnvelopeWrapper>

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


