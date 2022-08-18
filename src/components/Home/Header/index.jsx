import "./style.css"
import Button from "../Button"

function Header()
{
    return(
        <header>
            <div className="box_h1">
                <h1>
                    <span className="nu">Nu</span><span className="kenzie">Kenzie</span>
                </h1>
            </div>
            <div className="div_button">
                <Button margin={`buttons`}>Inicio</Button>
            </div>
        </header>
    )
}
export default Header