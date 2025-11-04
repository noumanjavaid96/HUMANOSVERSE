import React from 'react';

const ChatPage = () => {
  return (
    <div className="font-display bg-brand-background text-text-primary h-screen w-full antialiased">
      <div className="flex h-full w-full flex-row">
        {/* Left Column: Conversation List */}
        <div className="flex w-full max-w-sm flex-shrink-0 flex-col border-r border-gray-200 bg-white p-4">
          {/* Header */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuACaLIicWU0iwsAO8sdEi3vHMkHRNX8OZqkGjOGL0hPaHxJDunVjLorxC_QkXsC0QwKaTnutxwUx3SrtOvRAj-bPqCkun4QDdyjAhN1RXnIksT7dfyBQqOC_jn5wfHkwAAJmqDuLMawOStw4O-ACuPHvFOjkVtJhaxwVKW-CHwl2TxATimb0ctj4R0LJzYjTymsBDKVhN8c5G_cpquQlLUywhWobkb6aEuqSQ_EG9qcHn8CUbbVG3vg34tDyWDkGlGLJhRd2TJw5sg")' }}></div>
              <h1 className="text-text-primary text-xl font-bold">Chats</h1>
            </div>
            <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
              <span className="material-symbols-outlined">edit_square</span>
            </button>
          </div>
          {/* Search Bar */}
          <div className="mb-4">
            <label className="flex flex-col h-12 w-full">
              <div className="flex w-full flex-1 items-stretch rounded-full h-full">
                <div className="text-text-secondary flex border-none bg-gray-100 items-center justify-center pl-4 rounded-l-full border-r-0">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full text-text-primary focus:outline-0 focus:ring-0 border-none bg-gray-100 focus:border-none h-full placeholder:text-text-secondary px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" placeholder="Search users or groups" />
              </div>
            </label>
          </div>
          {/* Conversation List */}
          <div className="flex-grow overflow-y-auto -mr-4 pr-4">
            {/* Active Conversation Item */}
            <div className="flex items-center gap-4 rounded-lg bg-brand-primary/10 px-4 min-h-[72px] py-2 justify-between cursor-pointer mb-2">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBxHbOGXHzhRogoRmay0g1zThUxZxE1Jm-R-MV5tA5MXnRrqyF2aE9Qlbq36KtrPiFyW_EWQsIU6GiyLecpPCdJFsJpzzL-1KLox9KWvvvSddtUZCBmESdDKRl5OT5aW5BliCFizil3QJ2yEVunDH-nLAkJLZxAf2TR8gjB4Xb01RWJTOnA7gTTcNK7o9Ku3levYwIBiKlISe_hIR4YaWNqfghFUJSn_M_6psMmKTZfvops1kfWVK6jSas3JcBh-8kmLZ1ciIxFd4o")' }}></div>
                  <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-brand-secondary"></div>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-text-primary text-base font-medium leading-normal line-clamp-1">Alex Chen</p>
                  <p className="text-brand-primary text-sm font-medium leading-normal line-clamp-2">Okay, sounds good! I'll be there.</p>
                </div>
              </div>
              <div className="shrink-0 flex flex-col items-end gap-1">
                <p className="text-text-secondary text-xs font-normal leading-normal">10:45 AM</p>
                <div className="flex size-6 items-center justify-center rounded-full bg-brand-primary text-white text-xs font-bold">2</div>
              </div>
            </div>
            {/* Conversation Item */}
            <div className="flex items-center gap-4 hover:bg-gray-100 rounded-lg px-4 min-h-[72px] py-2 justify-between cursor-pointer mb-2">
              <div className="flex items-center gap-4">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB3-h4hDeX1_R0z0EA1tpFYUyw1HoY4fjX8M_sxmlXZvogr17TX2YFypnjP0V3p2aD1kyQlAEdVQStCBidTuoH3XbPbgXBKnoeODJm6RJra9PflpOEUXvuGIK-UplmzshHv0mU8VwWrtSHNGZuhGmjwcrszJ4xgpSZuOn9-o68WWsZcq3WSPGFW_cnINvXuWQklEyDdg65R4Y84Ryf9CYI4QsheFlSQghyDLQnqhSuHqH_ObP0s_kLBemXCsXA_5X_TAC69os-NmSI")' }}></div>
                <div className="flex flex-col justify-center">
                  <p className="text-text-primary text-base font-medium leading-normal line-clamp-1">Design Team</p>
                  <p className="text-text-secondary text-sm font-normal leading-normal line-clamp-2">You: See you then!</p>
                </div>
              </div>
              <div className="shrink-0"><p className="text-text-secondary text-xs font-normal leading-normal">10:42 AM</p></div>
            </div>
            {/* Conversation Item Typing */}
            <div className="flex items-center gap-4 hover:bg-gray-100 rounded-lg px-4 min-h-[72px] py-2 justify-between cursor-pointer mb-2">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDFiV5-jMk5hFIzuYc8oCkqorOqPkr0et-EpYRuAYOKky9yAT_6RvwEGUwNpxD6zsTXlTIjU7W_EEsMHvL70pXRbReindXP8G47kIvwDelfSwoPDvJwclKwmrBlWby1MdEYNv_A7aqHsRY3x0CH3slUahhGyWzr0DqIJ8dyj7AN4Ol2kfIxrdIUwod1SGxwHC7LpBMDrnlGFRvyGHg5rDsGCS7JpQEs0jTwgnf0zHS7vliv7xMvh7eY_LRiZn5b2mFJTIdIZaubiUc")' }}></div>
                  <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-brand-secondary"></div>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-text-primary text-base font-medium leading-normal line-clamp-1">Samantha Bee</p>
                  <p className="text-brand-secondary text-sm font-normal leading-normal line-clamp-2">Samantha is typing...</p>
                </div>
              </div>
            </div>
            {/* Conversation Item */}
            <div className="flex items-center gap-4 hover:bg-gray-100 rounded-lg px-4 min-h-[72px] py-2 justify-between cursor-pointer mb-2">
              <div className="flex items-center gap-4">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDKps85IzNBkTqTAxHAqXfsn23NBR_JfsLE-TcmXNHaB86r_AudsKbJ8opI8AaplvBr9AT-bymeuTv3BgcutcwgjvNBhczCYFAN1fM3g4u-5LcSCHALj0SkSs2qbm-SFQADj3GWGLsx-QSU9QIlhv9cCKHEPKRJdNmLfsaxrqcnV4hiO8keMkmpC9tOMaDsUxLjkf8l5xG_2qeWIufUsS3RC6tpJ7oHnHOv2jTYKZb1uwF82i6PoZZsHLSL1kjBAofspbsqlQsvvcI")' }}></div>
                <div className="flex flex-col justify-center">
                  <p className="text-text-primary text-base font-medium leading-normal line-clamp-1">Weekend Plans</p>
                  <p className="text-text-secondary text-sm font-normal leading-normal line-clamp-2">Photo</p>
                </div>
              </div>
              <div className="shrink-0"><p className="text-text-secondary text-xs font-normal leading-normal">Yesterday</p></div>
            </div>
            <div className="flex items-center gap-4 hover:bg-gray-100 rounded-lg px-4 min-h-[72px] py-2 justify-between cursor-pointer mb-2">
              <div className="flex items-center gap-4">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD33BfxhT92Jy714mMhAdVEyjYuc5U9UzpPxxwbyEdKF0Ba27wrYHSEdGorMpMpRLrHyEBiCH_mAXBZgPPXfJf7jc0r7ZMLgoXNkCpdYEuk21aYtTwc6ZhbssXn3sUjNXzQ5KmKZFgAN17a16Z8YckbewqzYxl94FoF0H9efyLoNoeu-no8nrCA57Ni6xwSNeF23gjHe_xLKXh6IhzCPYqIBSkyU8fGadATgHhCxveApoxHWPpl743HkaYySyx67Q_ikNMJdp2cwIE")' }}></div>
                <div className="flex flex-col justify-center">
                  <p className="text-text-primary text-base font-medium leading-normal line-clamp-1">Mark Johnson</p>
                  <p className="text-text-secondary text-sm font-normal leading-normal line-clamp-2">Sounds great! Talk to you later.</p>
                </div>
              </div>
              <div className="shrink-0"><p className="text-text-secondary text-xs font-normal leading-normal">Yesterday</p></div>
            </div>
          </div>
        </div>
        {/* Center Column: Chat Window */}
        <div className="flex flex-1 flex-col">
          {/* Chat Header */}
          <div className="flex h-20 items-center justify-between border-b border-gray-200 bg-white px-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDdc7YmY0tgsHg0MzRDGSin8hcdOD_1bUiAChwnoVuw0g4WEURxRPwlaPkSNcpqY0_5dNepmUZ0lq-dnbDnH-i_irHoFfozt8NjyUgLQBd0gorY1ZgoIVmkDwwdWzxSg4daN9bsUhLRra1am4eofM8o4znhy2yKJAMu5WPFvizZDl4eW4ekGNIIacLfOrUaBzuhrAWrGC6W8gz-7uForqZ3BodWoz37AsFbpDPUy8MLk6Yfy2vaSsVaFbp4uuGDQ_D-5oq5WLC0z08")' }}></div>
                <div className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-brand-secondary"></div>
              </div>
              <div>
                <p className="text-lg font-bold text-text-primary">Alex Chen</p>
                <p className="text-sm text-brand-secondary">Online</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex h-11 w-11 items-center justify-center rounded-full text-text-secondary hover:bg-gray-100">
                <span className="material-symbols-outlined text-2xl">call</span>
              </button>
              <button className="flex h-11 w-11 items-center justify-center rounded-full text-text-secondary hover:bg-gray-100">
                <span className="material-symbols-outlined text-2xl">videocam</span>
              </button>
              <button className="flex h-11 w-11 items-center justify-center rounded-full text-text-secondary hover:bg-gray-100">
                <span className="material-symbols-outlined text-2xl">more_vert</span>
              </button>
            </div>
          </div>
          {/* Message Area */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="flex flex-col gap-4">
              {/* Date Separator */}
              <div className="flex items-center justify-center">
                <span className="rounded-full bg-gray-200 px-3 py-1 text-xs text-text-secondary">Today</span>
              </div>
              {/* Incoming Message */}
              <div className="flex items-start gap-3">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 flex-shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuATcPo9Yam1aFp--D0mj9spYqIfRU68I0ej5R5R9er6GzUBgkwssXt35767pJJJJbYQNCL5a7txLxuy5CLbLlR650dHSodCCj7A78Ez8hPmDF_PzVRXEbeRIn9C7J7zfetX94JuwN5WDdiAdNAkgTXGDkKW1Kp-FmQacK4G7ASixJgof-5UfWHxRQCo2X8j1m1bfhfakzxlOFxk--mOm2Eb5TOSyIE-RDnbrs3UhB1Oduul9AcbwIa9gUKLcRwYKgESkbPqBMlEFc8")' }}></div>
                <div className="flex flex-col items-start gap-1">
                  <div className="max-w-md rounded-lg rounded-tl-none bg-bubble-incoming p-3">
                    <p className="text-base leading-relaxed text-text-primary">Hey! Are you free for a quick call this afternoon? I wanted to discuss the new project mockups.</p>
                  </div>
                  <span className="text-xs text-text-secondary">10:43 AM</span>
                </div>
              </div>
              {/* Outgoing Message */}
              <div className="flex flex-row-reverse items-start gap-3">
                <div className="flex flex-col items-end gap-1">
                  <div className="max-w-md rounded-lg rounded-tr-none bg-brand-primary/20 p-3">
                    <p className="text-base leading-relaxed text-text-primary">Hi Alex! Absolutely. How about 2:30 PM? Should be free then.</p>
                  </div>
                  <span className="text-xs text-text-secondary">10:44 AM</span>
                </div>
              </div>
              {/* Incoming Ephemeral Message */}
              <div className="flex items-start gap-3">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 flex-shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCHXLlwAn1m7wBAqGvmFdI4j3nMT2OTTznRtQrBCmIcIbB9PcEzlWsyYhsq5gm_j8peNtBp3o7bLoa5Ym25CiRG0TZnK1w6m9AhMLwFN5tfGbRO0TddoH0bjA5Acmsfx0BQY8gP-O7yZo7xwz69Qm-a0P0jQkpN6gb_R3Csa2bUgFfDK4dgQ5js7m_tdyrfbx4dJR-SvQkAmFqck2uJ4BkOCgvq6PgNo37uknjBp38itc8nku0cVJM7NszxLQdIJPGBrNHCDK5gbzY")' }}></div>
                <div className="flex flex-col items-start gap-1">
                  <div className="flex items-end gap-2">
                    <div className="max-w-md rounded-lg rounded-tl-none bg-bubble-incoming p-3">
                      <p className="text-base leading-relaxed text-text-primary">Okay, sounds good! I'll be there.</p>
                    </div>
                    <span className="material-symbols-outlined text-sm text-text-secondary">timer</span>
                  </div>
                  <span className="text-xs text-text-secondary">10:45 AM</span>
                </div>
              </div>
              {/* Outgoing Image Message */}
              <div className="flex flex-row-reverse items-start gap-3">
                <div className="flex flex-col items-end gap-1">
                  <div className="max-w-xs rounded-lg bg-brand-primary/20 p-2">
                    <img alt="A photo of a laptop with code on the screen and a coffee cup" className="rounded-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2Ma3odD56SVThjtrvgNvWnzIr3haO3vzcIHFgOiwzQE0ZTopRgPdGcU0BEdxLF_k00f6y_VJUDpDVkEZpEYWvyOAVm0qPPiHvdMedzn82RK_PLI41fkCwzGbhLa4GHvPMYB8kg60nV8jQmhMSY8EldH5Z_Bl6iykMdPRFeO-mkv9OPQEYiPF71TcwiqUAbraggqbBct1kLitzLLwskjBvD121mbY4vuWB9_RTRJrdsrQ3LPeZ33l0dwWzJ_iAXfExudDUUFEfV1Q" />
                  </div>
                  <span className="text-xs text-text-secondary">10:46 AM</span>
                </div>
              </div>
            </div>
          </div>
          {/* Message Input */}
          <div className="border-t border-gray-200 bg-white px-6 py-4">
            <div className="flex items-center gap-2 rounded-lg bg-gray-100 p-2">
              <button className="flex h-10 w-10 items-center justify-center rounded-full text-text-secondary hover:bg-gray-200">
                <span className="material-symbols-outlined text-2xl">add_photo_alternate</span>
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full text-text-secondary hover:bg-gray-200">
                <span className="material-symbols-outlined text-2xl">sentiment_satisfied</span>
              </button>
              <input className="form-input flex-1 border-none bg-transparent px-2 text-text-primary placeholder:text-text-secondary focus:ring-0" placeholder="Type a message..." />
              <button className="flex h-10 w-10 items-center justify-center rounded-full text-text-secondary hover:bg-gray-200">
                <span className="material-symbols-outlined text-2xl">history_toggle_off</span>
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-white">
                <span className="material-symbols-outlined text-2xl">send</span>
              </button>
            </div>
          </div>
        </div>
        {/* Right Column: Conversation Details (Optional) */}
        <div className="hidden w-full max-w-sm flex-shrink-0 flex-col border-l border-gray-200 bg-white p-6 xl:flex">
          <div className="flex flex-col items-center text-center">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24 mb-4" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAcOWgaMWWVYnfi-NGeEI5JTIKVuWIP1piIbHxW4Rr-NvEE_ZSKOkBUeG5fOfZ41BTx_nEgu2ri3HiV07A1X5jigYgl9or5Wyh4HtCbXseX8XLAkX9Fl8HzrQYfGFAPtAVqssKkx-EMPd6UsTVd1-61JVMBNKLNjE7-JK0Z6-rzALGClpxOgnzXOKA_1SMfR244eMYiE6KwiLHEFGdxsn_ixLx4bVb40-OBk1yL-9GDROd1SteslX_vJBC3cMaqiY9OlVz0C_I6mgc")' }}></div>
            <h2 className="text-xl font-bold text-text-primary">Alex Chen</h2>
            <p className="text-sm text-text-secondary">UX Designer @ TechCorp</p>
          </div>
          <div className="my-6 h-px bg-gray-200"></div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase text-text-secondary tracking-wider">Shared Media</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhQ_ZJWptdBJlsGl6vgZTZXn4xhUJRhkxZTuPbCP27SvbGDKNMpPYPnZ-suvu7Jy_WudlPJ29g5wvXqkMFP17Wru-0yDhlurGU2iAG8i9AjYEiKRVLXYzFtNgr3uF3HChd4L-ToD2OnXimnIIx7_RVoZrVo9itLiUobhDFwHJuudgx9cF48Nd0sJmwGhZ_RHfINFls0dQDYs89O0SzGnQJvjZ9Q6TQkpuR_JWXtAtMzPQkot46Ii16Iv5c39Tn7RsSKm0vPlhSp7k")' }}></div>
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBpfg0Xh5_RNamCInJy8_0c_KEFS4fOnpkc3eW4Jru0A-3n3pbbYrAGG2XJLZDt2_keStFiIJwoWiYBPIizzycvY7K9HjVjlzr4OtoQNC5T12sZvWy-f4jJDlAukvhnlkB7TLuqQoq0YtFac650BpvODfSBubYumRolVn5WQUIlzUqqWDR8buevs1plo9u29vUDUu4Ffbo3JYfvXRJTrFWLcpoFxHu52SPuq2ZpoCXip_WXBAKIiv5OkusIw9JpyBAbZJIhZjXNapc")' }}></div>
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAnyMgOHzdwPchu2TGZCDCCsPs1LEr7QDDhl5EWeKXSMC3iRrdX84f71xoP9ZynztDbq28tG8IpA3oqOGuntk-TEAnvKRoIT5jo8opBTkHHPDuf6qjhegBMsDglw8kSdrqc1e0g4r4hLbCVsOOe69K9FnTSU4vbFUS7Xkq8rsWgvRVynckZsFF6G3ORiKt43BcZNVts4PRjBTPonKmYw0Tiv6Pc9_-XAVfPQX12XcttNRkG6IqyoR0Hri_3Xhbm-HNB9Qr6r_JEAgU")' }}></div>
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWmometTKednZyn3h5fUomAT8GV4oq9_LRv0quAwQ39vT5zQyOM7-T57whsGBES7R81PLWT25NzY8uzzkW6ga51CQ0pMowd5cmdVDw0DMUQhtv9u74D9KEobza8XjvzU15XofFY6tk5WQLOAm4lI8Njnr6lEBEZIdmaUqwGPJ3ch-gBkoNfoIvygoQK8Wazdk6f-3K_R7KjlWDoMlXr-E3zu8XaO2m6sxK115fMLQO8SEb7Ba9m8xINnUqIcdnSCbt7dV7ZuIPQ_w")' }}></div>
              <div className="flex items-center justify-center bg-gray-100 rounded-md text-text-secondary text-sm font-medium">+12 more</div>
            </div>
          </div>
          <div className="my-6 h-px bg-gray-200"></div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase text-text-secondary tracking-wider">Pinned Messages</h3>
            <div className="space-y-3">
              <div className="rounded-lg bg-gray-100 p-3">
                <p className="text-sm text-text-primary line-clamp-2">"Let's sync up tomorrow morning. I've sent the calendar invite."</p>
                <p className="text-xs text-text-secondary mt-1">- You, Yesterday</p>
              </div>
            </div>
          </div>
          <div className="my-6 h-px bg-gray-200"></div>
          <div className="space-y-2">
            <button className="flex w-full items-center gap-3 rounded-lg p-2 text-left text-text-primary hover:bg-gray-100">
              <span className="material-symbols-outlined text-xl text-text-secondary">notifications_off</span>
              <span>Mute Notifications</span>
            </button>
            <button className="flex w-full items-center gap-3 rounded-lg p-2 text-left text-red-600 hover:bg-red-50">
              <span className="material-symbols-outlined text-xl">block</span>
              <span>Block User</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
