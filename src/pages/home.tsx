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
          <img src={mainImg} alt="Photo Coma" />
        </div>
        <div class="printOrder-desc">
          <h1 class="title title-main">
            <span>печать д<span class="circle-text"></span>кументов,</span>
            <span>проектной документации,</span>
            <span>твёрдый переплёт дипл<span class="circle-text"></span>мов</span>
          </h1>
          <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vel consequatur at exercitationem eos rem commodi in cum sequi asperiores?</p>
          <button
            class="btn"
            onclick={() => {
              this.Static.page = "order";
              this.init();
            }}
          >
            Заказать печать
            <img src={arrowR} alt="Заказать" />
          </button>
        </div>
      </section>
      <section class="category">
        {
          category.map((item, index) => {
            return (
              <div class="category-item">
                <img src={item.src} alt="Print" />
              </div>
            )
          })
        }
      </section>
      <section class="emblem">
        <h2 class="title">
          <span>печать и твёрдый переплёт</span>
          <span>дипл<span class="circle-text"></span>мов</span>
        </h2>
        <div class="order-emblem">
          <span class="brand-name">с фирменной эмблемой твоего вуза</span>
          <button
            class="btn"
            onclick={() => {
              this.Static.page = "order";
              this.init();
            }}
          >
            Заказать печать
            <img src={arrowR} alt="Заказать печать" />
          </button>
        </div>
      </section>
      <section class="about">
        <div class="about-items">
          <div class="about-item">
            <h6 class="title">25 000+</h6>
            <p class="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio velit laboriosam, saepe assumenda sed numquam est corrupti beatae nulla dolores!</p>
          </div>
          <div class="about-item">
            <h6 class="title">25 000+</h6>
            <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptate sapiente quaerat dicta maiores animi consectetur ipsa pariatur earum maxime.</p>
          </div>
          <div class="about-item">
            <h6 class="title">25 000+</h6>
            <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ullam vero ex incidunt similique inventore! Minus non cum placeat quod?</p>
          </div>
        </div>
      </section>
      <section class="location">
        <h2 class="title title-general">наши к<span class="circle-text"></span>пицентры</h2>
        <a href="tel:+7 (915) 431-06-66" class="location-subtitle title-general">
          +7 (915) 431-06-66
          <img src={whatsup} alt="Whats'up" />
        </a>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.31870343532!2d37.67732269563418!3d55.770336469818844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a83a74c32cd%3A0xf2d17908ec580712!2z0JHQsNGD0LzQsNC90YHQutCw0Y8g0YPQuy4sINCc0L7RgdC60LLQsA!5e0!3m2!1sru!2sru!4v1682270208175!5m2!1sru!2sru" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
      </section>
      <section class="address">
        <div class="address-item"></div>
        <div class="address-item"></div>
        <div class="address-item address-item_info">
          <h6 class="address-item_title">Метро Аэропорт</h6>
          <span class="address-item_desc">Московское метро</span>
          <span class="address-item_desc">Ежедневно с 9.00 до 18.00</span>
        </div>
        <div class="address-item address-item_empty"></div>
        <div class="address-item address-item_info address-item_info_r">
          <h6 class="address-item_title">Бауманская</h6>
          <span class="address-item_desc">ул. Бауманская, д. 190</span>
          <span class="address-item_desc">Ежедневно с 9.00 до 18.00</span>
        </div>
        <div class="address-item"></div>
        <div class="address-item"></div>
        <div class="address-item"></div>
      </section>
    </div>
  )
}