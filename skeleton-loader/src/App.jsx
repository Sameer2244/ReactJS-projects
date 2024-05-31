import './skeletonloader.css'
import React, { Suspense, useEffect } from 'react';

const Profile = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() =>
      resolve(import('./Profile')),
      3000);
  });
});
function App() {
  return (
    <div>
      <Suspense fallback={<SkeletonLoader />}>
        <Profile />
      </Suspense>

    </div>
  )
}

export default App


const SkeletonLoader = () => {
  return <div className='skeleton-container'>
    <div className='skeleton profile-img'></div>
    <div>

      <div className='skeleton medium'></div>
      <div className='skeleton small'></div>
      <div className='skeleton big'></div>
    </div>
  </div>
}