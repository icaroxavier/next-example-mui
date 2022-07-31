import { Button } from "@mui/material";
import { AppEnvelope } from "../AppEnvelope";
import TabelaCompromissos from "../TabelaCompromissos";
import { DashboardScreenWrapper } from "./styles";

export default function DashboardScreenComponent(props){
  return(
    <AppEnvelope>
      <DashboardScreenWrapper>
        <TabelaCompromissos></TabelaCompromissos>
      </DashboardScreenWrapper>
    </AppEnvelope>
  )
}
