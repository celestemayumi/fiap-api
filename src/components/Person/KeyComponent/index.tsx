import './styles.css' 

const Key = (props:any)=> {
    return(
        <>
        <div className="card-key">
            <label htmlFor="">{props.campo}</label>
            <p>{props.valor}</p>
        </div>
        </>
    )
}

export default Key;