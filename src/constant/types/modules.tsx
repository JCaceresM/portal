type Nullable<T> = T | null
type MenuOption = {
  id: number
  ID_MODULE: string

  published_at: string
  created_at: string
  updated_at: string

  MODULE_PATH: Nullable<string>
  MAIN_MODULE: boolean

  NAME: string | JSX.Element

  PARENT: string

  CHILDREN?: MenuOption[]
}
 
  type ModulesState = {
    MODULES: MenuOption[]
    modulesFetching: boolean
  }
  
  const initialState = {
    MODULES: new Array< MenuOption>(),
    modulesFetching: false
  }
  
  export { initialState }
  
  export type { ModulesState,MenuOption }
  