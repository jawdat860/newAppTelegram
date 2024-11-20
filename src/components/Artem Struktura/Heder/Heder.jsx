function Info() {
    return (
      <>
        <div id="genn-Authorization" className="genn-Authorization">Авторизация</div>
        <div id="genn-Info" className="genn-Info-block">
            <div className="genn-Info-logo">Лого</div>
            <h1>Название<span className="genn-Info-h1-sub">подназвание</span></h1>
            <div className="genn-Info-description">Описание</div>
            <div className="genn-Info-btn-icon-block">
                <div className="genn-Info-description-btn">Подробнее</div>
                <div className="genn-Info-description-modal">Подробнее</div>
                <div className="genn-Info-icon-block">
                    <div className="genn-Info-ico">Яндекс карта</div>
                    <div className="genn-Info-ico-modal">Модальное окно Яндекс карта</div>
                    <div className="genn-Info-ico">Яндекс отзывы</div>
                    <div className="genn-Info-ico-modal">Модальное окно Яндекс отзывы</div>
                    <div className="genn-Info-ico">Поделиться</div>
                    <div className="genn-Info-ico-modal">Модальное окно Поделиться</div>
                </div>
            </div>
            <div id="genn-RezimRaboty" className="genn-RezimRaboty-block">Режим работы</div>
        </div>
      </>
    );
  }
  export default Info;