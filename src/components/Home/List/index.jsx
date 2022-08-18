import Button from "../Button"
import Card from "./Card"
import NoCard from "./NoCard"
import { DivFinancas } from "./style"
import {useState} from "react"

function List({filter,setFilter,setTotal,financas,setFinancas})
{
    const [todos,setTodos] = useState(true);
    const [entradas,setEntradas] = useState(false);
    const [despesas,setDespesas] = useState(false);

    const check = financas.length == 0

    console.log(check)

    return (
        <DivFinancas>
            <div className="box_buttons">
                <Button setFilter={setFilter} filter = {filter} setTotal = {setTotal} financas={financas} setFinancas = {setFinancas} todos = {todos} entradas = {entradas} despesas = {despesas} name = {`todos`} setTodos = {setTodos} setEntradas = {setEntradas} setDespesas = {setDespesas}clicked  = {todos ? `clicked` : null}>Todos</Button>
                <Button setFilter={setFilter} filter = {filter} setTotal = {setTotal} financas={financas} setFinancas = {setFinancas} todos = {todos} entradas = {entradas} despesas = {despesas} name ={`entradas`} setTodos = {setTodos} setEntradas = {setEntradas} setDespesas = {setDespesas} clicked = {entradas ? `clicked` : null}>Entradas</Button>
                <Button setFilter={setFilter} filter = {filter} setTotal = {setTotal} financas={financas} setFinancas = {setFinancas} todos = {todos} entradas = {entradas} despesas = {despesas} name ={`despesas`} setTodos = {setTodos} setEntradas = {setEntradas} setDespesas = {setDespesas} clicked = {despesas ? `clicked` : null}>Despesas</Button>
            </div>
            <ul className="lista__financas">

                {todos && financas.map(({descricao,valor,tipoValor},index)=>
                {
                    return <Card setFilter = {setFilter} financas={financas} setTotal = {setTotal} id = {index} setFinancas = {setFinancas} key={index} descricao = {descricao} valor = {valor} tipoValor = {tipoValor}>

                    </Card>
                })}
                {!todos && !despesas && entradas && filter.map(({descricao,valor,tipoValor},index)=>
                {
                    return <Card filter = {filter} setFilter = {setFilter} financas={financas} setTotal = {setTotal} id = {index} setFinancas = {setFinancas} key={index} descricao = {descricao} valor = {valor} tipoValor = {tipoValor}>

                    </Card>
                })}
                {!todos && !entradas && despesas && filter.map(({descricao,valor,tipoValor},index)=>
                {
                    return <Card filter = {filter} setFilter = {setFilter} financas={financas} setTotal = {setTotal} id = {index} setFinancas = {setFinancas} key={index} descricao = {descricao} valor = {valor} tipoValor = {tipoValor}>

                    </Card>
                })}
                {check && 
                    <NoCard/>
                }

            </ul>
        </DivFinancas>
    )
}
export default List