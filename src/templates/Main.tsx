import React, { ReactNode } from 'react';

import { Config } from '../utils/Config';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700">
    {props.meta}

    <div className="max-w-screen-md mx-auto">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <div className="font-bold text-3xl text-gray-900">{Config.title}</div>
          <div className="text-xl">{Config.description}</div>
        </div>
      </div>

      <div className="py-5 text-xl content">{props.children}</div>
      { /* Footer here */}
    </div>
  </div>
);

export { Main };
