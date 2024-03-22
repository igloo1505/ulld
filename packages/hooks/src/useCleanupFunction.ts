import { useEffect, useRef } from 'react'

export const useCleanupFunction = (func: () => void) => {
  const funcRef = useRef(func)

  funcRef.current = func

  useEffect(
    () => () => {
      funcRef.current()
    },
    [],
  )
}
