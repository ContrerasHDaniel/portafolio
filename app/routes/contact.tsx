import type { Route } from "./+types/home";
import { ContactMe } from "../contact/contactme";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Contac Me!" },
        { name: "Best portfolio in the world", content: "Welcome to my work!" },
    ];
}

export default function Contact() {
    return <ContactMe />;
}