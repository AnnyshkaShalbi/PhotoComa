import { Cemjsx } from "cemjs-all"

const steps = [
  {
    title: 'выберите обложку',
    desc: 'Выбери понравившийся вариант и цвет обложки',
  },
  {
    title: 'загрузи файл',
    desc: 'Загрузите файл с работой в формате PDF',
  },
  {
    title: 'оформи заказ',
    desc: 'Выбери понравившийся вариант и цвет обложки',
  },
]

export default function (data, children) {
  return (
    <div
      class="order"

    >
      <h2 class="title-secondary">твёрдый переплёт дипломов</h2>
      <p class="desc">Твердый переплет сохранит документы в идеальном состоянии, повысит презентабельность их внешнего вида. Дипломы и диссертации будут защищены от посторонних воздействий и качественно скреплены.</p>
      <div class="steps">
        {
          steps.map((item, index)=>{
            return(
              <div class="steps-item">
                <span class="step">{index++}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}