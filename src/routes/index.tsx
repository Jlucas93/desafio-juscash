import { Login, PageNotFound, SignUP } from 'pages';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import ConfigRoute from './config.routes';
import listRoutes from './list.routes';

export interface IRoutesProps {
  id: string;
  path: string;
  element: JSX.Element;
  isPrivate: boolean;
  profiles: string[];
}

export default function routes() {
  return (
    <Suspense fallback={<h1>Rendering...</h1>}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUP />} />
        {listRoutes.map((route) => {
          return (
            <Route
              key={`route-public-${route.id}`}
              path={route.path}
              element={
                <ConfigRoute
                  isPrivate={route.isPrivate}
                  profiles={route.profiles}
                  path={route.path}
                >
                  {route.element}
                </ConfigRoute>
              }
            />
          );
        })}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}
