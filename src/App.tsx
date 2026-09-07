import {Route, Routes} from "react-router";
import {Homepage} from "./pages/Homepage.tsx";
import WorksPage from "./pages/WorksPage.tsx";
import RequestQuote from "./pages/RequestQuote.tsx";
import NotFound from "./pages/NotFound.tsx";

const App = () => {
	return (
		<div className={"relative w-full bg-[#E4E4E4] font-inter-tight text-warm-black"}>
			<Routes>
				<Route path="/" element={<Homepage/>} />
				<Route path="/works" element={<WorksPage/>} />
				<Route path="/request-a-quote" element={<RequestQuote/>} />
				<Route path="*" element={<NotFound/>} />
			</Routes>
		</div>
	)
}
export default App
