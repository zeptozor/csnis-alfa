import useAccordionStore from './accordion'
import useNavigationStore from './navigation'

const useStore = {
    navigation: useNavigationStore,
    accordion: useAccordionStore
}

export default useStore