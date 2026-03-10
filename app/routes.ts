import { type RouteConfig, index, route, layout, prefix } from "@react-router/dev/routes";

export default [
    // Ruta principal
    index("routes/home.tsx"),

    // Rutas públicas
    route("about", "routes/about.tsx"),

    route("*", "routes/notfound.tsx"),
]