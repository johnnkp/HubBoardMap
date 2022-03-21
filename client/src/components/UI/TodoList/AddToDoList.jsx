import React from "react";
import { Card, Checkbox, Stack, TextField, IconButton } from "@mui/material";
import { useFormik } from "formik";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DoNotTouchIcon from "@mui/icons-material/DoNotTouch";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import PushPinIcon from "@mui/icons-material/PushPin";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

const AddToDoItem = () => {
  const formik = useFormik({
    initialValues: {
      todoTitle: "",
      pin: false,
      todoDeatils: "",
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
        paddingX: 4,
        paddingY: 2,
        boxShadow: (theme) => `0px 0px 15px -5px ${theme.palette.hOrange.main}`,
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
            id="pin"
            name="pin"
            onChange={formik.handleChange}
            value={formik.values.pin}
            checked={formik.values.pin}
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
        <Stack direction="row">
          <IconButton />
          <Checkbox color="hOrange" />
          <Checkbox color="hOrange" />
        </Stack>
      </Stack>
      <button type="submit">submit</button>
    </Card>
  );
};

export default AddToDoItem;
