import {InjectionKey, Ref} from "vue";

export const selectKey = Symbol('SelectKey') as unknown as InjectionKey<SelectContext>

export interface SelectContext {
  selection: Ref<Array<string | number> | string | number>

  setSelected(value: string | number, selected: boolean): void
}

export const referenceKey = Symbol('ReferenceKey') as unknown as InjectionKey<Ref<ReferenceContext[]>>

export interface ReferenceContext {
  field: string,

  init(v: any): void

  getCondition(): FilterCondition | undefined
}

export interface OptionProps {
  label: string
  value: string | number
}

export interface FilterCondition {
  field: string
  label?: string
  value: any
  valueLabel?: string
}
