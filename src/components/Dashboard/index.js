import {Grid, Box, Paper, Typography} from '@material-ui/core';
import {observer} from 'mobx-react-lite';
import {Droppable} from 'react-beautiful-dnd';
import {DragDropContext} from 'react-beautiful-dnd';
import useStore from '../../hooks/useStore';
import Column from "./Column";
import {useCallback} from "react";

function getListStyle(isDraggingOver) {
  return {
    backgroundColor: isDraggingOver ? 'lightblue' : 'lightgray',
    padding: 8,
    minHeight: 500,
  }
}

function Dashboard() {
  const {boards} = useStore();

  const onDragEnd = useCallback((event) => {
    const {source, destination, draggableId: taskId} = event

    boards.active.moveTask(taskId, source, destination)
  }, [boards])

  return (
    <Box p={2}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid container spacing={3}>
          {boards.active?.sections?.map(section => {
            return (
              <Grid item key={section.id} xs>
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
                    )}
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
