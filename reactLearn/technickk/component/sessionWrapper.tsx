"client component"

import { SessionProvider } from "next-auth/react";

import React from 'react'

const sessionWrapper = ({children}) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default sessionWrapper
