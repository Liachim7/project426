import s from './CatalogCard.module.css'
export function CatalogCard() {
  return (
    <article className={s.card}>
      <div className={s.imageWrap}>
        <img
          src="https://static.boredpanda.com/blog/wp-content/uploads/2023/01/25-63c718dddd1b1__700.jpg"
          alt="Товар 2"
          className={s.image}
        />
      </div>
      <div className={s.body}>
        <h3 className={s.name}>Название товара</h3>
        <p className={s.desc}>Короткое описание в одну строку</p>
        <div className={s.footer}>
          <span className={s.price}>2 490 ₽</span>
          <button className={s.buy} type="button">
            Купить
          </button>
        </div>
      </div>
    </article>
  );
}
