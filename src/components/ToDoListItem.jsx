import { DeleteIcon } from "@chakra-ui/icons"
import { Button, Stack } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useContext, useMemo } from "react"
import { taskContext } from "../context/taskContext"
import ToDoListItemCheckbox from "./ToDoListItemCheckbox"
import ToDoListItemEdit from "./ToDoListItemEdit"

export const MotionListContent = motion(Stack)

const variants = {
    hidden: {
        opacity: 0
    },
    visible: ({delay}) => ({
        opacity: 1,
        transition: {
            delay,
            duration: 1
        }
    })
}

function ToDoListItem({ task, taskList, index }) {

    const { setTaskItems, itemActualStatus } = useContext(taskContext)

    const deleteTaskItem = () => {
        setTaskItems(taskList.filter(tasksInList => tasksInList.id !== task.id))
    }

    const taskInStatusDisplay = useMemo( () => task.status === itemActualStatus ? true : itemActualStatus === "All" ? true : false, [itemActualStatus])

    return (
        <MotionListContent 
            py={1} 
            px={4} 
            display={taskInStatusDisplay ? "block" : "none"} 
            boxShadow='0px 0px 5px 0px rgb(0 0 0 / 75%)'
            initial='hidden'
            animate='visible'
            exit='hidden'
            variants={variants}
            layoutId={task.id}
            custom={{delay: (index + 1) * 0.15 }}
            cursor='pointer'
            >
            <Stack direction='row' align='center' justify='space-between' py={4}>
                <ToDoListItemCheckbox task={task} taskList={taskList} />
                <Stack direction='row' align='center'>
                    <Button onClick={deleteTaskItem} bg='whiteAlpha.50' h='25px' w='20px' flexShrink='0'>
                        <DeleteIcon color='pink.500' />
                    </Button>
                    <ToDoListItemEdit task={task} taskList={taskList} />
                </Stack>
            </Stack>
        </MotionListContent >
    )
}

export default ToDoListItem


