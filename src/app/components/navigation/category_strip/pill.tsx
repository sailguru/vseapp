export function Pill(props:any) {
    return <div className={`navigation__category__pill ${props.active ? ' active' : ''}`}>
        {props.title}
    </div>
}