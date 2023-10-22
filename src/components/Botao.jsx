

export default function Botao(props) {
    return (
        <>
            <button onClick={() => props.setCount(props.count * 10 + props.valor)}>{props.valor}</button>
        </>
    );
}