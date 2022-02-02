import { Card } from "@mui/material"
import { Draggable } from "react-beautiful-dnd"

function getItemStyle(draggableStyle) {
  return {
    padding: 8,
    marginBottom: 8,
    ...draggableStyle
  }
}

function Column({section}) {
  return (
    <div>
      {section?.tasks?.map((task, index) => {
        return (
          <Draggable draggableId={task.id} key={task.id} index={index}>
            {(provided) => (
              <Card 
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={getItemStyle(provided.draggableProps.style)}
              >
                <Task task={task}></Task>
              </Card>
            )}
          </Draggable>
        )
      })}
    </div>
  )
}