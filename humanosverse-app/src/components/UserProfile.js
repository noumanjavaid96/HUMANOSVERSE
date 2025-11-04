import React from 'react';

const UserProfile = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-black/10 dark:border-white/10 bg-background-light/80 dark:bg-background-dark/80 px-4 sm:px-10 py-3 backdrop-blur-sm">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-4 text-slate-800 dark:text-slate-200">
                <div className="size-6 text-primary">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
                  </svg>
                </div>
                <h2 className="text-slate-800 dark:text-slate-200 text-lg font-bold leading-tight tracking-[-0.015em]">HUMANOSVERSE</h2>
              </div>
              <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
                <div className="flex w-full flex-1 items-stretch rounded-full h-full">
                  <div className="text-slate-500 dark:text-slate-400 flex bg-slate-200/50 dark:bg-slate-800 items-center justify-center pl-4 rounded-l-full">
                    <span className="material-symbols-outlined text-xl">search</span>
                  </div>
                  <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-full text-slate-800 dark:text-slate-200 focus:outline-0 focus:ring-0 border-none bg-slate-200/50 dark:bg-slate-800 h-full placeholder:text-slate-500 dark:placeholder:text-slate-400 px-4 text-base font-normal leading-normal" placeholder="Search" value="" />
                </div>
              </label>
            </div>
            <div className="flex flex-1 justify-end gap-2 sm:gap-4 md:gap-8">
              <div className="hidden lg:flex items-center gap-6">
                <a className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary" href="#">Home</a>
                <a className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary" href="#">Explore</a>
                <a className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary" href="#">Messages</a>
                <a className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary" href="#">Notifications</a>
              </div>
              <button className="flex min-w-fit sm:min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Create Post</span>
              </button>
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDb6jriMFVdXEdQE-3tnfbcQ_jEjK2kO_TsttlEvutoU_1SJ3T9h1WD4_pn916xzgNJuHtKPqMbBZ4ObxSYt7tFkMA4jGIQC39ukgbEBsOZi9eFEuC_ToRvuuSnpVirC2E2OYeda_PWlspbmIz0ps7q8SeG5vWt9oR59MSZlMA3si41anuCCjsM51oWcb2PFAAXOffAPlD7LIZ18MXiq-zQ5kvQoumxlBPBMdyYxNRxL9KP6FsYtD93vw4Tl1B8-jXMoF8-PFux9u4")' }}></div>
            </div>
          </header>
          <main className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-7xl mx-auto">
            <div className="w-full mb-8">
              <div className="relative rounded-lg bg-center bg-no-repeat aspect-[3/1] bg-cover w-full h-48 md:h-64 overflow-hidden" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAfg84CeuTnlUdP6ckIpOq7K04ac0YdhqenCBiPNrJ-HcXBRpiBGYZFvKR8Y1NpRjpc6ef_pe6S-_VudD3hLFbUB1wGbypoEB-LB4S0tbZLMmAAN9xVugHFg8JEkHLRDREgpNF1Z0nxFcIMaI0E56Q8w8Z_qk9GNBoV0YUY1NcPlnVruT92Xn37C4sNrTjJQgl5bgp_QlxRzh2YmSbDEOSAFuPUWM_Ib7JP5gGkj0-Nc7QJMS9yE9GIvfuhc7mzdntLXZVhNgtw9YE")' }}></div>
              <div className="flex flex-col md:flex-row items-start md:items-end -mt-16 md:-mt-20 px-4 sm:px-6">
                <div className="relative bg-center bg-no-repeat aspect-square bg-cover rounded-full size-32 md:size-40 border-4 border-background-light dark:border-background-dark" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBBw9m4xknSjx_kNciwTD4OGp2ro7rUuF5QRjly77ni4h2iOCvvwwmun3jbnZZ4VA4hv0tWAbzBqhTHc8iyIITTfBMGEa7LNXzaHnkh0_Kr7_jSfdqe74I6WAhwBvnrd-VoEeiNBENJvJRhb98c7IbGrH-2v-gHaDq3GxnT4wRJb6uOghlJ_s4GYiz4NPkdjpbpPj3_QK64vcQ4PvPngsX4ZJUksVKtKQ-QAkJwVcgtRILB9CFsb_NJ5OfyUHfPBLBNHpLTCxwvk0k")' }}></div>
                <div className="flex-1 flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-4 md:ml-6">
                  <div className="flex flex-col justify-center">
                    <p className="text-slate-800 dark:text-slate-100 text-[22px] font-bold leading-tight tracking-[-0.015em]">Aria Montgomery</p>
                    <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">@aria_creates</p>
                    <p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-normal mt-1">Crafting digital magic and exploring new worlds.</p>
                  </div>
                  <div className="flex items-center gap-3 mt-4 md:mt-0 w-full md:w-auto">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-slate-200/60 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-bold leading-normal tracking-[0.015em] flex-1">
                      <span className="truncate">Follow</span>
                    </button>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] flex-1">
                      <span className="truncate">Message</span>
                    </button>
                    <button className="flex min-w-fit cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-slate-200/60 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                      <span className="material-symbols-outlined">more_horiz</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white dark:bg-slate-900/50 rounded-lg p-6 shadow-sm">
                  <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">About Me</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-relaxed">A detailed biography about the user, discussing their passions for digital art, mindfulness, indie games, and creative writing. They share their journey and what they hope to contribute to the HUMANOSVERSE community.</p>
                </div>
                <div className="bg-white dark:bg-slate-900/50 rounded-lg p-6 shadow-sm">
                  <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-4">Interests</h3>
                  <div className="flex gap-2 p-1 flex-wrap">
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-blue-100 dark:bg-blue-900/50 px-4">
                      <p className="text-blue-800 dark:text-blue-200 text-sm font-medium leading-normal">Digital Art</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-green-100 dark:bg-green-900/50 px-4">
                      <p className="text-green-800 dark:text-green-200 text-sm font-medium leading-normal">Mindfulness</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-yellow-100 dark:bg-yellow-900/50 px-4">
                      <p className="text-yellow-800 dark:text-yellow-200 text-sm font-medium leading-normal">Indie Games</p>
                    </div>
                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-purple-100 dark:bg-purple-900/50 px-4">
                      <p className="text-purple-800 dark:text-purple-200 text-sm font-medium leading-normal">Creative Writing</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-900/50 rounded-lg p-6 shadow-sm">
                  <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-4">Stats</h3>
                  <div className="flex justify-around text-center">
                    <div>
                      <p className="text-xl font-bold text-slate-800 dark:text-slate-100">1.2k</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Followers</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-slate-800 dark:text-slate-100">84</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Posts</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-slate-800 dark:text-slate-100">12</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Projects</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="flex justify-between items-center mb-6">
                  <div className="border-b border-slate-200 dark:border-slate-700">
                    <nav aria-label="Tabs" className="-mb-px flex space-x-6">
                      <a className="border-primary text-primary whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm" href="#">Posts</a>
                      <a className="border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm" href="#">Projects</a>
                      <a className="border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600 whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm" href="#">Collections</a>
                    </nav>
                  </div>
                  <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-200/60 dark:bg-slate-800 pl-4 pr-3">
                    <p className="text-slate-800 dark:text-slate-200 text-sm font-medium leading-normal">Public Profile</p>
                    <span className="material-symbols-outlined text-base">public</span>
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-slate-900/50 rounded-lg overflow-hidden shadow-sm group">
                    <img className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNGdWpQBRlbAcgxaSBTcO2Rr9IPr0H9mMqQl3w1dDSaR2mcp9d9P0izNf5_hNMyvL2x-kCcl7n66lowotoxMWJ57yOXxP74LMbvKmZP5nudF65Yi6Cj09mkxnPpyy-Q-OKkwlQNi5qusU2VCBfn92bjQLrK1c2ecD4E8tDoRANum4ZyVEf5kFWh54nfwyqCgAnMSBIjm-5QqVaXz9H1sBTE5axGvzmZUIUCS3ZoViOdM8c5vl7cOYMRoUMfTgVvtzG3SRYbGTIzYI" />
                    <div className="p-4">
                      <h4 className="font-bold text-slate-800 dark:text-slate-200">Cosmic Drift</h4>
                      <div className="flex items-center gap-4 mt-2 text-slate-500 dark:text-slate-400 text-sm">
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-base">favorite_border</span> 1.1k
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-base">chat_bubble_outline</span> 23
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-slate-900/50 rounded-lg overflow-hidden shadow-sm group">
                    <img className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK3fegEnAoKM1tBs4H8AKGhduPbJam-C-iCk9rBFPHWCZHCX_G1gPFEqPobo4cvEgLSGCNd0jqySBul98bwHYcQjrYConqzo_mdpJq7E9eVUIO8zFQ_EBiSMqCJ72Ioz0TVLbThKmvvnjVRSYz6fQ0wPavLYVwq-sp8kah6IiJdruE5blqFAWlB2EpTq4hl6d1R8Hqwkcuft3LAo5dN8nSIbj2BWPWmmjYPH3YGNWwdi3nVyt8QMHTOV-dfgFAAEmZkMMtt3Oywe0" />
                    <div className="p-4">
                      <h4 className="font-bold text-slate-800 dark:text-slate-200">Floral Dreams</h4>
                      <div className="flex items-center gap-4 mt-2 text-slate-500 dark:text-slate-400 text-sm">
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-base">favorite_border</span> 872
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-base">chat_bubble_outline</span> 15
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-2 bg-white dark:bg-slate-900/50 rounded-lg flex flex-col items-center justify-center p-12 text-center h-80 shadow-sm">
                    <div className="text-primary mb-4">
                      <svg className="h-16 w-16" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200">No Projects Yet</h4>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Aria hasn't shared any projects. Check back later!</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
