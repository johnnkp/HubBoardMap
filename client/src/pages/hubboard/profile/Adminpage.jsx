import {Button, Grid, Stack} from "@mui/material";
import {MainLayout} from "../../../components/Layout";

const Adminpage = () => {
  return (
    <MainLayout profilepage={true}>
      <Stack spacing={5} maxWidth="75vw">
        <h2>User List</h2>
        <select size="10">
          <option value="test1">test1</option>
          <option value="test2">test2</option>
          <option value="test3">test3</option>
          <option value="test4">test4</option>
          <option value="test5">test5</option>
          <option value="test6">test6</option>
          <option value="test7">test7</option>
          <option value="test8">test8</option>
          <option value="test9">test9</option>
          <option value="test10">test10</option>
          <option value="test11">test11</option>
        </select>
        <Grid container justifyContent="space-evenly">
          <Button variant="outlined">View user profile</Button>
          <Button variant="outlined">Reset user password</Button>
        </Grid>
      </Stack>
    </MainLayout>
  );
};

export default Adminpage;
