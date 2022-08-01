import { createContext, useEffect, useState } from "react"

export const taskContext = createContext()

function TaskContextProvider({ children }) {

    const [taskItems, setTaskItems] = useState(() => JSON.parse(localStorage.getItem('tasks')) || [])
    const [itemActualStatus, setTaskItemActualStatus] = useState("All")

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify([...taskItems]))
    }, [taskItems])

    return (
        <taskContext.Provider 
        value={{
            taskItems,
            itemActualStatus,
            setTaskItemActualStatus,
            setTaskItems
        }}
        >
            {children}
        </taskContext.Provider>
    )
}

export default TaskContextProvider