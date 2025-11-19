import { useEffect } from "react";
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
    useEffect(() => {
        const timer = setTimeout(() => {
            const toastElement = document.querySelector(`.toast.${type}`);
            toastElement?.classList.remove("showing");
        }, 5000);
        return () => clearTimeout(timer);
    }, [type]);
    return (
        <div className={`toast showing ${type}`}>
            <h2>{capitalize(type)}</h2>
            {text}
        </div>
    );
}
