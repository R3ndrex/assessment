import Input from "./components/Input/Input";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";
import Toast from "./components/Toast/Toast";
function App() {
    return (
        <>
            <h1>Components</h1>
            <Input type="password" clearable />
            <Toast type="info" text="This is an info toast" />
            <Toast type="success" text="This is a success toast" />
            <Toast type="error" text="This is an error toast" />
            <SidebarMenu state="closed" />
        </>
    );
}

export default App;
