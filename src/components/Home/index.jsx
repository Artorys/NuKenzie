import Header from "./Header"
import { useState } from "react"
import Form from "./Form"
import TotalMoney from "./TotalMoney"
import List from "./List"
import "./style.css"

function Home()
{
    const [financas,setFinancas] = useState([])
    const [total,setTotal] = useState(0)
    const [filter,setFilter] = useState([])
    return (
        <>
        <Header></Header>
        <main>
            <div className="container__form_total">
                <div className="container__form">
                    <Form setFilter = {setFilter} total = {total} setTotal={setTotal} financas={financas} setFinancas = {setFinancas}>

                    </Form>
                    <div className="container__total">
                        <TotalMoney total = {total}>

                        </TotalMoney>
                    </div>
                </div>
            </div>
            <div className="container__list">
                <List filter = {filter} setFilter={setFilter} setTotal = {setTotal} financas = {financas} setFinancas = {setFinancas}></List>
            </div>
        </main>
        </>
    )
}
export default Home