import {Route, Routes} from "react-router";
import {Homepage} from "./pages/Homepage.tsx";

const App = () => {
	return (
		<div className={"relative w-full bg-[#E4E4E4]"}>
			<Routes>
				<Route path="/" element={<Homepage/>} />
			</Routes>
		</div>
	)
}
export default App
