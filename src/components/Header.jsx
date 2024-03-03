import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import useAuthStore from "../store/Auth";
import SwitchButton from "./Switch";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const authenticated = useAuthStore((state) => state.authenticated);
  return (
    <Disclosure as="nav" className="bg-white dark:bg-black shadow">
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex px-2 lg:px-0">
                <div className="flex items-center flex-shrink-0">
                  <Link
                    className="text-2xl dark:text-white text-black font-bold"
                    to="/"
                  >
                    Ace of Cards
                  </Link>
                </div>
                {authenticated && (
                  <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent dark:text-white text-gray-500 hover:bg-cyan-700 hover:bg-cyan-900" */}
                    <Link
                      to="/"
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium dark:text-white text-gray-500 dark:text-white  "
                    >
                      Home
                    </Link>
                    <Link
                      to="/create-card"
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium dark:text-white text-gray-500 border-b-2 border-transparent hover:bg-cyan-700 hover:text-gray-700"
                    >
                      Create Card
                    </Link>
                    <Link
                      to="/favourite-cards"
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium dark:text-white text-gray-500 border-b-2 border-transparent hover:bg-cyan-700 hover:text-gray-700"
                    >
                      Fav Cards
                    </Link>
                    <Link
                      to="/about"
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium dark:text-white text-gray-500 border-b-2 border-transparent hover:bg-cyan-700 hover:text-gray-700"
                    >
                      About
                    </Link>
                  </div>
                )}
              </div>
              {authenticated && (
                <>
                  <div className="flex items-center justify-center flex-1 px-2 lg:ml-6 lg:justify-end">
                    <div className="w-full max-w-lg lg:max-w-xs">
                      <label htmlFor="search" className="sr-only">
                        Search
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <MagnifyingGlassIcon
                            className="w-5 h-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </div>
                        <input
                          id="search"
                          name="search"
                          className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Search"
                          type="search"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center lg:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 hover:dark:text-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block w-6 h-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block w-6 h-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="hidden lg:ml-4 lg:flex lg:items-center">
                    <button
                      type="button"
                      className="relative flex-shrink-0 p-1 text-gray-400 bg-white rounded-full hover:dark:text-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="w-6 h-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative flex-shrink-0 ml-4">
                      <div>
                        <Menu.Button className="relative flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="w-8 h-8 rounded-full"
                            src="https://www.svgrepo.com/show/408476/user-person-profile-block-account-circle.svg"
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </>
              )}

              <div className="flex items-center justify-center gap-4 pl-4">
                {!authenticated && (
                  <Link
                    className="px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-500"
                    to={"/login"}
                  >
                    Sign In
                  </Link>
                )}
                <SwitchButton />
              </div>
            </div>
          </div>

          {authenticated ? (
            <Disclosure.Panel className="lg:hidden">
              <div className="pt-2 pb-3 space-y-1">
                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block py-2 pl-3 pr-4 text-base font-medium text-indigo-700 border-l-4 border-indigo-500 bg-indigo-50"
                >
                  Dashboard
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                >
                  Team
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                >
                  Projects
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                >
                  Calendar
                </Disclosure.Button>
              </div>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://www.svgrepo.com/show/408476/user-person-profile-block-account-circle.svg"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">
                      Tom Cook
                    </div>
                    <div className="text-sm font-medium dark:text-white text-gray-500">
                      tom@example.com
                    </div>
                  </div>
                  <button
                    type="button"
                    className="relative flex-shrink-0 p-1 ml-auto text-gray-400 bg-white rounded-full hover:dark:text-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 space-y-1">
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-4 py-2 text-base font-medium dark:text-white text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                  >
                    Your Profile
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-4 py-2 text-base font-medium dark:text-white text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                  >
                    Settings
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-4 py-2 text-base font-medium dark:text-white text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                  >
                    Sign out
                  </Disclosure.Button>
                </div>
              </div>
            </Disclosure.Panel>
          ) : (
            ""
          )}
        </>
      )}
    </Disclosure>
  );
}
