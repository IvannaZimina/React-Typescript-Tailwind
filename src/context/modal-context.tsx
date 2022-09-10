import React, { createContext, useState } from "react"

interface IModalContext {
  displayModal: boolean
  open: () => void
  close: () => void
}

export const ModalContext = createContext<IModalContext>({
  displayModal: false,
  open: () => {},
  close: () => {},
})

export const ModalState = ({ children }: { children: React.ReactNode }) => {
  const [displayModal, setDisplayModal] = useState(false)

  const open = () => setDisplayModal(true)
  const close = () => setDisplayModal(false)

  return (
    <ModalContext.Provider value={{ displayModal, open, close }}>
      {children}
    </ModalContext.Provider>
  )
}
