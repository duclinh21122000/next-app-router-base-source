import React from 'react'

type AppLayoutCSRProps = {
  children: React.ReactNode
}

const AppLayoutCSR = ({children}: AppLayoutCSRProps) => {
  return (
    <div>{children}</div>
  )
}

export default AppLayoutCSR