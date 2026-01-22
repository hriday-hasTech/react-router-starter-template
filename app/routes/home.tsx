import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export function loader({ context }: Route.LoaderArgs) {
	return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE, env: JSON.stringify(context.cloudflare.env) };
}

export default function Home({ loaderData }: Route.ComponentProps) {
	return <div>
		<Welcome message={loaderData.message} />
		{loaderData?.env || ""}
	</div>;
}
