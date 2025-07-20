import { useFormContext } from 'react-hook-form'
import { FormContainer, InputNumberAmount, InputWork } from '../../styles'
import { useContext } from 'react'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="work">Vou trabalhar em</label>
      <InputWork
        placeholder="De um nome para o seu projeto"
        type="text"
        id="work"
        disabled={!!activeCycle}
        list="task-suggestions"
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="projeto 1"></option>
        <option value="projeto 2"></option>
        <option value="projeto 3"></option>
        <option value="banana"></option>
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <InputNumberAmount
        placeholder="00"
        type="number"
        id="minutesAmount"
        step={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
