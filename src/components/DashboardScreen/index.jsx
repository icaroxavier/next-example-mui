import { Button } from "@mui/material";
import { AppEnvelope } from "../AppEnvelope";
import { DashboardScreenWrapper } from "./styles";

export default function DashboardScreenComponent(props){
  return(
    <AppEnvelope>
      <DashboardScreenWrapper>
        <Button>oie</Button>
      </DashboardScreenWrapper>
    </AppEnvelope>
  )
}
