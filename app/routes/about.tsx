import type { Route } from "./+types/home";
import { AboutMe } from "../about/aboutme";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Daxez Portfolio" },
        { name: "Best portfolio in the world", content: "Welcome to my work!" },
    ];
}

export default function About() {
    return <AboutMe />;
}
