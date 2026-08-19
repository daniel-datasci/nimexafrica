import { renderErrorPage } from "./lib/error-page";

const attachSupabaseAuthMiddleware = {
  options: {
    type: "function" as const,
    client: async ({ next }: { next: (ctx?: { headers?: Record<string, string> }) => Promise<unknown> }) => {
      const { supabase } = await import("./integrations/supabase/client");
      const { data } = await supabase.auth.getSession();
      const token = data.session?.access_token;
      return next({
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
    },
  },
};

const errorMiddleware = {
  options: {
    type: "request" as const,
    server: async ({ next }: { next: () => Promise<unknown> }) => {
      try {
        return await next();
      } catch (error) {
        if (error != null && typeof error === "object" && "statusCode" in error) {
          throw error;
        }

        console.error(error);
        return new Response(renderErrorPage(), {
          status: 500,
          headers: { "content-type": "text/html; charset=utf-8" },
        });
      }
    },
  },
};

export const startInstance = {
  getOptions: async () => {
    if (typeof window !== "undefined") {
      return {
        functionMiddleware: [attachSupabaseAuthMiddleware],
      };
    }

    const { createCsrfMiddleware } = await import("@tanstack/react-start");

    const csrfMiddleware = createCsrfMiddleware({
      filter: (ctx) => ctx.handlerType === "serverFn",
    });

    return {
      functionMiddleware: [attachSupabaseAuthMiddleware],
      requestMiddleware: [errorMiddleware, csrfMiddleware],
    };
  },
};
