export function Input(props: any) {
    return <div className={props.wrapperClassName}>
        <label>{props.label}</label>
        <input required={props.required} pattern={props.pattern} maxLength={props.maxLength} autoFocus={props.autofocus} type={props.type} data-id={props.dataId} name={props.name} placeholder={props.placeholder} />
    </div>
}