import { createContext, useContext } from "react"

export const dark = {
    color: 'white',
    background: 'black',
    borderColor: 'white',
}
export const light = {
    color: 'black',
    background: 'white',
    borderColor: 'black'
}

export const ThemeContext = createContext({
    theme: '',
    toggleTheme: () => {},

})



export function useThemeContext (){
    const context = useContext(ThemeContext)
    if(!context){
      throw new Error('useThemeContext deve ser usado dentro do ThemeContextProvider')
    }
    return context;
}