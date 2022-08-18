import Svg from "./ButtonTrash.jsx"
import "./style.css"
function Card({filter,setFilter,setTotal,financas,setFinancas,id,descricao,valor,tipoValor})
{
    return(
            <li className="card">
                <div className="box__card">
                    <p className="descricao">{descricao}</p>
                    <p className="tipo">{tipoValor}</p>
                </div>
                <div className="box__preco">
                    <p className="precoTotal">R${valor}</p>
                    <Svg filter = {filter} setFilter = {setFilter} financas = {financas} setTotal = {setTotal} setFinancas = {setFinancas} id = {id}></Svg>
                </div>
            </li> 
    )
}
export default Card