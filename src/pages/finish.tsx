import { Cemjsx } from "cemjs-all"
import arrowR from '@svg/arrow_right.svg'
import filePdf from '@svg/filePdf.svg'

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
    done: false,
  },
  {
    title: 'оформи заказ',
    desc: 'В несколько кликов',
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

      <section class="finish"></section>


    </div>
  )
}