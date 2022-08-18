import "./style.css"
function TotalMoney({total})
{
    return (
            <div className="box__total">
                <div className="box__content">
                    <p className="p__box_text">
                        Valor Total
                    </p>
                    <p id="total" className="p__box_total">
                    R${total}
                    </p>
                </div>
                <p className="p__box_info">O valor se refere ao saldo</p>
            </div>
    )
}
export default TotalMoney