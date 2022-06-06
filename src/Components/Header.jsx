import PropTypes  from "prop-types";
import Button from "./Button";

function Header ({title}){
    function onClick(){
        alert('Clicou')
    }
    return(
        <header className="Header">
            <h1>Agenda de {title}</h1>
            <Button  bgColor='green' text='add' onClick={onClick}/>
        </header>
    )
}

export default Header;

