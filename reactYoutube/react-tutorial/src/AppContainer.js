import { ThemaContext, THEMAS } from "./context/ThemaContext"
import App from './App'
import { getLanguages } from './const/languages'
import { withLoading } from './hoc/withLoading'
import { useState } from "react";

const AppComponent = withLoading(App, getLanguages);

export const AppContainer = () => {
    const [thema, setThema] = useState(THEMAS.dark);

    const toggleThema = () => {
        const nextThema = (thema === THEMAS.dark ? THEMAS.light : THEMAS.dark)
        setThema(nextThema);
    }

    return (
        <ThemaContext.Provider value={[thema, toggleThema]}>
            <AppComponent />
        </ThemaContext.Provider>
    )
}
