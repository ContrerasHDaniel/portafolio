import type { Route } from "./+types/home";
import { Projects } from "../projects/projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Daniel Portfolio" },
    { name: "Best portfolio in the world", content: "Welcome to my work!" },
  ];
}

export default function Home() {
  return <Projects />;
}
