import { proxy } from 'valtio'

type Counter = number

export const store = proxy<{ counter: Counter }>({
  counter: 0,
})