function Product() {
    return (
      <>
        <div id="genn-Product-{id}" className="genn-Product-block">
          <div className="genn-Product-img-block">
              <div className="genn-Product-img"><img /></div>
              <div className="genn-Product-label-new">New</div>
              <div className="genn-Product-label-sale">10%</div>
          </div>
          <div className="genn-Product-info-block">
              <div className="genn-Product-titl">Заголовок<span className="genn-Product-titl-sub">Подзаголовок</span></div>
              <div className="genn-Product-licke-dislicke">
                  <div className="genn-Product-licke">1</div>
                  <div className="genn-Product-dislicke">2</div>
              </div>
              <div className="genn-Product-cart-block">
                <div className="genn-Product-price-block">
                  <div className="genn-Product-old-price">250</div>
                  <div className="genn-Product-price">200</div>
                </div>
                <div className="genn-Product-stock">Ведро</div>
                <div className="genn-Product-cart-block">
                  <div className="genn-Product-cart-botton"><img/></div>
                  <div className="genn-Product-cart-plus-value-minus-blick">
                    <div className="genn-Product-cart-plus">+</div>
                    <div className="genn-Product-cart-value">1</div>
                    <div className="genn-Product-cart-minus">-</div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  export default Product;