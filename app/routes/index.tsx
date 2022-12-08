import { Link } from "@remix-run/react";

// import { useOptionalUser } from "~/utils";

export default function Index() {
//   const user = useOptionalUser();
const DATA_STUDENT = [
  {
      id: '00000041073',
      name: 'Umar Haqi',
      email: 'umar.haqi@student.umn.ac.id',
      regisTerm: 'Semester Ganjil 2022/2023',
      program: 'Informatika',
      university: 'Universitas Multimedia Nusantara',
      result: 'Uploaded',
      revStat: 'Not Reviewed',
  },
  {
      id: '00000055128',
      name: 'Elfajar Bintang Samudera',
      email: 'elfajar.bintang@student.umn.ac.id',
      regisTerm: 'Semester Ganjil 2022/2023',
      program: 'Informatika',
      university: 'Universitas Multimedia Nusantara',
      result: 'Uploaded',
      revStat: 'Not Reviewed',
  },
  {
      id: '00000011234',
      name: 'Gerald Nicholas',
      email: 'ger.nic@student.umn.ac.id',
      regisTerm: 'Semester Genap 2021/2022',
      program: 'Informatika',
      university: 'Universitas Multimedia Nusantara',
      result: 'Uploaded',
      revStat: 'Not Reviewed',
  },
  {
    id: '00000045958',
    name: 'Joshua Kristiadi',
    email: 'joshua.kristiadi@student.umn.ac.id',
    regisTerm: 'Semester Ganjil 2021/2022',
    program: 'Sistem Informasi',
    university: 'Universitas Multimedia Nusantara',
    result: 'Uploaded',
    revStat: 'Not Reviewed',
},

]

return (
  <main>
  {/* <h1>Konversi page</h1>
  <Link to="/">Go back to main page</Link> */}


    <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex flex-grow flex-col overflow-y-auto bg-sky-700 pt-5">
            <div className="flex flex-shrink-0 items-center px-10 py-4">
                {/* Logo UMN */}
                <img src="https://www.umn.ac.id/wp-content/uploads/2022/11/Logo-web-UMN2-2.png"/>
                </div>
                <div className="mt-5 flex flex-1 flex-col">
                    <nav className="flex-1 space-y-1 px-2 pb-4"><a href="#"
                      className="bg-sky-800 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"><svg
                          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" aria-hidden="true" className="mr-3 h-6 w-6 flex-shrink-0 text-sky-300">
                          <path stroke-linecap="round" stroke-linejoin="round"
                              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25">
                          </path>
                      </svg>Dashboard</a><a href="#"
                      className="text-sky-100 hover:bg-sky-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md"><svg
                          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" aria-hidden="true" className="mr-3 h-6 w-6 flex-shrink-0 text-sky-300">
                          <path stroke-linecap="round" stroke-linejoin="round"
                              d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z">
                          </path>
                      </svg>Registrasi</a><a href="#"
                      className="text-sky-100 hover:bg-sky-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md"><svg
                          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" aria-hidden="true" className="mr-3 h-6 w-6 flex-shrink-0 text-sky-300">
                          <path stroke-linecap="round" stroke-linejoin="round"
                              d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z">
                          </path>
                      </svg>Konversi</a><a href="#"
                      className="text-sky-100 hover:bg-sky-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md"><svg
                          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" aria-hidden="true" className="mr-3 h-6 w-6 flex-shrink-0 text-sky-300">
                          <path stroke-linecap="round" stroke-linejoin="round"
                              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5">
                          </path>
                      </svg>Kerjasama</a>
                    </nav>
              </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow"><button type="button"
                  className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500 md:hidden"><span
                      className="sr-only">Open sidebar</span><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12">
                      </path>
                  </svg></button>
              <div className="flex flex-1 justify-between px-4">
                  <div className="flex flex-1">
                      <form className="flex w-full md:ml-0" action="#" method="GET"><label htmlFor="search-field"
                              className="sr-only">Search</label>
                          <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center"><svg
                                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                      aria-hidden="true" className="h-5 w-5">
                                      <path fill-rule="evenodd"
                                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                          clip-rule="evenodd"></path>
                                  </svg></div><input id="search-field"
                                  className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                                  placeholder="Search" type="search" name="search"/>
                          </div>
                      </form>
                  </div>
                  <div className="ml-4 flex items-center md:ml-6"><button type="button"
                          className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"><span
                              className="sr-only">View notifications</span><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                              viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0">
                              </path>
                          </svg></button>
                      <div className="relative ml-3" data-headlessui-state="">
                          <div><button
                                  className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                                  id="headlessui-menu-button-:Rqjm:" type="button" aria-haspopup="true" aria-expanded="false"
                                  data-headlessui-state=""><span className="sr-only">Open user menu</span>
                                  <img
                                      className="h-8 w-8 rounded-full"
                                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                      alt=""/>
                                      </button>
                                    </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* Main area */}
          <main>

          </main>
      </div>
  </main>
);
}
