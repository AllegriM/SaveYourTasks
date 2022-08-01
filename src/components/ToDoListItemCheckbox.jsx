import { Checkbox, Stack, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { taskContext } from "../context/taskContext"


function ToDoListItemCheckbox({ task, taskList }) {

    const { setTaskItems } = useContext(taskContext)

    const changeCheckBoxStatus = () => {
        setTaskItems(taskList.map(taskItem =>
            taskItem.id === task.id
                ? { ...taskItem, status: !task.status }
                : taskItem
        ));
    }

    return (
        <Stack direction='row' align='center' gap={3} >
            {
                task.status === true ?
                    <>
                        <Checkbox onChange={changeCheckBoxStatus} bg='blue.900' size='lg' isChecked={task.status} />
                        <Text color='pink.500' fontWeight={500} fontSize='1.2rem' textDecoration='line-through'>{task.title}</Text>
                    </>
                    :
                    <>
                        <Checkbox  onChange={changeCheckBoxStatus} bg='blue.900' size='lg' isChecked={task.status} />
                        <Text color='pink.500' fontWeight={500} fontSize='1.2rem'>{task.title}</Text>
                    </>
            }
        </Stack>
    )
}

export default ToDoListItemCheckbox
