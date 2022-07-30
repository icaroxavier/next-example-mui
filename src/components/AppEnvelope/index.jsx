import { AppEnvelopeWrapper } from './styles';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Link from 'next/link'
import { useRouter } from 'next/router';


export function AppEnvelope(props) {

  const { logout, user } = useContext(AuthContext)
  const router = useRouter()

  return (
    <AppEnvelopeWrapper>

    </AppEnvelopeWrapper>
  );
}


