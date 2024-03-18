import { useCallback, useState } from 'react'

import type { Dispatch, SetStateAction } from 'react'

type UseCounterReturn = {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
  setCount: Dispatch<SetStateAction<number>>
}

export function useCounter(initialValue?: number): UseCounterReturn {
  const [count, setCount] = useState(initialValue ?? 0)

  const increment = useCallback(() => {
    setCount(x => x + 1)
  }, [])

  const decrement = useCallback(() => {
    setCount(x => x - 1)
  }, [])

  const reset = useCallback(() => {
    setCount(initialValue ?? 0)
  }, [initialValue])

  return {
    count,
    increment,
    decrement,
    reset,
    setCount,
  }
}
