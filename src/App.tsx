import {Route, Routes} from "react-router";
import {Homepage} from "./pages/Homepage.tsx";
import WorksPage from "./pages/WorksPage.tsx";

const App = () => {
	return (
		<div className={"relative w-full bg-[#E4E4E4] font-inter-tight text-warm-black"}>
			<Routes>
				<Route path="/" element={<Homepage/>} />
				<Route path="/works" element={<WorksPage/>} />
			</Routes>
		</div>
	)
}
export default App
