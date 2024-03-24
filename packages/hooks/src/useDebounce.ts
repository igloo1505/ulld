import { useState } from "react"

// FIX: This needs to be handled entirely. Putting this here for now to avoid import issues.
export const useDebounce = (...p: any[]) => {
  const [value, setValue] = useState("")

    return {
        value, 
        setValue
    }

}
