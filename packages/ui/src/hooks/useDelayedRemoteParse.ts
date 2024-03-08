import { useState, useEffect } from "react"

export const useDelayedRemoteParse = <T extends unknown, L extends ((inputStream: T, previousValue?: ReturnType<L>) => Promise<Awaited<ReturnType<L>>>)>(parseInputStream: T, _timeout: number = 500, onBounce: L): Awaited<ReturnType<L>> | null => {
    const [prevVal, setPrevVal] = useState<T>(null!)
    const [_value, _setValue] = useState<NonNullable<Awaited<ReturnType<L>>> | null>(null!)
    const [waiting, setWaiting] = useState(false)
    const timeout = _timeout || 1000

    const cb = async (_updatedInputStream?: T) => {
        let newStream = _updatedInputStream || parseInputStream
        let pval = prevVal
        setPrevVal(newStream)
        if (waiting || Boolean(pval !== null && newStream === pval && newStream !== "")) {
            return
        }
        setWaiting(true)
        let newValue = await onBounce(newStream, _value || undefined)
        setWaiting(false)
        _setValue(newValue)
    }

    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)

    const clearTimer = (l: typeof timer) => {
        timer && clearTimeout(timer)
        setTimer(l)
    }

    const resetTimer = () => {
        clearTimer(setTimeout(async () => await cb(), timeout))
    }

    useEffect(() => {
        if (!_value && !waiting) {
            cb(parseInputStream)
        }
        resetTimer()
        return () => {
            clearTimer(null)
        }
    }, [parseInputStream])

    return _value
}
