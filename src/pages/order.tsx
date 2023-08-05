import { Cemjsx } from "cemjs-all"
import cover1 from '@images/covers/1.png'
import cover2 from '@images/covers/2.png'
import cover3 from '@images/covers/3.png'
import cover4 from '@images/covers/4.png'
import cover5 from '@images/covers/5.png'
import emblem1 from '@images/emblems/1.png'
import emblem2 from '@images/emblems/2.png'
import emblem3 from '@images/emblems/3.png'
import emblem4 from '@images/emblems/4.png'
import emblem5 from '@images/emblems/5.png'

const steps = [
  {
    title: 'выберите обложку',
    desc: 'Выбери понравившийся вариант и цвет обложки.',
    active: true,
  },
  {
    title: 'загрузи файл',
    desc: 'Загрузите файл с работой в формате PDF.',
    active: false,
  },
  {
    title: 'оформи заказ',
    desc: 'Выбери понравившийся вариант и цвет обложки.',
    active: false,
  },
]

const covers = [
  {
    title: 'Без тиснения',
    img: cover1,
    price: '480 ₽',
  },
  {
    title: 'С тиснение ВКР',
    img: cover2,
    price: '560 ₽',
  },
  {
    title: 'С тиснение ДР',
    img: cover3,
    price: '560 ₽',
  },
  {
    title: 'С тиснение ДП',
    img: cover4,
    price: '560 ₽',
  },
  {
    title: 'С тиснение МД',
    img: cover5,
    price: '560 ₽',
  },
]

const emblems = [
  {
    img: emblem1,
    title: 'МАДИ',
    price: '1000 ₽',
  },
  {
    img: emblem2,
    title: 'Финашка',
    price: '1000 ₽',
  },
  {
    img: emblem3,
    title: 'Бауманка',
    price: '1000 ₽',
  },
  {
    img: emblem4,
    title: 'МАИ',
    price: '1000 ₽',
  },
  {
    img: emblem5,
    title: 'МЭИ',
    price: '1000 ₽',
  }
]

export default function (data, children) {
  return (
    <div class="order">
      <h2 class="title-secondary">твёрдый переплёт дипломов</h2>
      <p class="desc">Твердый переплет сохранит документы в идеальном состоянии, повысит презентабельность их внешнего вида. Дипломы и диссертации будут защищены от посторонних воздействий и качественно скреплены.</p>
      <div class="steps">
        {
          steps.map((item, index) => {
            return (
              <div class="steps-item">
                <span class={["step", item.active ? "step-active" : null]}>
                  {index + 1}
                </span>
                <div class="steps-info">
                  <h5 class="title-often">{item.title}</h5>
                  <p class="steps-info_desc">{item.desc}</p>
                </div>
              </div>
            )
          })
        }
      </div>

      <section class="order_content">
        <div class="diploma-color">
          <div class="title-block">
            <span class="step">1</span>
            <h5 class="title-often">цвет</h5>
          </div>
          <div class="radio-wrap">
            <div class="radio-red">
              <input id="checkboxRed" type="radio" name="coverBlue"></input>
              <label for="checkboxRed"></label>
            </div>
            <div class="radio-blue">
              <input id="checkboxBlue" type="radio" name="coverBlue"></input>
              <label for="checkboxBlue"></label>
            </div>
          </div>
        </div>

        <div class="diploma-cover">
          <div class="title-block pb_15">
            <span class="step">2</span>
            <h5 class="title-often">Обложка</h5>
          </div>
          <div class="covers">
            {covers.map((item, index) => {
              return (
                <div class="covers-item">
                  <div class="covers-item_img">
                    <img src={item.img} alt="Обложка диплома"></img>
                  </div>
                  <p class="covers-item_title">{item.title}</p>
                  <span class="covers-item_price">{item.price}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div class="diploma-emblem">
          <div class="title-block pb_15">
            <span class="step">2</span>
            <h5 class="title-often">добавь фирменную эмблему вуза</h5>
          </div>
          <div class="emblems">
            {
              emblems.map((item, index) => {
                return (
                  <div class="emblem-item">
                    <div class="emblem-item_img">
                      <img src={item.img} alt="Эмблема диплома" />
                    </div>
                    <h5 class="emblem-item_title">{item.title}</h5>
                    <span class="emblem-item_price text-primary">{item.price}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>



    </div>
  )
}