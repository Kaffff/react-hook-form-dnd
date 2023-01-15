import { Box, Button, OutlinedInput } from "@mui/material";

export const TodoForm = () => {
  return (
    <Box display="flex" justifyContent="space-between" sx={{ minWidth: 500 }}>
      <OutlinedInput sx={{ minWidth: 400 }} />
      <Button variant="contained" sx={{ width: 90 }}>
        作成
      </Button>
    </Box>
  );
};
