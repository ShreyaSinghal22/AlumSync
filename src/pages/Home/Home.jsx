import React from 'react';
import HomeFeed from './HomeFeed';
import HomeRightBar from './HomeRightBar';

const Home = () => {
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4 lg:gap-6 px-4 sm:px-6 pt-4 lg:pt-6 lg:h-[calc(100vh-70px)]">

      {/* Activity Feed — always visible */}
      <main className="lg:h-full lg:overflow-y-auto no-scrollbar pb-10">
        <HomeFeed />
      </main>

      {/* Right Discovery Bar — hidden until lg (needs the most horizontal room, now that the persistent sidebar also takes space) */}
      <aside className="hidden lg:block lg:h-full lg:sticky lg:top-0 lg:overflow-y-auto no-scrollbar pb-6">
        <HomeRightBar />
      </aside>

    </div>
  );
};

export default Home;