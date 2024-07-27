'use client'

import {NextUIProvider} from "@nextui-org/react";
import { SessionProvider, useSession } from '../context/AuthContext.jsx';

export default function App({children}) {
  return (
    <NextUIProvider>
      <SessionProvider>
        {children}
      </SessionProvider>
    </NextUIProvider>
  );
}