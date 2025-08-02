// import React, { useState } from 'react'
// import Nav from './components/Nav'
// import  MainRoutes  from './routes/MainRoutes';
// import CustomMouse from './components/CustomMouse'
// import MouseFollower from './components/MouseFollower'
// import Loader from './components/Loader';

// const App = () => {

//   const [loading, setLoading] = useState(true);

//   return (
//     loading ? <Loader onFinish={() => setLoading(false)} /> :
//     <div className='relative'> 
//     <MouseFollower/>
//       <CustomMouse/>
//       <div className='sticky top-0 z-50'> <Nav/></div>
// <MainRoutes/>
//     </div>
//   )
// }

// export default App



import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import MainRoutes from './routes/MainRoutes';
import CustomMouse from './components/CustomMouse';
import MouseFollower from './components/MouseFollower';
import Loader from './components/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading all assets (or replace with actual asset loading)
    const assetLoadTimer = setTimeout(() => {
      setAssetsLoaded(true);
    }, 8000); // Assets take 8 seconds to "load"

    // Force completion after 10 seconds max
    const forceCompleteTimer = setTimeout(() => {
      setLoading(false);
    }, 8000);

    return () => {
      clearTimeout(assetLoadTimer);
      clearTimeout(forceCompleteTimer);
    };
  }, []);

  const handleLoaderFinish = () => {
    // Only finish if assets are loaded or 10 seconds have passed
    if (assetsLoaded) {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loader onFinish={handleLoaderFinish} />
      ) : (
        <div className='relative'>
          <MouseFollower />
          <CustomMouse />
          <div className='sticky top-0 z-50'>
            <Nav />
          </div>
          <MainRoutes />
        </div>
      )}
    </>
  );
};

export default App;