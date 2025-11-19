import { useState } from "react";
import "./style.css";
type InputProps = {
    type: "password" | "text";
    clearable: boolean;
};

export default function Input({
    type = "password",
    clearable = true,
}: InputProps) {
    const [text, setText] = useState("");
    return (
        <div className="input-div">
            <input
                type={type}
                placeholder="Enter text"
                value={text}
                onChange={(e) => setText(e.currentTarget.value)}
            />
            {clearable && (
                <button
                    onClick={() => setText("")}
                    className="clear-button"
                ></button>
            )}
        </div>
    );
}
