
import useLocalStorage from './useLocalStorage'

const useDarkMode = (darkMode) =>{
    const [thing, setThing] = useLocalStorage('thing', darkMode);

    return [thing, setThing];
}
export default useDarkMode;