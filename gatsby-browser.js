import './src/styles/global.css'
import GlobalState from ".src/context/GlobalState";

export const wrapRootElement = ({ element }) => (
    <GlobalState>{element}</GlobalState>
)