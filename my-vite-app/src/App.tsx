import "./App.css";
import Input from "./components/Input/Input";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";
import Toast from "./components/Toast/Toast";
function App() {
    return (
        <>
            <h1>Components</h1>
            <Input type="password" clearable />
            <Toast />
            <SidebarMenu />
        </>
    );
}

export default App;
