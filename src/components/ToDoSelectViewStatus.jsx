import { useContext, useState } from "react"
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'
import { taskContext } from "../context/taskContext"

function SelectCategory() {

    const [optionName, setOptionName] = useState("All")

    const { setTaskItemActualStatus } = useContext(taskContext)

    const selectTaskDisplay = (e) => {
        setOptionName(e.target.innerText);
        e.target.innerText === "Completed" ? setTaskItemActualStatus(true) :
        e.target.innerText === "Uncomplete" ? setTaskItemActualStatus(false) :
        setTaskItemActualStatus("All") 
    }

    return (
        <Menu>
            <MenuButton bg='purple.600' variant='unstyled' pl={3} as={Button} rightIcon={<ChevronDownIcon />} w='auto'>
                {optionName}
            </MenuButton>
            <MenuList>
                <MenuItem value={optionName} onClick={selectTaskDisplay}>All</MenuItem>
                <MenuItem value={optionName} onClick={selectTaskDisplay}>Completed</MenuItem>
                <MenuItem value={optionName} onClick={selectTaskDisplay}>Uncomplete</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default SelectCategory