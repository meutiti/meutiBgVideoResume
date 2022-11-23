import { useBreakpointValue } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

function useMountedBreakpoints<T>(values: Record<string, T>, def: T): T {
  const [val, setVal] = useState(def)
  const breakpointValue = useBreakpointValue(values)
  useEffect(() => {
    setVal(breakpointValue ?? def)
  }, [breakpointValue, def])
  return val
}

export default useMountedBreakpoints
