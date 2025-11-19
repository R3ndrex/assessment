import { useRef, useState, useEffect } from "react";
import "./style.css";
type SidebarMenuProps = {
    state: "open" | "closed";
};

export default function SidebarMenu({ state }: SidebarMenuProps) {
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
            <aside ref={ref} className={`sidebar ${visible ? "" : "closed"}`}>
                <ul className="sidebar-list">
                    <li className="sidebar-item">View Map</li>
                    <li className="sidebar-item">View Main Page</li>
                </ul>
            </aside>
        </>
    );
}
