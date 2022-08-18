import "./style.css"
import { useRef } from "react"
import Financas from "./Financas.js"

function Form({setFilter,setTotal,total, financas,setFinancas})
{
    const descricao = useRef()
    const valor = useRef()
    const tipoValor = useRef()

   function criarFinancas(eve)
   {    
        eve.preventDefault()
        const descricaoValue = descricao.current.value
        const valorValue = parseInt(valor.current.value)
        const tipoValorValue = tipoValor.current.value
        if(descricaoValue && valorValue && tipoValorValue)
        {
            const novaFinanca = new Financas(descricaoValue,valorValue,tipoValorValue)
            setFinancas((currentFinances)=> [...currentFinances,novaFinanca])
            setFilter((currentFilter)=> [...currentFilter,novaFinanca])
            if(tipoValorValue == `despesa`)
            {
                setTotal((oldValue)=> oldValue - valorValue)
            }
            if(tipoValorValue == `entrada`)
            {
                setTotal((oldValue)=> oldValue + valorValue)
            }
        }

   }
   return(
   <form onSubmit={criarFinancas} className="form">
        <div className="box_descricao">
            <label className="label_descricao" htmlFor = "descricao">
                Descrição
            </label>
            <div className="input_descricao">
                <input ref={descricao} placeholder="Digite sua descrição" id = "descricao" type= "text" maxLength= "20"></input>
            </div>
            <p className="exemplo">Ex: Compra de roupas</p>
        </div>
        <div className="valores_box">
                <div className="valor_box">
                    <label className="label_valor" htmlFor = "valor">Valor</label>
                    <input required type="number" ref={valor} className="valor" id = "valor" max="1000000" maxLength="6" placeholder="Valor">
                    </input>
                </div>
            <div className="tipo_container">
                <label className="label_tipo" htmlFor="tipoValor">Tipo de valor</label>
                <div className="tipo_box">
                    <select ref={tipoValor} className="tipo_select" name="tipos" id="tipoValor">
                        <option value="entrada">Entrada</option>
                        <option value="despesa">Despesa</option>
                    </select>
                </div>
            </div>
        </div>
        <button className="send">Inserir Valor</button>
    </form>
    )
}   
export default Form