import { Heading, Stack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import ToDoContainer from './components/ToDoContainer'

const MotionHeading = motion(Heading)

function App() {

  return (
      <Stack className="App">
        <MotionHeading 
          as="h2" 
          initial={{scale: 0}}
          animate={{scale: 1}}
          transition={{
            duration: 1,
            ease: "linear",
            type: 'spring'
          }}
          mt={5} 
          textAlign='center'
          >
            TO-DO LIST
        </MotionHeading>
        <ToDoContainer />
      </Stack>
  )
}

export default App
