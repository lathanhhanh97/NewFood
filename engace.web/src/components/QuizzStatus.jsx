// import PropTypes from "prop-types";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Stack,
  Typography,
} from "@mui/material";
import MyCustomQuizzChip from "../common/MyCustomQuizzChip";
import { useState } from "react";

export default function QuizzStatus({
  qaList,
  answer,
  setIndex,
  index: qIndex,
  submit,
  setSubmit,
}) {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSubmit = () => {
    setSubmit(true);
    setIndex(0);
    setOpenDialog(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "start", md: "center" },
        gap: 2,
      }}
    >
      <Typography variant="body1">Trạng thái làm bài</Typography>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
      >
        {qaList.map((item, index) => (
          <MyCustomQuizzChip
            key={index}
            index={index}
            variant="outlined"
            isDone={!!answer[index]}
            isActive={qIndex === index}
            setIndex={setIndex}
            submit={submit}
            result={answer[index] && +answer[index] === item.RightOptionIndex}
          />
        ))}
      </Stack>
      <Button
        variant="contained"
        sx={{ width: "100%" }}
        onClick={handleOpenDialog}
      >
        Nộp bài
      </Button>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <DialogContent
          sx={{
            paddingBottom: "0.5rem",
          }}
        >
          <a>Xác nhận nộp bài?</a>
        </DialogContent>
        <DialogActions>
          <Box
            display="flex"
            justifyContent="center"
            width="100%"
            size="large"
            sx={{
              margin: "0 1rem 0.5rem",
            }}
            gap={2}
          >
            <Button onClick={handleCloseDialog}>Hủy</Button>
            <Button onClick={handleSubmit} variant="contained" autoFocus>
              Nộp
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

QuizzStatus.propTypes = {
  qaList: PropTypes.array.isRequired,
  answer: PropTypes.array.isRequired,
  setIndex: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  submit: PropTypes.bool.isRequired,
  setSubmit: PropTypes.func.isRequired,
};
