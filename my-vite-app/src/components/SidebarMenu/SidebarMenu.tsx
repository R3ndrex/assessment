import { useRef, useState, useEffect } from "react";
import "./style.css";

type MenuItem = {
    label: string;
    children?: MenuItem[];
};
type SidebarMenuProps = {
    state: "open" | "closed";
    menu?: MenuItem[] | MenuItem;
};

function MenuItem({ item }: { item: MenuItem }) {
    const [isOpen, setIsOpen] = useState(false);
    const hasChildren = item.children && item.children.length > 0;

    return (
        <li className={`sidebar-item`}>
            <div
                className="item-header"
                onClick={() => hasChildren && setIsOpen(!isOpen)}
                style={{ cursor: hasChildren ? "pointer" : "default" }}
            >
                {item.label}
                {hasChildren && <span className="arrow"></span>}
            </div>

            {hasChildren && isOpen && (
                <ul className={`sidebar-sublist`}>
                    {item.children &&
                        item.children.map((child: MenuItem, index: number) => (
                            <MenuItem key={index} item={child} />
                        ))}
                </ul>
            )}
        </li>
    );
}

export default function SidebarMenu({ state, menu = [] }: SidebarMenuProps) {
    const ref = useRef<HTMLElement | null>(null);
    const [visible, setVisible] = useState(state === "open");
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setVisible(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return (
        <>
            <button
                className="sidebar-toggle"
                onClick={() => setVisible(!visible)}
            >
                ☰
            </button>
            <aside
                ref={ref}
                className={`sidebar ${visible ? "open" : "closed"}`}
            >
                {menu.length > 0 && (
                    <ul className="sidebar-list">
                        {menu.map((item, index) => (
                            <MenuItem key={index} item={item} />
                        ))}
                    </ul>
                )}
            </aside>
        </>
    );
}
