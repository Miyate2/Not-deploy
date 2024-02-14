import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";

export const meta: MetaFunction = () => [{ title: "OpenAEC for BIM" }];

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen flex">
      <div className="flex-grow flex-shrink">
        <div className="relative px-6 pb-12 pt-24 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-32">
          <h1 className="text-center text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
            <span className="block text-black drop-shadow-md">
              OpenAEC for BIM
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-center text-xl text-black sm:max-w-3xl">
            All-in-one package solution for openBIM®.
          </p>
          <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
            {user ? (
              <Link
                to="/notes"
                className="flex items-center justify-center rounded-md border border-transparent bg-blue-200 px-4 py-3 text-base font-medium text-black-700 shadow-sm hover:bg-gray-300 sm:px-8"
              >
                View for {user.email}
              </Link>
            ) : (
              <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                <Link
                  to="/join"
                  className="flex items-center justify-center rounded-md border border-blue-100 bg-white px-4 py-3 text-base font-medium text-black-100 shadow-sm hover:bg-blue-300 sm:px-8"
                >
                  Sign up
                </Link>
                <Link
                  to="/login"
                  className="flex items-center justify-center rounded-md bg-blue-500 px-4 py-3 font-medium text-white hover:bg-blue-400"
                >
                  Log In
                </Link>
              </div>
            )}
            </div>
          <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
            <div className="mt-6 flex flex-wrap justify-center gap-8">
              <Link
                to="/createaccount"
                className="text-xl text-blue-600 underline"
              >
                Creat a new account if you do not have one
              </Link>
            </div>
            
          </div>
          <a href="https://onestruction.com/">
            <img
              src="/onestruction-logo-1.svg"
              alt="Remix"
              className="mx-auto mt-16 w-full max-w-[12rem] md:max-w-[16rem]"
            />
          </a>
          
          {/* Partner logos section */}
          <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
            <div className="mt-6 flex flex-wrap justify-center gap-8">
              {[
                {
                  src: "/bsdd_logo.svg",
                  alt: "bsdd",
                  href: "https://www.buildingsmart.org/users/services/buildingsmart-data-dictionary/",
                },
                {
                  src: "/ifc_logo.svg",
                  alt: "ifc",
                  href: "https://technical.buildingsmart.org/standards/ifc/ifc-schema-specifications/",
                },
                {
                  src: "/ids-logo.svg",
                  alt: "ids",
                  href: "https://technical.buildingsmart.org/projects/information-delivery-specification-ids/",
                },
              ].map((img) => (
                <a
                  key={img.href}
                  href={img.href}
                  className="flex h-16 w-32 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0"
                >
                  <img alt={img.alt} src={img.src} className="object-contain" />
                </a>
              ))}
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
            <div className="mt-6 flex flex-wrap justify-center gap-12">
              <Link
                to="/operatingcompany"
                className="text-xl text-blue-600 underline"
              >
                Privacy Policy
              </Link>
              <Link
                to="/termsofservice"
                className="text-xl text-blue-600 underline"
              >
                Terms of Service
              </Link>
              <Link
                to="/privecypolicy"
                className="text-xl text-blue-600 underline"
              >
                Operating Company
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow-0 flex-shrink-0 w-1/4" style={{ backgroundColor: 'rgba(0,231,205,0.5)' }}>
      </div>
    </main>
  );
}
