function Cart() {
    return (
      <>
        <div id="genn-Cart-Modal" className="genn-Cart-Modal-block">
          <div className="genn-Cart-Modal-block-zero">
              <h2>корзина</h2>
              <div className="genn-Cart-Modal-titl-question">?</div>
              <div className="genn-Cart-Modal-titl-modal-description">Как это работает</div>
              <div className="genn-Cart-Modal-zero-description">У вас ничего нет</div>
          </div>
          <div className="genn-Cart-Modal-titl-block">
              <h2>корзина</h2>
              <div className="genn-Cart-Modal-titl-question">?</div>
              <div className="genn-Cart-Modal-titl-modal-description">Как это работает</div>            
          </div>
            <div id="genn-Cart-Modal-Cart-{id}" className="genn-Cart-Modal-cart-block">
              <div className="genn-Cart-Modal-cart-block-img"><img/></div>
              <div className="genn-Cart-Modal-cart-card">
                <h3>Название <span>Вес</span></h3>
                <div className="genn-Cart-Modal-cart-block-formula">
                  <div>1200</div>
                  <div>x</div>
                  <div>1</div>
                  <div>=</div>
                  <div>1200</div>
                  <div>р</div>
                </div>
                <div className="genn-Cart-Modal-cart-Navigation">
                  <div>-</div>
                  <div>+</div>
                  <div>Ведро</div>
                </div>
              </div>
            </div>
            <div className="genn-Cart-Modal-block-Navigation">
              <div className="genn-Cart-Modal-block-value">
                <div className="genn-Cart-Modal-block-name">Итого</div>
                <div>---</div>
                <div className="genn-Cart-Modal-block-price">1200<span className="genn-Cart-Modal-block-сurrency">р</span></div>
              </div>
              <div>
                <button className="genn-botton-v1">Закрыть</button>
                <button className="genn-botton-v2">Заказать</button>
              </div>

            </div>
        </div>
      </>
    );
  }
  export default Cart;