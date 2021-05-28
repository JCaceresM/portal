import { ModulesState } from "./modules"
import { LoginState } from "./session"

type StoreState = {
  login: LoginState,
  modules: ModulesState
}
export type { StoreState }
