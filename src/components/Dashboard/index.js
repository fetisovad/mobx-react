import { Grid, Box, Paper, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import useStore from '../../hooks/useStore';

function Dashboard() {
  const { boards } = useStore();

  return (
    <Box p={2}>
      <DragDropContext onDragEnd={() => {}}>
        <Grid container>
          {boards.active?.sections((section) => {
            return (
              <Grid item key={section.id}>
                <Paper>
                  <Box p={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h5">{section?.title}</Typography>
                  </Box>
                  <Droppable droppableId={section.id}>
                    {(provided, snapshot) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                      >
                      <Column section={section}/>
                      {provided.placeholder}
                      </div>
                    )}}
                  </Droppable>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </DragDropContext>
    </Box>
  );
}

export default observer(Dashboard);
