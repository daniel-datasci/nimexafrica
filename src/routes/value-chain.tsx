import { createFileRoute, Outlet } from "@tanstack/react-router";
export const Route = createFileRoute("/value-chain")({ component: () => <Outlet /> });
