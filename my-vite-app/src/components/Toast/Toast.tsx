import { useEffect, useRef } from "react";
import "../../index.css";
import "./style.css";
function capitalize(str: string) {
    if (str.length === 0) {
        return "";
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Toast({
    type,
    text,
}: {
    type: "info" | "success" | "error" | "warning";
    text: string;
}) {
    const toastRef = useRef<HTMLDivElement>(null);
    function removeShowing() {
        toastRef.current?.classList.remove("showing");
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            removeShowing();
        }, 5000);
        return () => clearTimeout(timer);
    }, [type]);
    return (
        <div ref={toastRef} className={`toast showing ${type}`}>
            <h2>{capitalize(type)}</h2>
            {text}
            <div onClick={removeShowing} className="close"></div>
        </div>
    );
}
