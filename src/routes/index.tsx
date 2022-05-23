import React, { FC, Suspense, lazy, ReactNode, ReactElement } from 'react';
import { Routes, Route, useRoutes } from 'react-router-dom';

const Page1 = lazy(() => import('../pages/page1'));
const Page2 = lazy(() => import('../pages/Page2'));
const Page3 = lazy(() => import('../pages/Page3'));
const Page4 = lazy(() => import('../pages/Page4'));
const Page5 = lazy(() => import('../pages/Page5'));

const lazyLoad = (children: ReactNode): ReactNode => <Suspense fallback={<>loading</>}>{children}</Suspense>;
const Router: FC = () => {
  const element = useRoutes([
    {
      path: '/',
      element: lazyLoad(<Page1 />),
      children: [
        { index: true, element: lazyLoad(<Page2 />) },
        { path: 'page3', element: lazyLoad(<Page3 />) },
      ],
    },
    {
      path: '/page4',
      element: lazyLoad(<Page4 />),
      // children: [{ path: 'page2', element: <Page2 /> }],
    },
    {
      path: '/page5',
      element: lazyLoad(<Page5 />),
      children: [{ path: 'page2', element: lazyLoad(<Page2 />) }],
    },
  ]);
  return element;
};

export default Router;
