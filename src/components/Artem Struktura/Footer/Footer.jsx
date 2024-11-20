function Cart() {
    return (
      <>
        <div id="genn-Cart-components" className="genn-Cart-block">
            <div className="genn-Cart-licke-dislicke">            
                <div className="genn-Cart-licke">Лайк</div>
                <div className="genn-Cart-dislicke">Диздайк</div>
            </div>
            <div className="genn-Cart-contact">
                <div className="genn-Cart-ico-contact">Кнтакты</div>                
            </div>
            <div className="genn-Cart-block-ico-qpc">
                <div className="genn-Cart-ico">Иконка корзины</div>
                <div className="genn-Cart-block-qpc">
                    <div className="genn-Cart-quantity">1</div>
                    <div className="genn-Cart-price">100</div>
                    <div className="genn-Cart-сurrency">р</div>
                </div>
            </div>
        </div>
      </>
    );
  }
  export default Cart;