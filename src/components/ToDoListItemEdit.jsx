import { Button, FormLabel, Input, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { ChevronDownIcon, EditIcon } from "@chakra-ui/icons"
import { useContext, useRef, useState } from "react"
import { taskContext } from "../context/taskContext"

function ToDoListItemEdit({ task, taskList }) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const { setTaskItems } = useContext(taskContext)

    const newTaskTitleValue = useRef("")

    const [taskStatus, setTaskStatus] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setTaskItems(taskList.map(taskItem =>
            taskItem.id === task.id
                ? { ...taskItem, title: newTaskTitleValue.current.value, status: taskStatus }
                : taskItem
        ))
        onClose()
    }

    return (
        <>
            <Button onClick={onOpen} bg='whiteAlpha.50' h='25px' w='20px' flexShrink='0' color='pink.500'>
                <EditIcon />
            </Button>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                onOpen={onOpen}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modify Task</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={1}>
                        <form onSubmit={handleSubmit}>
                            <FormLabel>New Task Title</FormLabel>
                            <Input ref={newTaskTitleValue} type='text' placeholder='Title here...' isRequired />
                            <FormLabel mt={8}>New Status</FormLabel>
                            <Menu>
                                <MenuButton display='flex' justifyContent='space-around' p={4} bg='purple.600' variant='unstyled' pl={3} as={Button} rightIcon={<ChevronDownIcon />} w='100%'>
                                    {taskStatus ? "Completed" : "Uncompleted"}
                                </MenuButton>
                                <MenuList>
                                    <MenuItem onClick={() => setTaskStatus(true)}>Completed</MenuItem>
                                    <MenuItem onClick={() => setTaskStatus(false)}>Uncomplete</MenuItem>
                                </MenuList>
                            </Menu>
                            <Button display='flex' type='submit' colorScheme='blue' mt={10} ml='auto'>
                                Modify
                            </Button>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>

    )
}

export default ToDoListItemEdit
