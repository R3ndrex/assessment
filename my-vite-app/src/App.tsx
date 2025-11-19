import Input from "./components/Input/Input";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";
import Toast from "./components/Toast/Toast";
type MenuItem = {
    label: string;
    children?: MenuItem[];
};

const menu: MenuItem[] = [
    { label: "Home" },
    {
        label: "Products",
        children: [
            {
                label: "Phones",
                children: [{ label: "Iphone" }, { label: "Samsung" }],
            },
            { label: "Laptops" },
        ],
    },
    { label: "About" },
];

function App() {
    return (
        <>
            <h1>Components</h1>
            <Input type="password" clearable />
            <Toast type="info" text="This is an info toast" />
            <Toast type="success" text="This is a success toast" />
            <Toast type="error" text="This is an error toast" />
            <SidebarMenu state="closed" menu={menu} />
        </>
    );
}

export default App;
