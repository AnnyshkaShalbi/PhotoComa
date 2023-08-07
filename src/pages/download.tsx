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
    desc: 'Загрузите файл с работой в формате PDF.',
    active: true,
    done: false,
  },
  {
    title: 'оформи заказ',
    desc: 'Выбери понравившийся вариант и цвет обложки.',
    active: false,
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

      <section class="download">
        <div class="download_item file-wrap">
          <div class="file-wrap_content">
            <img class="file-wrap_img" src={filePdf} alt="Загрузка файла"></img>
            <p class="text">Загрузите файл в формате PDF Макс. размером 100 мб</p>
            <a href="/" class="btn">
              Загрузить файл
              <img src={arrowR} />
            </a>
          </div>
        </div>
        <div class="download_item file-options">
          <div class="file-options_item">
            <h5 class="file-options_title">печать</h5>
            <div class="file-options_choose">
              <div class="file-options_choose-item">
                <div class="radio-blue">
                  <input id="printBlack" type="radio" name="printType"></input>
                  <label for="printBlack"></label>
                </div>
                <span>Черно-белая</span>
              </div>
              <div class="file-options_choose-item">
                <div class="radio-blue">
                  <input id="printColor" type="radio" name="printType"></input>
                  <label for="printColor"></label>
                </div>
                <span>Цветная</span>
              </div>
            </div>
          </div>
          <div class="file-options_item">
            <h5 class="file-options_title">дополнительно</h5>
            <div class="additionally">
              <div class="additionally-item">
                <div class="additionally-item_check">
                  <input type="checkbox" id="cb1" name="cb1" checked />
                  <label for="cb1">Вклеить карман для рецензии</label>
                </div>
                <span>50 ₽</span>
              </div>
              <div class="additionally-item">
                <div class="additionally-item_check">
                  <input type="checkbox" id="cb2" name="cb2" />
                  <label for="cb2">Вклеить карман для CD диска</label>
                </div>
                <span>50 ₽</span>
              </div>
              <div class="additionally-item">
                <div class="additionally-item_check">
                  <input type="checkbox" id="cb3" name="cb3" />
                  <label for="cb3">Добавить пластиковый файл</label>
                </div>
                <span>20 ₽</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}