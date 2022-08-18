import Svg from "./NoCard.svg"
import "./style.css"

function NoCard()
{
    return (
    <div className="box_no-li">
    <p className="no_lancamento">Você ainda não possui nenhum lançamento</p>
    <li className="NoLi">
        <img src={Svg} alt="sem financas" />
    </li>
    <li>
        <img src={Svg} alt="sem financas" />
    </li>
    <li>
        <img src={Svg} alt="sem financas" />
    </li>
    </div>
    )
}
export default NoCard