import { ButtonStyled } from "./style"

function Button({setTotal,setFilter,financas,clicked,margin,name,children,setTodos,setEntradas,setDespesas})
{
    function setting()
    {
        switch(name)
        {
            case `todos`:
            setTodos(true)
            setEntradas(false)
            setDespesas(false)
            setFilter(()=> financas)
                break
            case `entradas`:
                setEntradas(true)
                setDespesas(false)
                setTodos(false)
                setFilter(()=> financas.filter(({tipoValor})=> tipoValor == `entrada`))
                break
            case `despesas`:
                setDespesas(true)
                setEntradas(false)
                setTodos(false)
                setFilter(()=> financas.filter(({tipoValor})=> tipoValor == `despesa`))
                break
        }
    }
    return(
        <ButtonStyled className={margin} onClick={setting}><div className={`button_content ${clicked}`}>{children}</div></ButtonStyled>
    )
}
export default Button