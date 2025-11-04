import React, { useState } from 'react';

const CreatePost = () => {
  const [activeTab, setActiveTab] = useState('Text');

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 py-8 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-40 flex flex-1 justify-center">
            <div className="layout-content-container flex flex-col w-full max-w-7xl flex-1">
              <div className="flex flex-wrap justify-between gap-4 items-end mb-8">
                <div className="flex flex-col gap-2">
                  <p className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">What's on your mind?</p>
                  <p className="text-text-light/70 dark:text-text-dark/70 text-base font-normal leading-normal">Create and share your story with the HUMANOSVERSE community.</p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-8 w-full">
                {/* Main Content Area */}
                <main className="flex-1 lg:w-2/3 flex flex-col gap-6">
                  {/* Content Type Tabs */}
                  <div className="pb-3">
                    <div className="flex border-b border-border-light dark:border-border-dark gap-4 sm:gap-8 overflow-x-auto">
                      {['Text', 'Image/Video', 'Audio', 'Live Stream'].map(tab => (
                        <a
                          key={tab}
                          className={`flex shrink-0 flex-col items-center justify-center border-b-[3px] gap-1 pb-[7px] pt-2.5 cursor-pointer ${
                            activeTab === tab
                              ? 'border-primary text-primary'
                              : 'border-transparent text-text-light/50 dark:text-text-dark/50 hover:text-text-light dark:hover:text-text-dark'
                          }`}
                          onClick={() => setActiveTab(tab)}
                        >
                          <span className="material-symbols-outlined text-2xl">
                            {tab === 'Text' && 'edit_square'}
                            {tab === 'Image/Video' && 'photo_camera'}
                            {tab === 'Audio' && 'graphic_eq'}
                            {tab === 'Live Stream' && 'podcasts'}
                          </span>
                          <p className="text-sm font-bold leading-normal tracking-wide">{tab}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                  {/* Active Composer */}
                  {activeTab === 'Text' && (
                    <div className="flex items-center gap-3 h-full">
                      <div className="flex flex-col w-full h-full flex-1">
                        <div className="flex w-full flex-1 flex-col rounded-lg shadow-sm">
                          <div className="flex border border-border-light dark:border-border-dark bg-white dark:bg-background-dark/50 items-center p-4 rounded-t-lg border-b-0">
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDc1qFVPAb4GPFcafCAh0pOBKP7ALZ9_QnFf6H9T0s8S4ouiNF5FSKkmacfv4NK3RXgHJzN8QyLVM2NggUayGqiHBo-GnKRc48fS1MDxCb_LQKBlv4zqRyb1N_QoOBNjCszcnhpvR6ITGaTvCIajQu8i3P1MfFI8S6Cmo1XZDPUnvW9LP_ZAdHeqO_C_S4vlQS7jbkhVPT3e7lQNAyA0hFr_1DRuS_mXweYTK608rXwgw77MPpgao0zL6rrdfgptGKHEo2F75H3lUc")' }}></div>
                          </div>
                          <div className="flex flex-1 flex-col">
                            <textarea className="form-input flex w-full min-w-0 flex-1 resize-y overflow-auto text-text-light dark:text-text-dark focus:outline-0 focus:ring-0 border border-border-light dark:border-border-dark bg-white dark:bg-background-dark/50 focus:border-secondary min-h-48 placeholder:text-text-light/40 dark:placeholder:text-text-dark/40 p-4 rounded-none border-y-0 text-base font-normal leading-relaxed" placeholder="Tell your story..."></textarea>
                            <div className="flex border border-border-light dark:border-border-dark bg-white dark:bg-background-dark/50 items-center rounded-b-lg border-t-0 p-3">
                              <div className="flex items-center gap-4 flex-1 justify-between">
                                <div className="flex items-center gap-1 text-text-light/60 dark:text-text-dark/60">
                                  <button className="flex items-center justify-center p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5"><span className="material-symbols-outlined text-xl">format_bold</span></button>
                                  <button className="flex items-center justify-center p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5"><span className="material-symbols-outlined text-xl">format_italic</span></button>
                                  <button className="flex items-center justify-center p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5"><span className="material-symbols-outlined text-xl">format_list_bulleted</span></button>
                                  <button className="flex items-center justify-center p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5"><span className="material-symbols-outlined text-xl">link</span></button>
                                  <button className="flex items-center justify-center p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5"><span className="material-symbols-outlined text-xl">format_quote</span></button>
                                  <button className="flex items-center justify-center p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5"><span className="material-symbols-outlined text-xl">add_reaction</span></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === 'Image/Video' && (
                    <div className="flex flex-col p-4">
                      <div className="flex flex-col items-center gap-6 rounded-lg border-2 border-dashed border-border-light dark:border-border-dark px-6 py-14">
                        <div className="flex max-w-md flex-col items-center gap-2 text-center">
                          <p className="text-lg font-bold leading-tight tracking-tight">Add Images or Video</p>
                          <p className="text-sm font-normal leading-normal text-text-light/70 dark:text-text-dark/70">Drag and drop files here or click to upload</p>
                        </div>
                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-black/5 dark:bg-white/5 text-sm font-bold leading-normal tracking-wide">
                          <span className="truncate">Upload from computer</span>
                        </button>
                      </div>
                    </div>
                  )}
                   {activeTab === 'Audio' && (
                    <div className="flex flex-col gap-3 p-4">
                        <div className="flex gap-6 justify-between"><p className="text-base font-medium leading-normal">Uploading...</p></div>
                        <div className="rounded-full bg-border-light dark:bg-border-dark h-2"><div className="h-2 rounded-full bg-secondary" style={{width: '65%'}}></div></div>
                        <p className="text-text-light/70 dark:text-text-dark/70 text-sm font-normal leading-normal">my_awesome_podcast.mp3</p>
                    </div>
                  )}
                </main>
                {/* Side Panel */}
                <aside className="w-full lg:w-1/3 lg:max-w-sm flex flex-col gap-6">
                  <div className="bg-white dark:bg-background-dark/50 border border-border-light dark:border-border-dark rounded-lg p-6 flex flex-col gap-6 shadow-sm">
                    <div>
                      <label className="block text-sm font-bold mb-2" htmlFor="visibility">Visibility</label>
                      <div className="relative">
                        <select className="form-select appearance-none w-full bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark rounded-md h-11 pl-4 pr-10 focus:ring-secondary focus:border-secondary" id="visibility">
                          <option>Public</option>
                          <option>Friends Only</option>
                          <option>Private</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-text-light/50 dark:text-text-dark/50">expand_more</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2" htmlFor="tags">Add Tags</label>
                      <input className="form-input w-full bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark rounded-md h-11 px-4 placeholder:text-text-light/40 dark:placeholder:text-text-dark/40 focus:ring-secondary focus:border-secondary" id="tags" placeholder="e.g. #creativity #inspiration" type="text"/>
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2" htmlFor="location">Location</label>
                      <input className="form-input w-full bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark rounded-md h-11 px-4 placeholder:text-text-light/40 dark:placeholder:text-text-dark/40 focus:ring-secondary focus:border-secondary" id="location" placeholder="Add a location" type="text"/>
                    </div>
                    <div>
                      <label className="flex items-center justify-between text-sm font-bold mb-2 cursor-pointer" htmlFor="schedule">
                        <span>Schedule Post</span>
                        <input className="form-checkbox rounded text-primary focus:ring-primary/50" id="schedule" type="checkbox"/>
                      </label>
                      <p className="text-xs text-text-light/60 dark:text-text-dark/60">Schedule your post to be published at a later date.</p>
                    </div>
                    <div className="border-t border-border-light dark:border-border-dark pt-6 flex flex-col gap-3">
                      <button className="w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary text-white text-base font-bold leading-normal shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors">
                        <span className="truncate">Post Now</span>
                      </button>
                      <button className="w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-transparent text-text-light/80 dark:text-text-dark/80 hover:bg-black/5 dark:hover:bg-white/5 font-medium leading-normal transition-colors">
                        <span className="truncate">Save Draft</span>
                      </button>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
