import { Cemjsx } from "cemjs-all"
import arrowR from '@svg/arrow_right.svg'
import filePdf from '@svg/filePdf.svg'




export default function (data, children) {
  return (
    <section class="thanks">
      <div class="thanks-wrap">
        <h1 class="thanks-title">спасибо за заказ!</h1>
        <p class="thanks-desc">В течение 5 минут менеджер свяжется с тобой по номеру для подтверждения заказа</p>
        <span class="text-bold">+7 (989) 123-56-09</span>
        <a 
          href=""
          class="text-primary link"
          onclick={()=>{
            this.Static.page = "home";
            this.init();
          }}
        >
          Вернуться на главную
        </a>
      </div>
    </section>
  )
}