import './styles.css' 
import Key from './KeyComponent'

interface Props {
    name: string
    address: string
    phone: string
    mail: string
    status: string
}

const Person = (props:any)=> {
    
    return (
        <>
            <div className="card">
                <Key campo = "Nome:" valor = {props.name}/>
                <Key campo = "Endereço:" valor = {props.address}/>
                <Key campo = "Telefone:" valor = {props.phone}/>
                <Key campo = "Email:" valor = {props.mail}/>
                <Key campo = "Status:" valor = {props.status}/>
            </div>
        </>
    )
}

export default Person;