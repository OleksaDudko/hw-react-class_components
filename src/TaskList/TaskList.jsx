import { Component } from "react";
import { List, Item, Text, Btn } from "./TaskList.styled"


class TaskList extends Component {
  render() {
    const { tasks } = this.props;
    const { tasksDelete } = this.props;
    return (  
      <List>
        {tasks.map(({ id, text }) => {
          return (
            <Item key={id}>
              <Text>{text}</Text>
              <Btn onClick={() => tasksDelete(id)} type="button">
                Delete
              </Btn>
            </Item>
          )
        })}
      </List>
    )
  }
}

export default TaskList;