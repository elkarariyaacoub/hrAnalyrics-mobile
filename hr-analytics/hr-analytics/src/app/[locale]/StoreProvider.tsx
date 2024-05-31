'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../../lib/store'
import { setPage } from '../../lib/slice'

export default function StoreProvider({
  page,
  children
}: {
  page: number
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = makeStore()
    storeRef.current.dispatch(setPage(page))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}