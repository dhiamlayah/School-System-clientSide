import Deposits from "../deposits";
import Chart from "../chart";
import Orders from "../orders";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { findChildProfile } from "../../../staticData/staticProfils";
import { useLocation } from "react-router-dom";


const SingleChild = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const child = searchParams.get('child');
    const childProfil =findChildProfile(child.toString())
    return (
        <>  
           <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 320,
                  }}
                >
                  <Chart tablechild={childProfil.schedule} />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 260,
                  }}
                >
                  <Deposits childData={childProfil.informations}/>
                </Paper>
              </Grid> 
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Orders absenceChild={childProfil.absences} />
                </Paper>
              </Grid> 

        </>
    );
}
 
export default SingleChild;