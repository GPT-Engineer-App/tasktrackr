import { Container, VStack, Text, Input, Button, List, ListItem, ListIcon } from "@chakra-ui/react";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" mb="8">Todo App</Text>
        <Input
          placeholder="Add a new task"
          value={inputValue}
          onChange={handleInputChange}
          size="lg"
        />
        <Button onClick={handleAddTask} colorScheme="blue" size="lg">Add Task</Button>
        <List spacing={3} mt="5">
          {tasks.map((task, index) => (
            <ListItem key={index} fontSize="lg">
              <ListIcon as={FaCheckCircle} color="green.500" />
              {task}
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;