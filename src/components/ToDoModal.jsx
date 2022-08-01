import { ChevronDownIcon } from "@chakra-ui/icons"
import { Button, FormLabel, Input, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { useState, useContext, useRef } from "react"
import { taskContext } from "../context/taskContext"

function AddModal() {
    
        const taskTitleValue = useRef("")
        const taskStatusValue = useRef(null)

        // Modal functions 
    const { isOpen, onOpen, onClose } = useDisclosure()

    // Task setter function from context
    const { taskItems, setTaskItems } = useContext(taskContext)

    const [taskStatus, setTaskStatus] = useState(false)

    // From function
    const handleSubmit = (e) => {
        e.preventDefault()
        const id = Math.floor(Math.random() * 10000)
        setTaskItems([{title: taskTitleValue.current.value, status: taskStatus, id}, ...taskItems])        
        onClose()
    }

    return (
        <>
            <Button onClick={onOpen} variant='unstyled' bg='blue.900' w='100px'>Add</Button>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                onOpen={onOpen}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>New Task</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={1}>
                        <form onSubmit={handleSubmit}>
                            <FormLabel>Task Title</FormLabel>
                            <Input ref={taskTitleValue} type='text' placeholder='Title here...' isRequired />
                            <FormLabel mt={8}>Status</FormLabel>
                            <Menu>
                                <MenuButton ref={taskStatusValue} display='flex' justifyContent='space-around' p={4} bg='purple.600' variant='unstyled' pl={3} as={Button} rightIcon={<ChevronDownIcon />} w='100%'>
                                    {taskStatus ? "Completed": "Uncompleted"}
                                </MenuButton>
                                <MenuList>
                                    <MenuItem onClick={() => setTaskStatus(true)}>Completed</MenuItem>
                                    <MenuItem onClick={() => setTaskStatus(false)}>Uncomplete</MenuItem>
                                </MenuList>
                            </Menu>
                            <Button display='flex' type='submit' colorScheme='blue' mt={10} ml='auto'>
                                Create
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

export default AddModal