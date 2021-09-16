import { ModulesActions } from "../actions/Modules"
import { MODULES_GET_MODULES, MODULES_GET_MODULES_SUCCESS, MODULES_GET_MODULES_FAILURE } from "../constant/actions/modules"
import { ModulesState ,initialState} from "../constant/types/modules"

const modules = (
    state: ModulesState = initialState,
    action: ModulesActions
  ): ModulesState => {
    switch (action.type) {
    case MODULES_GET_MODULES: {
        return {
            ...state,
            modulesFetching: true,
        }
    }
    case MODULES_GET_MODULES_SUCCESS: {
        return {
            ...state,
            MODULES: action.data,
            modulesFetching: false,
        }
    }
    case MODULES_GET_MODULES_FAILURE: {
        return {
            ...state,
            modulesFetching: false,
        }
    }
      default:
        return state
    }
  }
  
  export default modules