import './App.css'
import tasks from "./tasks.json"
import { Component } from 'react'
import TaskList from './TaskList/TaskList'
import { GlobalStyle } from './GlobalStyle'

class App extends Component{
  state = {
    tasks,
  }

  handleDeleteTasks = (id) => {
    this.setState((prev) => ({
      tasks: prev.tasks.filter(item => item.id !== id)
    }))
  }

  render(){
    const {tasks} = this.state
    return (
      <>
      <GlobalStyle/>
      <TaskList tasks = {tasks} tasksDelete = {this.handleDeleteTasks}/>
      </>
    )
  }
}

export default App