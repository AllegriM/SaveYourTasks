import { Stack } from "@chakra-ui/react"
import SelectCategory from "./ToDoSelectViewStatus"
import AddModal from "./ToDoModal"
import ToDoList from "./ToDoList"

function ToDoContainer() {

    return (
        <Stack minH='90vh' h='100%' w='100%'>
            <Stack bg='blackAlpha.500' m='0 auto' mt={7} maxW='600px' w='100%' minH='300px' h='100%' boxShadow='9px 11px 13px 0px rgba(0,0,0,0.75)' borderRadius='6px' >
                {/* TO DO BUTTONS */}
                <Stack direction='row' justify='space-between' p={4} borderBottom='1px solid #718096'>
                    <AddModal />
                    <SelectCategory />
                </Stack>
                {/* TO DO LIST */}
                <Stack px={0} marginTop='0px !important' h='100%'>
                    <ToDoList />
                </Stack>
            </Stack>
        </Stack>
    )
}

export default ToDoContainer