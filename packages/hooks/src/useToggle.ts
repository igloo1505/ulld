import { useCallback, useState } from 'react'

export const useToggle = (
  defaultValue?: boolean,
): {
    value: boolean
    toggle: () => void
    setValue: (val: boolean) => void
} => {
  const [value, setValue] = useState(!!defaultValue)

  const toggle = useCallback(() => {
    setValue(x => !x)
  }, [])

  return {value, toggle, setValue}
}
