'use client';

import React, { PropsWithChildren, createContext, useContext } from 'react';

type Env = {
  API_BASE_URL: string;
};

const envContext = createContext<Env>({
  API_BASE_URL: '',
});

export function useEnv(): Env {
  return useContext(envContext);
}

export const EnvProvider: React.FC<PropsWithChildren<{ env: Env }>> = ({ children, env }) => {
  return <envContext.Provider value={env}>{children}</envContext.Provider>;
};
