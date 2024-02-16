import { LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import "~/tailwind.css";

function Layout({ children }: { children: React.ReactNode }) {
  return <div className="prose mx-auto py-10 px-10 md:px-0">{children}</div>;
}

export function loader({ request }: LoaderFunctionArgs) {
  const requestUrl = new URL(request.url);
  const siteUrl =
    (process.env.NODE_ENV === "production" ? "https:" : "http:") +
    "//" +
    requestUrl.host;

  return { siteUrl };
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
