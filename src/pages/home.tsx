import { Cemjsx } from "cemjs-all"
import mainImg from '@images/main.jpg'
import arrowR from '@svg/arrow_right.svg'
import category1 from '@images/category/category1.jpg'
import category2 from '@images/category/category2.jpg'
import category3 from '@images/category/category3.jpg'
import category4 from '@images/category/category4.jpg'
import category5 from '@images/category/category5.jpg'
import category6 from '@images/category/category6.jpg'
import category7 from '@images/category/category7.jpg'
import category8 from '@images/category/category8.jpg'
import whatsup from '@svg/socials/whatsup.svg'

const category = [
  {
    src: category1,
  },
  {
    src: category2,
  },
  {
    src: category3,
  },
  {
    src: category4,
  },
  {
    src: category5,
  },
  {
    src: category6,
  },
  {
    src: category7,
  },
  {
    src: category8,
  },
]


export default function (data, children) {
  return (
    <div class="home">
      <section class="printOrder">
        <div class="main-img">
          <img src={mainImg} alt="Photo Coma"/>
        </div>
        <div class="printOrder-desc">
          <h1 class="title">
            печать д<span class="circle-text"></span>кументов,
            проектной документации,
            твёрдый переплёт дипл<span class="circle-text"></span>мов
          </h1>
          <p class="desc">Описание Описание Описание Описание Описание Описание
            Описание Описание Описание Описание Описание</p>
          <a href="#" class="btn">
            Заказать печать
            <img src={arrowR} alt="Заказать" />
          </a>
        </div>
      </section>
      <section class="category">
        {
          category.map((item, index)=>{
            return(
              <div class="category-item">
                <img src={item.src} alt="Print"/>
              </div>
            )
          })
        }


        {/* <div class="category-item blue-border_up">
          <img src='@images/category/category7.jpg' alt="Print"/>
        </div>
        <div class="category-item">
          <img src="@images/category/category7.jpg" alt="Print"/>
        </div>
        <div class="category-item">
          <img src="@images/category/category6.jpg" alt="Print"/>
        </div>
        <div class="category-item blue-border_up">
          <img src="@images/category/category5.jpg" alt="Print"/>
        </div>
        <div class="category-item">
          <img src="@images/category/category4.jpg" alt="Print"/>
        </div>
        <div class="category-item blue-border_down">
          <img src="@images/category/category3.jpg" alt="Print"/>
        </div>
        <div class="category-item">
          <img src="@images/category/category2.jpg" alt="Print"/>
        </div>
        <div class="category-item blue-border_down">
          <img src="@images/category/category1.jpg" alt="Print"/>
        </div> */}
      </section>
      <section class="emblem">
        <h2 class="title">
          печать и твёрдый переплёт
          дипл<span class="circle-text"></span>мов
        </h2>
        <div class="order-emblem">
          <span class="brand-name">с фирменной эмблемой твоего вуза</span>
          <a href="#" class="btn">
            Заказать печать
            <img src={arrowR} alt="Заказать печать" />
          </a>
        </div>
      </section>
      <section class="about">
        {/* <h2 class="title title-general"></h2>  */}
        <div class="about-items">
          <div class="about-item">
            <h6 class="title">25 000+</h6>
            <p class="desc">Описание Описание Описание Описание Описание Описание Описание
              Описание Описание Описание Описание Описание</p>
          </div>
          <div class="about-item">
            <h6 class="title">25 000+</h6>
            <p class="desc">Описание Описание Описание Описание Описание Описание Описание
              Описание Описание Описание Описание Описание</p>
          </div>
          <div class="about-item">
            <h6 class="title">25 000+</h6>
            <p class="desc">Описание Описание Описание Описание Описание Описание Описание
              Описание Описание Описание Описание Описание</p>
          </div>
        </div>
      </section>
      <section class="location">
        <h2 class="title title-general">наши к<span class="circle-text"></span>пицентры</h2>
        <a href="tel:+7 (915) 431-06-66" class="location-subtitle title-general">
          +7 (915) 431-06-66
          <img src={whatsup} alt="Whats'up" />
        </a>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.31870343532!2d37.67732269563418!3d55.770336469818844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a83a74c32cd%3A0xf2d17908ec580712!2z0JHQsNGD0LzQsNC90YHQutCw0Y8g0YPQuy4sINCc0L7RgdC60LLQsA!5e0!3m2!1sru!2sru!4v1682270208175!5m2!1sru!2sru" width="var(--height)" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div class="location-address">
          <div class="adress-block">
            <div class="category-item blue-border_up"></div>
            <div class="category-item"></div>
            <div class="category-item contacts contacts-left">
              <h6 class="phone">Метро Аэропорт</h6>
              <span class="desc">Московское метро</span>
              <span class="desc">Ежедневно с 9.00 до 18.00</span>
            </div>
          </div>
          <div class="adress-block">
            <div class="category-item contacts contacts-right">
              <h6 class="phone">Бауманская</h6>
              <span class="desc">ул. Бауманская, д. 190</span>
              <span class="desc">Ежедневно с 9.00 до 18.00</span>
            </div>
            <div class="category-item"></div>
            <div class="category-item"></div>
            <div class="category-item blue-border_up"></div>
          </div>
        </div>
      </section>
    </div>
  )
}