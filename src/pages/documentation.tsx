import { Cemjsx } from "cemjs-all"
import arrowR from '@svg/arrow_right.svg'
import filePdf from '@svg/filePdf.svg'

export default function (data, children) {
  return (
    <div class="order">
      <h2 class="title-secondary">копирование документов</h2>
      <p class="desc">Любые документы могут быть откопированы в высоком качестве прямо у вас на глазах как в ч/б-варианте, так и в цвете.</p>

      <section class="doc">
        <table class="doc-table">
          <thead class="doc-table_header">
            <tr class="doc-table_row">
              <th class="doc-title">прайс-лист</th>
            </tr>
          </thead>
          <tbody class="doc-table_body">
            <tr class="doc-table_row">
              <td class="text-bold">Черно-белое копирование</td>
              <td>A4</td>
              <td>A3</td>
              <td>A2</td>
              <td>A1</td>
              <td>A0</td>
            </tr>
            <tr class="doc-table_row">
              <td>1-100 страниц</td>
              <td>10 ₽</td>
              <td>22 ₽</td>
              <td>60 ₽</td>
              <td>80 ₽</td>
              <td>130 ₽</td>
            </tr>
            <tr class="doc-table_row">
              <td>101-300 страниц</td>
              <td>8 ₽</td>
              <td>18 ₽</td>
            </tr>
            <tr class="doc-table_row">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr class="doc-table_row">
              <td class="text-bold">Цветное копирование</td>
              <td>A4</td>
              <td>A3</td>
              <td>A2</td>
              <td>A1</td>
              <td>A0</td>
            </tr>
            <tr class="doc-table_row">
              <td>{`1-100 страниц ${this.Static.fifteen}`}</td>
              <td>30 ₽</td>
              <td>55 ₽</td>
              <td>85 ₽</td>
              <td>110 ₽</td>
              <td>160 ₽</td>
            </tr>
            <tr class="doc-table_row">
              <td>{this.Static.fifteen}</td>
              <td>36 ₽</td>
              <td>60 ₽</td>
              <td>150 ₽</td>
              <td>190 ₽</td>
              <td>280 ₽</td>
            </tr>
            <tr class="doc-table_row">
              <td>{`101-300 страниц ${this.Static.fifteen}`}</td>
              <td>25 ₽</td>
              <td>50 ₽</td>
            </tr>
            <tr class="doc-table_row">
              <td>{this.Static.fifteen}</td>
              <td>30 ₽</td>
              <td>50 ₽</td>
            </tr>
          </tbody>
        </table>
        <div class="doc-request">
          <h3 class="doc-title">оставь заявку</h3>
          <div class="file-wrap">
            <div class="file-wrap_content">
              <img class="file-wrap_img" src={filePdf} alt="Загрузка файла"></img>
              <p class="text">Загрузите файл в формате PDF Макс. размером 100 мб</p>
              <button
                class="btn"
                onclick={() => {
                  this.Static.page = "finish"
                  this.init()
                }}
              >
                Загрузить файл
                <img src={arrowR} />
              </button>
            </div>
          </div>
          <p class="doc-request_text">Менеджер свяжется с тобой по номеру для подтверждения заказа</p>
          <div class="form-field">
            <label for="phone">Номер телефонa</label>
            <input id="phone" type="tel" class="form-input" placeholder="+7 (980) 324 - 12 - 32" />
          </div>
          <button class="btn btn-passive">
            Оставить заявку
          </button>
        </div>
      </section>

    </div>
  )
}