import * as React from "react";
import { ChakraProvider, Box, Text, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import {
	Mafs,
	CartesianCoordinates,
	FunctionGraph,
	labelPi,
	useMovablePoint,
} from "mafs";

function App() {
	const phase = useMovablePoint([0, 0], {
		constrain: "horizontal",
	});

	return (
		<ChakraProvider theme={theme}>
			<Box textAlign="center" fontSize="xl">
				<Grid minH="100vh" p={3}>
					<ColorModeSwitcher justifySelf="flex-end" />
					<Text>Mafs Test</Text>
					<Mafs
						viewBox={{ x: [-10, 10], y: [-2, 2] }}
						preserveAspectRatio={false}>
						<CartesianCoordinates
							subdivisions={4}
							xAxis={{ lines: Math.PI, labels: labelPi }}
						/>
						<FunctionGraph.OfX y={(x) => Math.sin(x - phase.x)} />
						{phase.element}
					</Mafs>
				</Grid>
			</Box>
		</ChakraProvider>
	);
}

export default App;

