import React from "react";
import {
  Box,
  Card,
  Checkbox,
  Stack,
  TextField,
  IconButton,
  CardContent,
} from "@mui/material";
import { useFormik } from "formik";
import PushPinIcon from "@mui/icons-material/PushPin";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const AddToDoItem = () => {
  const formik = useFormik({
    initialValues: {
      todoTitle: "",
      todoDeatils: "",
      isPin: false,
      contributor: [],
      isTodoList: true,
    },
    onSubmit: (values, action) => {
      alert(JSON.stringify(values, null, 2));
      action.resetForm();
    },
  });

  return (
    <Card
      component="form"
      onSubmit={formik.handleSubmit}
      variant="outlined"
      sx={{
        padding: 2,
        borderRadius: 5,
        borderColor: "hOrange.main",
        borderWidth: 2,
        // boxShadow: (theme) => `0px 0px 15px -5px ${theme.palette.hOrange.main}`,
      }}
    >
      <Stack>
        <Stack direction="row" display="flex" justifyContent="space-between">
          <TextField
            id="todoTitle"
            name="todoTitle"
            type="text"
            fullWidth
            variant="standard"
            color="hOrange"
            placeholder="Add new to-do goal!"
            onChange={formik.handleChange}
            value={formik.values.todoTitle}
          />
          <Checkbox
            color="hOrange"
            icon={<PushPinOutlinedIcon />}
            checkedIcon={<PushPinIcon />}
            id="isPin"
            name="isPin"
            onChange={formik.handleChange}
            value={formik.values.isPin}
            checked={formik.values.isPin}
          />
        </Stack>
        <TextField
          id="todoDeatils"
          name="todoDeatils"
          type="text"
          color="hOrange"
          placeholder="details..."
          multiline
          rows={3}
          onChange={formik.handleChange}
          value={formik.values.todoDeatils}
        />
        <Stack direction="row" display="flex" justifyContent="space-between">
          <Box>
            <IconButton color="hOrange">
              <PersonAddIcon />
            </IconButton>
            <Checkbox
              color="hOrange"
              id="isTodoList"
              name="isTodoList"
              onChange={formik.handleChange}
              value={formik.values.isTodoList}
              checked={formik.values.isTodoList}
            />
          </Box>
          <IconButton color="hOrange" type="submit">
            <AddCircleIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Card>
  );
};

export default AddToDoItem;
