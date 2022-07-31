import { Button } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useAppDispatch } from "../../redux/hooks";
import { AuthScreenWrapper } from "./styles";

export default function AuthScreenComponent(props){

  const { signIn } = useContext(AuthContext)

  return (
    <AuthScreenWrapper>
      <h1>AuthScreen</h1>
      <Button variant='outlined' onClick={() => signIn({})}>Botão JavaScript</Button>
    </AuthScreenWrapper>
  )
}
