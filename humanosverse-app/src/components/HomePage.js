import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-main-light dark:text-text-main-dark min-h-screen">
      <div className="relative flex w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex w-full grow flex-col">
          <div className="flex flex-1 justify-center">
            <div className="flex w-full max-w-7xl flex-row gap-6 px-4 py-8 sm:px-6 lg:px-8">
              {/* Left Sidebar (Navigation) */}
              <aside className="sticky top-8 hidden h-fit w-64 flex-col gap-6 lg:flex">
                <div className="flex items-center gap-3 px-2">
                  <div className="aspect-square size-10 rounded-full bg-primary-accent/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary-accent">group</span>
                  </div>
                  <h1 className="text-lg font-bold">HUMANOSVERSE</h1>
                </div>
                <nav className="flex flex-col gap-2">
                  <a className="flex items-center gap-3 rounded-full bg-primary-accent/20 px-3 py-2 text-primary-accent dark:bg-primary-accent/30" href="#">
                    <span className="material-symbols-outlined">home</span>
                    <p className="text-sm font-bold">Home</p>
                  </a>
                  <a className="flex items-center gap-3 rounded-full px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5" href="#">
                    <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">explore</span>
                    <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">Explore</p>
                  </a>
                  <a className="flex items-center gap-3 rounded-full px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5" href="#">
                    <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">chat_bubble</span>
                    <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">Messages</p>
                  </a>
                  <a className="flex items-center gap-3 rounded-full px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5" href="#">
                    <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">notifications</span>
                    <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">Notifications</p>
                  </a>
                  <a className="flex items-center gap-3 rounded-full px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5" href="#">
                    <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">person</span>
                    <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">Profile</p>
                  </a>
                </nav>
                <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-4 bg-primary-accent text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary-accent/30 transition-transform hover:scale-[1.02]">
                  <span className="truncate">Create Post</span>
                </button>
              </aside>
              {/* Center Column (Main Feed) */}
              <main className="flex min-w-0 flex-1 flex-col gap-4">
                <div className="sticky top-0 z-10 bg-background-light/80 pt-2 backdrop-blur-md dark:bg-background-dark/80">
                  <div className="flex h-10 flex-1 items-center justify-center rounded-full bg-card-light dark:bg-card-dark p-1 border border-black/5 dark:border-white/5">
                    <label className="flex h-full grow cursor-pointer items-center justify-center overflow-hidden rounded-full px-2 text-sm font-medium leading-normal text-text-secondary-light dark:text-text-secondary-dark has-[:checked]:bg-primary-accent/20 has-[:checked]:text-primary-accent dark:has-[:checked]:bg-primary-accent/30">
                      <span className="truncate">For You</span>
                      <input checked="" className="invisible w-0" name="feed-toggle" type="radio" value="For You" />
                    </label>
                    <label className="flex h-full grow cursor-pointer items-center justify-center overflow-hidden rounded-full px-2 text-sm font-medium leading-normal text-text-secondary-light dark:text-text-secondary-dark has-[:checked]:bg-primary-accent/20 has-[:checked]:text-primary-accent dark:has-[:checked]:bg-primary-accent/30">
                      <span className="truncate">Following</span>
                      <input className="invisible w-0" name="feed-toggle" type="radio" value="Following" />
                    </label>
                  </div>
                  <p className="py-3 text-center text-sm font-normal leading-normal text-text-secondary-light dark:text-text-secondary-dark underline">Customize your feed</p>
                  <hr className="border-black/5 dark:border-white/5" />
                </div>
                {/* Content Cards */}
                <div className="flex flex-col gap-4">
                  {/* Card 1 */}
                  <article className="flex flex-col rounded-lg border border-black/5 bg-card-light p-4 dark:border-white/5 dark:bg-card-dark">
                    <div className="flex items-start gap-4">
                      <div className="size-10 shrink-0 rounded-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDCPrm01y1wHx_IU3TlLqs5VLxFD_BpNKm12H9qzf_RZm4F3WpLylTyF5AvhFR3lEpAon-h3JXr6VUcPwmbI09pprgQ8nySIcfr_dT5VM0mpNmwG29wtadmM3i5Dp3UKU1qb--8gwemHcIvVAztSJv-BDZfrl2CZRc9PwTnuqNvb8aeTpEHc1SBCq5XFVa1yM-pLgXJFSGUila5E4JpRJsNGQ255ij-E5a4aZndewdDQT6H287bNyZnQ9UWzvCrA9tKVnIQn5aPe8Q")' }}></div>
                      <div className="flex w-full min-w-0 grow flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-baseline gap-2">
                            <p className="truncate font-bold text-text-main-light dark:text-text-main-dark">Mia Anderson</p>
                            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">@mia_space</p>
                          </div>
                          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">2h ago</p>
                        </div>
                        <p className="text-base font-normal leading-normal text-text-secondary-light dark:text-text-secondary-dark">Exploring the intersection of technology and mindfulness. Just finished a great book on digital wellness! So many insights. 🌿 #MindfulTech</p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <div className="flex cursor-pointer items-center justify-center gap-1.5 rounded-full bg-black/5 px-3 py-1.5 dark:bg-white/5">
                        <span className="material-symbols-outlined text-lg text-rose-500">favorite</span>
                        <p className="text-[13px] font-bold leading-normal text-text-secondary-light dark:text-text-secondary-dark">1.2k</p>
                      </div>
                      <div className="flex cursor-pointer items-center justify-center gap-1.5 rounded-full bg-black/5 px-3 py-1.5 dark:bg-white/5">
                        <span className="material-symbols-outlined text-lg text-amber-500">spark</span>
                        <p className="text-[13px] font-bold leading-normal text-text-secondary-light dark:text-text-secondary-dark">890</p>
                      </div>
                      <div className="flex cursor-pointer items-center justify-center gap-1.5 rounded-full bg-black/5 px-3 py-1.5 dark:bg-white/5">
                        <span className="material-symbols-outlined text-lg text-sky-500">psychology</span>
                        <p className="text-[13px] font-bold leading-normal text-text-secondary-light dark:text-text-secondary-dark">450</p>
                      </div>
                      <div className="flex cursor-pointer items-center justify-center gap-1.5 rounded-full bg-black/5 px-3 py-1.5 dark:bg-white/5">
                        <span className="material-symbols-outlined text-lg text-teal-500">waving_hand</span>
                        <p className="text-[13px] font-bold leading-normal text-text-secondary-light dark:text-text-secondary-dark">312</p>
                      </div>
                      <div className="flex grow justify-end gap-4">
                        <span className="material-symbols-outlined cursor-pointer text-text-secondary-light dark:text-text-secondary-dark">chat_bubble_outline</span>
                        <span className="material-symbols-outlined cursor-pointer text-text-secondary-light dark:text-text-secondary-dark">ios_share</span>
                      </div>
                    </div>
                  </article>
                  {/* Card 2 */}
                  <article className="flex flex-col rounded-lg border border-black/5 bg-card-light p-4 dark:border-white/5 dark:bg-card-dark">
                    <div className="flex items-start gap-4">
                      <div className="size-10 shrink-0 rounded-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAP22iO3zg0Vl-fhXwgvWQ_j69atGLXhQoiX3SLYQWPwug12_fcAVrErkv0aOpyNv_RoaKhYrtkkP3iINt4Q1dZ3S5RhjpydvmTIm0aqaGyp3YF7JQjN4LXUYWgwxc6wFtuR2GVN1zb_nSQyrOWfaZYAQb-2Hqwg56ulskZ4sgMjPenn9DBFBuJFUIF05M-yozkX34aXz5zjrRsCIdIyQtKrIDNERlUnPZMLBavVCdNStuoCTR1Glmwmv8JfDYO3O1eYV6JiI1dOgc")' }}></div>
                      <div className="flex w-full min-w-0 grow flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-baseline gap-2">
                            <p className="truncate font-bold text-text-main-light dark:text-text-main-dark">Carlos Reyes</p>
                            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">@creyes_art</p>
                          </div>
                          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">5h ago</p>
                        </div>
                        <p className="text-base font-normal leading-normal text-text-secondary-light dark:text-text-secondary-dark">Spent the afternoon capturing the city's hidden colors. Sometimes you just have to look up. 🎨</p>
                        <div className="aspect-video w-full overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDARmR2-qcDw-6pJ4ZPyii39VRLgv6EtHE5bgngj753vnudvqzWx7q2qbgDWQ2uysRvewDI8OmAsSw7qcpv9RNmc0Y8MhDAidJSpzq7JpmJ2k3yyXr6uL3ZpX_yn_C3dtifmgJ5ONXWmtaGYhz1nmua9kdbTwyIaHMNcG52unu-IWUlZfH9LzAgq4VlOkdHQbtTI_WC3rAnWLtTQQQnX3PbUkRjueQSD0MBgXIWEW9YcHqRRfl9VjjbV6HhtcE9tDwD9-qdztio660")' }}></div>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <div className="flex cursor-pointer items-center justify-center gap-1.5 rounded-full bg-black/5 px-3 py-1.5 dark:bg-white/5">
                        <span className="material-symbols-outlined text-lg text-rose-500">favorite</span>
                        <p className="text-[13px] font-bold leading-normal text-text-secondary-light dark:text-text-secondary-dark">2.5k</p>
                      </div>
                      <div className="flex cursor-pointer items-center justify-center gap-1.5 rounded-full bg-black/5 px-3 py-1.5 dark:bg-white/5">
                        <span className="material-symbols-outlined text-lg text-amber-500">spark</span>
                        <p className="text-[13px] font-bold leading-normal text-text-secondary-light dark:text-text-secondary-dark">1.1k</p>
                      </div>
                      <div className="flex cursor-pointer items-center justify-center gap-1.5 rounded-full bg-black/5 px-3 py-1.5 dark:bg-white/5">
                        <span className="material-symbols-outlined text-lg text-sky-500">psychology</span>
                        <p className="text-[13px] font-bold leading-normal text-text-secondary-light dark:text-text-secondary-dark">789</p>
                      </div>
                      <div className="flex cursor-pointer items-center justify-center gap-1.5 rounded-full bg-black/5 px-3 py-1.5 dark:bg-white/5">
                        <span className="material-symbols-outlined text-lg text-teal-500">waving_hand</span>
                        <p className="text-[13px] font-bold leading-normal text-text-secondary-light dark:text-text-secondary-dark">540</p>
                      </div>
                      <div className="flex grow justify-end gap-4">
                        <span className="material-symbols-outlined cursor-pointer text-text-secondary-light dark:text-text-secondary-dark">chat_bubble_outline</span>
                        <span className="material-symbols-outlined cursor-pointer text-text-secondary-light dark:text-text-secondary-dark">ios_share</span>
                      </div>
                    </div>
                  </article>
                </div>
              </main>
              {/* Right Sidebar (Discovery) */}
              <aside className="sticky top-8 hidden h-fit w-72 flex-col gap-6 md:flex">
                <div className="relative">
                  <input className="w-full rounded-full border-black/10 bg-black/5 py-2.5 pl-10 pr-4 text-sm dark:border-white/10 dark:bg-white/5" placeholder="Search HUMANOSVERSE" type="search" />
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary-light dark:text-text-secondary-dark">search</span>
                </div>
                <div className="flex flex-col gap-4 rounded-lg border border-black/5 bg-card-light p-4 dark:border-white/5 dark:bg-card-dark">
                  <h3 className="text-base font-bold">Trending Topics</h3>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <p className="font-semibold">#CreativeWellness</p>
                      <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">12.3k posts</p>
                    </li>
                    <li>
                      <p className="font-semibold">#MindfulTech</p>
                      <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">8.7k posts</p>
                    </li>
                    <li>
                      <p className="font-semibold">#CommunityGardens</p>
                      <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">5.1k posts</p>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-4 rounded-lg border border-black/5 bg-card-light p-4 dark:border-white/5 dark:bg-card-dark">
                  <h3 className="text-base font-bold">Who to Follow</h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="size-10 shrink-0 rounded-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBo_oW1hAf64IAoZamATt1FCZqprFZnFK1M4Dk2c2emWUek4yEwv0A_1FivmyOKT99X1i6hgIKcOizqHfomkbNpcw0wnvtXenHWWgEWPjwr3OZBEvus8CFpOvXEitlJGmUy1lRxRPr3aI5gX7rdE4x-_luar6Fk2OyCO7m7YVAN2j6SLG-DGEmBUD-9zevec7VSRwYr0HsS5pHj55d5m3US-VjlQGC1Tvcfadpn689PsTKAb2CjxNJ-vcY8ZQVPj8N7I_ywBnhOOTo")' }}></div>
                      <div className="flex min-w-0 grow flex-col">
                        <p className="truncate font-semibold">Priya Patel</p>
                        <p className="truncate text-sm text-text-secondary-light dark:text-text-secondary-dark">@priya_codes</p>
                      </div>
                      <button className="ml-auto shrink-0 rounded-full bg-secondary-accent px-4 py-1.5 text-sm font-bold text-white">Follow</button>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="size-10 shrink-0 rounded-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCe0MhDlPd8pl1FwxOJrJ6zcgx5lGe9h1uSD81-zpqK4u8AiI2v4As1-UfTaV_zOOO29PNcF1m4XfYF6vTo2LCo4dXIbMZbzB8EVE3UWmjmiXeY_6Mr9AzhtChbPLxM2JuBCRHp6mCbKlvVCkfrH_0WTubxQ0j2FkQQ48dea3p82cPllGR4F1WBnfqvSEgJAl4sPMri_JGba-PR5c_UhuRzP8a-7Ud8sVIwsmf59KOTJofLoZkaQ0IyaULtwgHsht6Zmwd5qAbOVIc")' }}></div>
                      <div className="flex min-w-0 grow flex-col">
                        <p className="truncate font-semibold">Jordan Lee</p>
                        <p className="truncate text-sm text-text-secondary-light dark:text-text-secondary-dark">@jordan_lee_photos</p>
                      </div>
                      <button className="ml-auto shrink-0 rounded-full bg-secondary-accent px-4 py-1.5 text-sm font-bold text-white">Follow</button>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
