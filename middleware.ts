export { default } from "next-auth/middleware";

export const config = { matcher: ["/", "/video/:id*", "/history"] };
