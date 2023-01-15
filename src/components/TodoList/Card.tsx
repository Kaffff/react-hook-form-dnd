import { Button, CardHeader } from "@mui/material";
import Card from "@mui/material/Card";

export const TodoCard = () => {
  return (
    <Card sx={{ minWidth: 500 }}>
      <CardHeader
        title="名前"
        subheader="1月1日0:00 作成"
        action={
          <>
            <Button color="error">削除</Button>
            <Button>編集</Button>
          </>
        }
      />
    </Card>
  );
};
