import { Button } from "@mui/material";
import { useAppDispatch } from "../../redux/hooks";
import { sendMessage, startRedirecting } from "../../redux/utils/actions";
import { AuthScreenWrapper } from "./styles";

export default function AuthScreenComponent(props){

  const dispatch = useAppDispatch()

  return (
    <AuthScreenWrapper>
      <h1>AuthScreen</h1>
      <Button variant='outlined' onClick={() => dispatch(startRedirecting('/'))}>Botão JavaScript</Button>
    </AuthScreenWrapper>
  )
}
