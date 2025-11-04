import React, { useState } from 'react';

const SettingsPage = () => {
  const [twoFactorAuth, setTwoFactorAuth] = useState(true);
  const [privateProfile, setPrivateProfile] = useState(false);

  return (
    <div className="font-display bg-background-light dark:bg-background-dark min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center p-4 sm:p-6 lg:p-8">
            <div className="layout-content-container flex w-full max-w-7xl flex-1 flex-col md:flex-row gap-8">
              {/* SideNavBar */}
              <aside className="w-full md:w-64 lg:w-72 flex-shrink-0">
                <div className="flex h-full flex-col justify-between rounded-lg bg-white p-4 dark:bg-background-dark dark:border dark:border-white/10">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbI_VqFB7TC8Pk-sp9HFA0WhVTt9f34rwokUvAIJ9sb5y4hnIBvmL47q2XSEKYE9JfNsSYmQHTTmTD8YrO9aFfagthAhipJ3hxnf3cMTzFpTO9jFChe5WUKpNmGDcSsZdShEu8bA82HPqn_ZWmIZHTk0H87uARXNa6E6Ay1TXGNF1fa_qCLxBmsSdT1Mwa-g1tavYzYhhl0AEOm94bEWGhE2X3VRdmeUfZeuLX0soqqqchOB9aiJuGoYhLBuSZJhISQi6mZYqrzeg")' }}></div>
                      <div className="flex flex-col">
                        <h1 className="text-text-primary dark:text-white text-base font-medium leading-normal">Alex Drake</h1>
                        <p className="text-text-secondary dark:text-gray-400 text-sm font-normal leading-normal">View Profile</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                      <a className="flex items-center gap-3 px-3 py-2 rounded-full bg-primary/10 text-primary" href="#">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                        <p className="text-sm font-medium leading-normal">Account</p>
                      </a>
                      <a className="flex items-center gap-3 px-3 py-2 rounded-full text-text-primary dark:text-white hover:bg-black/5 dark:hover:bg-white/5" href="#">
                        <span className="material-symbols-outlined">shield</span>
                        <p className="text-sm font-medium leading-normal">Privacy</p>
                      </a>
                      <a className="flex items-center gap-3 px-3 py-2 rounded-full text-text-primary dark:text-white hover:bg-black/5 dark:hover:bg-white/5" href="#">
                        <span className="material-symbols-outlined">visibility_off</span>
                        <p className="text-sm font-medium leading-normal">Content & Safety</p>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <a className="flex items-center gap-3 px-3 py-2 rounded-full text-text-primary dark:text-white hover:bg-black/5 dark:hover:bg-white/5" href="#">
                      <span className="material-symbols-outlined">help_center</span>
                      <p className="text-sm font-medium leading-normal">Help Center</p>
                    </a>
                    <a className="flex items-center gap-3 px-3 py-2 rounded-full text-text-primary dark:text-white hover:bg-black/5 dark:hover:bg-white/5" href="#">
                      <span className="material-symbols-outlined">logout</span>
                      <p className="text-sm font-medium leading-normal">Logout</p>
                    </a>
                  </div>
                </div>
              </aside>
              {/* Main Content */}
              <main className="flex-1 flex flex-col gap-8">
                {/* PageHeading */}
                <div className="flex flex-wrap justify-between gap-3 p-4">
                  <div className="flex min-w-72 flex-col gap-3">
                    <p className="text-text-primary dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Account Settings</p>
                    <p className="text-text-secondary dark:text-gray-400 text-base font-normal leading-normal max-w-xl">Manage your profile, login, and account details to keep your information secure and up-to-date.</p>
                  </div>
                </div>
                {/* Accordion Sections */}
                <div className="flex flex-col gap-6 p-4">
                  {/* Accordions: Login & Security */}
                  <details className="flex flex-col border-t border-t-border-color dark:border-t-white/10 py-2 group" open>
                    <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                      <p className="text-text-primary dark:text-white text-lg font-bold leading-normal">Login & Security</p>
                      <span className="material-symbols-outlined text-text-primary dark:text-white group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="flex flex-col gap-4 pt-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-text-primary dark:text-gray-300" htmlFor="email">Email Address</label>
                        <input className="rounded-lg border-border-color dark:border-white/20 dark:bg-background-dark/50 dark:text-white focus:ring-primary focus:border-primary" id="email" type="email" value="alex.drake@email.com" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-text-primary dark:text-gray-300" htmlFor="password">Password</label>
                        <input className="rounded-lg border-border-color dark:border-white/20 dark:bg-background-dark/50 dark:text-white focus:ring-primary focus:border-primary" id="password" type="password" value="••••••••••••" />
                      </div>
                      <div className="flex items-center gap-4 bg-transparent min-h-[72px] py-2 justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-text-primary dark:text-white flex items-center justify-center rounded-lg bg-black/5 dark:bg-white/10 shrink-0 size-12">
                            <span className="material-symbols-outlined">phonelink_lock</span>
                          </div>
                          <div className="flex flex-col justify-center">
                            <p className="text-text-primary dark:text-white text-base font-medium leading-normal line-clamp-1">Two-Factor Authentication</p>
                            <p className="text-text-secondary dark:text-gray-400 text-sm font-normal leading-normal line-clamp-2">Add an extra layer of security to your account.</p>
                          </div>
                        </div>
                        <div className="shrink-0">
                          <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-border-color dark:bg-white/20 p-0.5 has-[:checked]:justify-end has-[:checked]:bg-secondary">
                            <div className="h-full w-[27px] rounded-full bg-white transition-transform" style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.05) 0px 2px 1px' }}></div>
                            <input checked={twoFactorAuth} onChange={() => setTwoFactorAuth(!twoFactorAuth)} className="invisible absolute" type="checkbox" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </details>
                  {/* Accordions: Account Management */}
                  <details className="flex flex-col border-t border-t-border-color dark:border-t-white/10 py-2 group">
                    <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                      <p className="text-text-primary dark:text-white text-lg font-bold leading-normal">Account Management</p>
                      <span className="material-symbols-outlined text-text-primary dark:text-white group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="flex flex-col gap-4 pt-4">
                      <p className="text-text-secondary dark:text-gray-400 text-sm font-normal leading-normal pb-2">Here you can manage your account status, including deactivation or permanent deletion. Please be careful, as these actions cannot be undone.</p>
                      <div className="flex gap-4">
                        <button className="px-4 py-2 text-sm font-medium text-text-primary dark:text-white bg-black/5 dark:bg-white/10 rounded-lg hover:bg-black/10 dark:hover:bg-white/20">Deactivate Account</button>
                        <button className="px-4 py-2 text-sm font-medium text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50">Delete Account</button>
                      </div>
                    </div>
                  </details>
                  {/* Section for Privacy */}
                  <div className="mt-8">
                    {/* PageHeading for Privacy */}
                    <div className="flex flex-wrap justify-between gap-3 p-4">
                      <div className="flex min-w-72 flex-col gap-3">
                        <p className="text-text-primary dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Privacy Controls</p>
                        <p className="text-text-secondary dark:text-gray-400 text-base font-normal leading-normal max-w-xl">Control how your information is seen and used across HUMANOSVERSE. Your privacy is important to us.</p>
                      </div>
                    </div>
                    {/* SectionHeader */}
                    <h2 className="text-text-primary dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Profile Visibility</h2>
                    {/* ListItem with Toggle */}
                    <div className="flex flex-col divide-y divide-border-color dark:divide-white/10">
                      <div className="flex items-center gap-4 bg-transparent px-4 min-h-[72px] py-2 justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-text-primary dark:text-white flex items-center justify-center rounded-lg bg-black/5 dark:bg-white/10 shrink-0 size-12">
                            <span className="material-symbols-outlined">lock</span>
                          </div>
                          <div className="flex flex-col justify-center">
                            <p className="text-text-primary dark:text-white text-base font-medium leading-normal line-clamp-1">Make Profile Private</p>
                            <p className="text-text-secondary dark:text-gray-400 text-sm font-normal leading-normal line-clamp-2">Only people you approve can see your profile and posts.</p>
                          </div>
                        </div>
                        <div className="shrink-0">
                          <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-border-color dark:bg-white/20 p-0.5 has-[:checked]:justify-end has-[:checked]:bg-secondary">
                            <div className="h-full w-[27px] rounded-full bg-white transition-transform" style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.05) 0px 2px 1px' }}></div>
                            <input checked={privateProfile} onChange={() => setPrivateProfile(!privateProfile)} className="invisible absolute" type="checkbox" />
                          </label>
                        </div>
                      </div>
                      {/* ListItem with Select */}
                      <div className="flex items-center gap-4 bg-transparent px-4 min-h-[72px] py-2 justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-text-primary dark:text-white flex items-center justify-center rounded-lg bg-black/5 dark:bg-white/10 shrink-0 size-12">
                            <span className="material-symbols-outlined">group</span>
                          </div>
                          <div className="flex flex-col justify-center">
                            <p className="text-text-primary dark:text-white text-base font-medium leading-normal line-clamp-1">Who can see your posts?</p>
                            <p className="text-text-secondary dark:text-gray-400 text-sm font-normal leading-normal line-clamp-2">Choose the default audience for your content.</p>
                          </div>
                        </div>
                        <div className="shrink-0">
                          <select className="rounded-lg border-border-color dark:border-white/20 dark:bg-background-dark/50 dark:text-white focus:ring-primary focus:border-primary text-sm">
                            <option>Everyone</option>
                            <option>Friends Only</option>
                            <option>Only Me</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end p-4 border-t border-border-color dark:border-t-white/10 mt-auto">
                  <div className="flex gap-4">
                    <button className="px-6 py-2 text-sm font-semibold text-text-primary dark:text-white bg-black/5 dark:bg-white/10 rounded-lg hover:bg-black/10 dark:hover:bg-white/20">Cancel</button>
                    <button className="px-6 py-2 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary/90">Save Changes</button>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
