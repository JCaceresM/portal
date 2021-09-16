import { ImagesState } from "./images"
import { ModulesState } from "./modules"
import { LoginState } from "./session"

type StoreState = {
  login: LoginState
  modules: ModulesState
  images: ImagesState
}
export type { StoreState }
