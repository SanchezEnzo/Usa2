import { Button, Flex, Text } from "@radix-ui/themes"

function App() {
	return (
		<Flex direction='column' align={"center"} justify={"center"} minHeight={'100dvh'} gap='2'>
			<Text>Hello world :)</Text>
			<Button>Let's go</Button>
		</Flex>
	)
}

export default App
