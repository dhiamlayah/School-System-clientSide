import Deposits from "../deposits";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { allChilds } from "../../../staticData/staticChilds";

const AllChilds = () => {
  // static data
  const getAllChilds = allChilds;

  console.log("all childs", getAllChilds);
  if (getAllChilds.length === 0)
    return <h1>you dont have children educate in this school</h1>;
  return (
    <>
      {getAllChilds.map((child) => {
        return (
          <Grid item xs={12} key={child.id} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 260,
              }}
            >
              <Deposits childData={child} />
            </Paper>
          </Grid>
        );
      })}
    </>
  );
};

export default AllChilds;
