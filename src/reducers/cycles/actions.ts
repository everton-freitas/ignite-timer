import type { CycleProps } from './reducer'

export const ActionTypes = {
  ADD_NEW_CYCLE: 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE: 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED: 'MARK_CURRENT_CYCLE_AS_FINISHED',
} as const

export type ActionTypes = keyof typeof ActionTypes

export const addNewCycleAction = (newCycle: CycleProps) => {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export const interruptCurrentCycleAction = () => {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}

export const markCurrentCycleAsFinishedAction = () => {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}
