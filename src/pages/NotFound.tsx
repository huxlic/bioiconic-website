import {Link} from "react-router";

const NotFound = () => {
	return (
		<div className={"h-screen bg-warm-black text-warm-cream flex flex-col items-center justify-center gap-2"}>
			<h2 className={"text-[100px] font-bold leading-none"}>404</h2>
			<p className={"text-lg"}>Page not found</p>
			<Link className={"bg-vib-orange px-5 py-2 rounded-xl text-[14px] font-medium"} to={"/"}>Back to Homepage</Link>
		</div>
	)
}
export default NotFound
