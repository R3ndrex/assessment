import "./style.css";
export default function Toast({
    type,
    children,
}: {
    type?: "info" | "success" | "error";
    children: React.ReactNode;
}) {
    return <div className={type}>{children}</div>;
}
