import { Heading, Stack } from "@chakra-ui/react"
import { AnimatePresence, Reorder } from "framer-motion"
import { useContext } from "react"
import { taskContext } from "../context/taskContext"
import ToDoListItem from "./ToDoListItem"
import '../styles/style.css'

function ToDoList() {

    const { taskItems, setTaskItems } = useContext(taskContext)

    return (
        <Reorder.Group className="todo-list" axis="y" values={taskItems} onReorder={setTaskItems}> 
            <AnimatePresence>
                {
                    taskItems.length === 0 ?
                        <Stack my={10}>
                            <Heading as="h2" textAlign='center'>¡No tasks added!</Heading>
                        </Stack>
                        :
                        taskItems.map((task, index) => {
                            return (
                                <Reorder.Item key={task.id} value={task}>
                                    <ToDoListItem taskList={taskItems} task={task} index={index} />
                                </Reorder.Item>
                            )
                        })
                }
            </AnimatePresence>
        </Reorder.Group>
    )
}

export default ToDoList
