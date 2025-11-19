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
    duration = 0,
}: {
    type: "info" | "success" | "error" | "warning";
    text: string;
    duration?: number;
}) {
    const toastRef = useRef<HTMLDivElement>(null);
    function removeShowing() {
        toastRef.current?.classList.remove("showing");
    }
    function returnTimerTime(type: "info" | "success" | "error" | "warning") {
        switch (type) {
            case "info":
                return 3000;
            case "success":
                return 4000;
            case "warning":
                return 5000;
            case "error":
                return 6000;
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            removeShowing();
        }, duration || returnTimerTime(type));
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
