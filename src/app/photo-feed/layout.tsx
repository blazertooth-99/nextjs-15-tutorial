import "./style.css"

export default function Layout(props: {
    modal: React.ReactNode;
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="flex items-center justify-center">
                {props.modal}
                {props.children}
            </div>
        </>
    );
}