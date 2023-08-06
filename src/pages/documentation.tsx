import { Cemjsx } from "cemjs-all"
import arrowR from '@svg/arrow_right.svg'

const steps = [
  {
    title: 'выберите обложку',
    desc: 'Синяя. С тиснением ВКР. С эмблемой МАДИ — 480 ₽',
    active: false,
    done: true,
  },
  {
    title: 'загрузи файл',
    desc: 'Дипломная работа_2023.pdf',
    active: false,
    done: true,
  },
  {
    title: 'оформи заказ',
    desc: 'В несколько кликов.',
    active: true,
    done: false
  },
]


export default function (data, children) {
  return (
    <div class="order">
      <h2 class="title-secondary">твёрдый переплёт дипломов</h2>
      <div class="steps">
        {
          steps.map((item, index) => {
            return (
              <div class="steps-item">
                <span class={["step", 
                  item.active ? "step-active" : item.done ? "step-done" : null]}>
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

      <section class="documentation">
        <div class="documentation-item">
          <form class="form">
            <div class="g-col2">
              <div class="form-field">
                <label for="phone">Номер телефон</label>
                <input id="phone" type="tel" class="form-input" placeholder="+7 (980) 324 - 12 - 32" />
              </div>
              <div class="form-field">
                <label for="phone">Имя</label>
                <input id="phone" type="text" class="form-input" placeholder="Андрей" />
              </div>
            </div>
            <div class="form-field">
              <label for="phone">Электронная почта</label>
              <input id="phone" type="email" class="form-input" placeholder="examplecloud@gmail.com" />
            </div>
            <div class="form-field">
              <label for="phone">Комментарий</label>
              <textarea class="form-comment">Завернуть диплом в пленку или добавить пакет</textarea>
            </div>
            <div class="g-col2">
              <button class="btn">
                Оформить заказ
                <img src={arrowR} alt="Заказать" />
              </button>
              <p>
                Нажимая кнопку «Оформить заказ», 
                ты даёшь своё согласие на обработку <a href="/" class="link">персональных данных</a>
              </p>
            </div>
          </form>
        </div>
        <div class="documentation-item">
          <p class="documentation-text">после оформления заказа ты можешь оплатить его онлайн и забрать свой диплом 
            без надоедливой очереди</p>
        </div>
      </section>

    </div>
  )
}