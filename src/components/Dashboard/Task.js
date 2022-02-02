import { CardContent, Typography } from '@mui/material';

function Task(task) {
  return (
    <CardContent>
      <Typography color="textPrimary" gutterBottom style={{ fontSize: 18 }}>
        {task?.title}
      </Typography>
      <Typography color="textPrimary" gutterBottom>
        {task?.description}
      </Typography>
    </CardContent>
  );
}

export default Task;
