import React from 'react';

const GroupPage = () => {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-text-main dark:text-gray-200 min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        {/* TopNavBar */}
        <header className="sticky top-0 z-10 flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-6 lg:px-10 py-3 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-sm">
          <div className="flex items-center gap-4 text-text-main dark:text-gray-100">
            <div className="size-6 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold tracking-tight">HUMANOSVERSE</h2>
          </div>
          <div className="flex flex-1 justify-end gap-4 md:gap-6">
            <div className="hidden md:flex items-center gap-6">
              <a className="text-sm font-medium leading-normal text-text-subtle dark:text-gray-400 hover:text-primary dark:hover:text-primary" href="#">Home</a>
              <a className="text-sm font-medium leading-normal text-text-subtle dark:text-gray-400 hover:text-primary dark:hover:text-primary" href="#">Messages</a>
              <a className="text-sm font-medium leading-normal text-text-main dark:text-gray-200 hover:text-primary dark:hover:text-primary" href="#">Groups</a>
            </div>
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-border-light dark:bg-border-dark text-text-subtle dark:text-gray-400">
              <span className="material-symbols-outlined text-xl">notifications</span>
            </button>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCBx8_HLOcWVueZIpX7hZHUv9kyqMqz4zNKdNkPVVUBCuwGYlIJxR5vtGsRzYC82OH_LKy1tfC9SXjVltLc9Dy7_PsbpBnkR4qKFDRanx41hAZ5e7oE4tj5SP0Vxn3mbU9jrhNmFYWUUqFyv4fgeLhP9mh2i20zVU4UV0Mofz-w1prvfLGSoEmAeP9bY5X-WpASlyoZBg_jeVskl4XSSafnXcAa6MjdVzgiU8-b1OmH_cGaeHDxalB79t2RgZLdOTwTq7QSHFAInmY")' }}></div>
          </div>
        </header>
        {/* Main Layout */}
        <div className="flex flex-1 w-full max-w-[1600px] mx-auto p-4 md:p-6 lg:p-8 gap-8">
          {/* Left Sidebar */}
          <aside className="hidden md:flex flex-col w-64 lg:w-72 shrink-0 gap-6">
            {/* Search Bar */}
            <div className="px-2">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-full h-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark">
                  <div className="text-text-subtle dark:text-gray-400 flex items-center justify-center pl-4">
                    <span className="material-symbols-outlined text-xl">search</span>
                  </div>
                  <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full text-text-main dark:text-gray-200 focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-text-subtle dark:placeholder:text-gray-500 pr-4 pl-2 text-sm font-normal leading-normal" placeholder="Search groups..." value="" />
                </div>
              </label>
            </div>
            {/* SideNavBar */}
            <nav className="flex h-full flex-col justify-between px-2">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 px-3 py-2 rounded-full bg-primary/20 dark:bg-primary/30">
                  <span className="material-symbols-outlined text-xl text-primary">palette</span>
                  <p className="text-sm font-medium leading-normal text-primary">Cosmic Artists Collective</p>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
                  <span className="material-symbols-outlined text-xl text-text-subtle dark:text-gray-400">filter_hdr</span>
                  <p className="text-sm font-medium leading-normal text-text-subtle dark:text-gray-300">Local Hikers</p>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
                  <span className="material-symbols-outlined text-xl text-text-subtle dark:text-gray-400">auto_stories</span>
                  <p className="text-sm font-medium leading-normal text-text-subtle dark:text-gray-300">Book Club</p>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
                  <span className="material-symbols-outlined text-xl text-text-subtle dark:text-gray-400">edit</span>
                  <p className="text-sm font-medium leading-normal text-text-subtle dark:text-gray-300">Design Guild</p>
                </div>
              </div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-accent text-white text-sm font-bold leading-normal tracking-wide mt-8 gap-2">
                <span className="material-symbols-outlined text-xl">add_circle</span>
                <span className="truncate">Create New Group</span>
              </button>
            </nav>
          </aside>
          {/* Main Content Panel */}
          <main className="flex-1 flex flex-col gap-6 min-w-0">
            <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg flex-1 flex flex-col">
              {/* Tabs */}
              <div className="pb-3 shrink-0">
                <div className="flex border-b border-border-light dark:border-border-dark px-4 gap-8">
                  <a className="flex items-center justify-center border-b-[3px] border-b-primary text-primary pb-[13px] pt-4 gap-2" href="#">
                    <span className="material-symbols-outlined text-xl">forum</span>
                    <p className="text-sm font-bold leading-normal">Feed</p>
                  </a>
                  <a className="flex items-center justify-center border-b-[3px] border-b-transparent text-text-subtle dark:text-gray-400 pb-[13px] pt-4 gap-2 hover:text-primary dark:hover:text-primary" href="#">
                    <span className="material-symbols-outlined text-xl">celebration</span>
                    <p className="text-sm font-bold leading-normal">Events</p>
                  </a>
                  <a className="flex items-center justify-center border-b-[3px] border-b-transparent text-text-subtle dark:text-gray-400 pb-[13px] pt-4 gap-2 hover:text-primary dark:hover:text-primary" href="#">
                    <span className="material-symbols-outlined text-xl">folder</span>
                    <p className="text-sm font-bold leading-normal">Files</p>
                  </a>
                  <a className="flex items-center justify-center border-b-[3px] border-b-transparent text-text-subtle dark:text-gray-400 pb-[13px] pt-4 gap-2 hover:text-primary dark:hover:text-primary" href="#">
                    <span className="material-symbols-outlined text-xl">shield</span>
                    <p className="text-sm font-bold leading-normal">Settings</p>
                  </a>
                </div>
              </div>
              {/* Content Area (Feed) */}
              <div className="flex-1 flex flex-col gap-4 p-4 overflow-y-auto">
                {/* Composer */}
                <div className="flex items-start px-2 py-3 gap-3 @container">
                  <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDFmloOkbrp3ddDO-WBX26CMSlXW0uB36JdGPqnahkl44JEXMCYAYp5YpF5-B5igD9AE-6PtcdktItE7-XEntF4Es6iPi5YUCbjHmGMc6m5VtcXx5xn1TjD_9-fmLZ0leV-ilGmYSrl3raSymVmxIUgBhMjiex0btZmw2qDQdyyo4wGGW69stAINXj3XMOjv2YT3ElPQg5vG_aeNUovPzD6Jsd3bRRmLiurInPOg3leZcNxN-HDF_wglH0UDLLm78yf4kXzHhn8PRw")' }}></div>
                  <div className="flex flex-col min-w-40 flex-1">
                    <div className="flex flex-1 flex-col border border-border-light dark:border-border-dark rounded-lg bg-background-light dark:bg-background-dark">
                      <textarea className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-t-lg text-text-main dark:text-gray-200 focus:outline-0 focus:ring-0 border-0 bg-transparent h-24 placeholder:text-text-subtle dark:placeholder:text-gray-500 text-base font-normal leading-normal p-4" placeholder="Share something with the group..."></textarea>
                      <div className="flex border-t border-border-light dark:border-border-dark justify-end p-2">
                        <div className="flex items-center gap-4 justify-end">
                          <div className="flex items-center">
                            <button className="flex items-center justify-center p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10">
                              <span className="material-symbols-outlined text-xl text-text-subtle dark:text-gray-400">image</span>
                            </button>
                            <button className="flex items-center justify-center p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10">
                              <span className="material-symbols-outlined text-xl text-text-subtle dark:text-gray-400">poll</span>
                            </button>
                            <button className="flex items-center justify-center p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10">
                              <span className="material-symbols-outlined text-xl text-text-subtle dark:text-gray-400">attach_file</span>
                            </button>
                            <button className="flex items-center justify-center p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10">
                              <span className="material-symbols-outlined text-xl text-text-subtle dark:text-gray-400">mood</span>
                            </button>
                          </div>
                          <button className="min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-primary text-white text-sm font-medium leading-normal">
                            <span className="truncate">Post</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Empty State Example */}
                <div className="flex flex-col items-center justify-center text-center p-16 gap-4">
                  <span className="material-symbols-outlined text-6xl text-accent">emoji_people</span>
                  <h3 className="text-xl font-bold text-text-main dark:text-gray-200">Your group's story starts here!</h3>
                  <p className="text-text-subtle dark:text-gray-400 max-w-sm">Welcome to the Cosmic Artists Collective. Be the first to share something inspiring, ask a question, or just say hello!</p>
                </div>
              </div>
            </div>
          </main>
          {/* Right Contextual Panel */}
          <aside className="hidden lg:flex flex-col w-72 shrink-0 gap-6">
            {/* Group Info Card */}
            <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg p-6 flex flex-col items-center text-center gap-4">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJ781M65gFXqKzVbCcycTiQkdp71EQg27cf0iQuCMnJP6idif50nebslW2nJOd-qHz1xfWkUUlwtqp-8lgHfPh8EQuMiH_BwKME-41tzRwFTQCCAp4LPkeDyhsq1PZOh8nDLGeEHbMur9kJoabueuSBb0jaNy7rGqQFA4Ri9CpMamRMXbI_9s6G7LtA1RjUR6qevJPk8cS1MR4qjp5BXBWJXh6e3iSS_UyMPPWEGs7jmpkRVn25myPjVqwpe44oI-iuRSKqF915RQ")' }}></div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-text-main dark:text-gray-100">Cosmic Artists Collective</h3>
                <div className="flex items-center justify-center gap-2 text-text-subtle dark:text-gray-400">
                  <span className="material-symbols-outlined text-base">lock</span>
                  <p className="text-xs font-medium">Private Group • 42 Members</p>
                </div>
              </div>
              <p className="text-sm text-text-subtle dark:text-gray-400">A space for digital and traditional artists to share work, find inspiration, and collaborate on cosmic-themed projects.</p>
            </div>
            {/* Upcoming Events Widget */}
            <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg p-6 flex flex-col gap-4">
              <h4 className="text-base font-bold text-text-main dark:text-gray-200">Upcoming Events</h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center justify-center bg-primary/20 dark:bg-primary/30 text-primary rounded h-12 w-12 shrink-0">
                    <span className="text-xs font-bold uppercase">OCT</span>
                    <span className="text-lg font-bold leading-tight">28</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold text-sm text-text-main dark:text-gray-200">Weekly Design Sync</p>
                    <p className="text-xs text-text-subtle dark:text-gray-400">Sat, 10:00 AM PST</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center justify-center bg-black/5 dark:bg-white/10 text-text-subtle dark:text-gray-300 rounded h-12 w-12 shrink-0">
                    <span className="text-xs font-bold uppercase">NOV</span>
                    <span className="text-lg font-bold leading-tight">05</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold text-sm text-text-main dark:text-gray-200">Guest Speaker: VEXX</p>
                    <p className="text-xs text-text-subtle dark:text-gray-400">Next Sun, 4:00 PM PST</p>
                  </div>
                </div>
              </div>
              <button className="flex w-full mt-2 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-9 px-4 bg-accent/20 dark:bg-accent/30 text-accent text-sm font-bold leading-normal tracking-wide gap-2">
                <span className="truncate">Create Event</span>
              </button>
            </div>
            {/* Members Widget */}
            <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg p-6 flex flex-col gap-4">
              <h4 className="text-base font-bold text-text-main dark:text-gray-200">Online Now (3)</h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTAOIQZnM3GcsaOUONx5xqNAr_eHUkN4xRzpk1Nv7jz6HmejU0DFme3NKVcNjVHU1PPeWmMuc9uNuJPE1k2wdWso1sHVBzJg9qoT4OyLMg5IQ1XidzVzhs36TU4NEdlTYFvhapZvDX90-LyvTAu4UF6TxggBubB2k3V8lgyriHGIp0jXPLiDsD-kYVKlZNE0L4zDWFWPU9m_XHIh4vLMANPMZCzNsP2by2S2NJ-JeJoyWywAioSj9p5C7oI31iaCeDYUxv4CyIK8A")' }}></div>
                    <div className="absolute bottom-0 right-0 size-3 bg-accent rounded-full border-2 border-surface-light dark:border-surface-dark"></div>
                  </div>
                  <p className="font-medium text-sm text-text-main dark:text-gray-300">Jane Doe</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBRwq0H5Zm0wqquB_QNrumURIFvzTHmjXtmKWK3vQRHpfuTTXDdXsHkhc6T3u2M1ki2PweHH1bcCd_UrIlYTYFYUqefu4E0WRS6fNsc9Ye_XCSKWhpMdwX8YRu32Tabkq-A22v5-cf-FcLOCiwTjvAKDxtKjEbhkBUFCY8ius2s6pmkgIAGNgSqGx99E7yrqqbejW5yKiaWkp3Zf1bzmPP2Po21D7Te2c3A2G5GzRCQ5DJ22ijFthmRO5LcIAMC8DF3OPokpDhsUS8")' }}></div>
                    <div className="absolute bottom-0 right-0 size-3 bg-accent rounded-full border-2 border-surface-light dark:border-surface-dark"></div>
                  </div>
                  <p className="font-medium text-sm text-text-main dark:text-gray-300">Mike Smith</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBWOsb_SLfikn037mxu9pvSb81mH0CBmSiwofS43koFWbO_XOtR8jk9HxzyREpfj4nHgPgFKAxhI39ZXe6Oj49aisYcHPlaRMvyML95lq2QqjG8vZ6qsGEz4omVRE5TIggnj16E_yMlpJcdn3fIHPbkUpwNs4QJ3SY7s27kt6f0lvZMFCrzMo1QcuXYyOKVwQ_mEH6__eXAOstih7tWgZDU_Id6RycMwNdrghLyz4zny4T9xY1B0o70izEtChuEfRI36JDhkkPaeoQ")' }}></div>
                    <div className="absolute bottom-0 right-0 size-3 bg-accent rounded-full border-2 border-surface-light dark:border-surface-dark"></div>
                  </div>
                  <p className="font-medium text-sm text-text-main dark:text-gray-300">Anna Lee</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default GroupPage;
