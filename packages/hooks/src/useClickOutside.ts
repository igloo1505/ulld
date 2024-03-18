
import type { RefObject } from 'react'
import { useEventListener } from './useEventListener'


type EventType = 'mousedown' | 'mouseup' | 'touchstart' | 'touchend'

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T> | RefObject<T>[],
  handler: (event: MouseEvent | TouchEvent) => void,
  eventType: EventType = 'mousedown',
): void {
  useEventListener(eventType, event => {
    const target = event.target as Node

    // Do nothing if the target is not connected element with document
    if (!target || !target.isConnected) {
      return
    }

    const isOutside = Array.isArray(ref)
      ? ref.every(r => r.current && !r.current.contains(target))
      : ref.current && !ref.current.contains(target)

    if (isOutside) {
      handler(event)
    }
  })
}
