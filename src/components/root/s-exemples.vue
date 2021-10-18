<template>
  <div class="s-exemples__wrapper">
    <div class="s-exemples">
      <base-heading color="color-primary">Примеры операций с клиентскими сегментами</base-heading>
      <div class="s-exemples__inner">
        <s-substrate top="50%" left="-50%" :mode="true" radius="19px">
          <div class="s-exemples__article">
            <h4 class="s-exemples__heading">1. Сложение сегментов</h4>
            <div class="s-exemples__chapter">
              <p class="s-exemples__chapter-text">
                Вы сможете собирать выборки с помощью сложения нескольких уже собранных сегментов, собирать сегменты из
                нескольких других сегментов, которые сложно получить путем фильтрации
              </p>
              <p class="s-exemples__chapter-text italic">
                <strong class="s-about__details--bold">Например:</strong>
                у выборке "женщины, совершили более 2х покупок за год" добавить выборку "мужчины, совершили более 1
                покупки за год", так как мужчины, допустим, покупают реже, таким образом мы получим выборку для
                проведения рекламной кампании.
              </p>
            </div>
          </div>
        </s-substrate>
        <s-substrate top="-15%" left="-90%" :mode="true" radius="19px">
          <div class="s-exemples__article">
            <h4 class="s-exemples__heading">2. Вычитание сегментов</h4>
            <div class="s-exemples__chapter">
              <p class="s-exemples__chapter-text">
                Даёт возможность собирать выборки с помощью вычитания одного или нескольких уже собранных сегментов
              </p>
              <p class="s-exemples__chapter-text italic">
                <strong class="s-about__details--bold">Например:</strong>
                к выборке "женщины, от 20 до 50 лет" можно добавить критерий "зарегистрировавшиеся после 01.01.2021" и
                таким образом, вы получите новый сегмент с теми женщинами, кто попадет под критерии возраста от 20 до 50
                лет и регистрации после 01.01.2021
              </p>
            </div>
          </div>
        </s-substrate>
        <s-substrate top="0%" left="-60%" :mode="true" radius="19px">
          <div class="s-exemples__article">
            <h4 class="s-exemples__heading">3. Деление сегментов</h4>
            <div class="s-exemples__chapter">
              <p class="s-exemples__chapter-text">
                Даёт возможность получать совершенного новые сегменты с помощью деления (дробления) сегментов и проверки
                различных гипотез
              </p>
              <p class="s-exemples__chapter-text italic">
                <strong class="s-about__details--bold">Например:</strong>
                для проведения A/B тестирования, где группу пользователей делят на два сегмента, один из сегментов
                остается без изменений — это контрольный сегмент “A”, на основе данных по этому сегменту мы будем
                оценивать эффект от вносимых изменений, пользователям из сегмента “B” показываем измененную версию
                ресурса
              </p>
            </div>
          </div>
        </s-substrate>
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeading from '@/components/base/base-heading.vue'
import SSubstrate from '@/components/helpers/s-substrate.vue'

export default {
  components: {
    BaseHeading,
    SSubstrate,
  },
}
</script>

<style>
.s-exemples__wrapper {
  padding: 0 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 160px;
}
.s-exemples {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
}
.s-exemples__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  margin-top: 45px;
}
.s-exemples__article {
  padding: 57px 38px;
  position: relative;
  z-index: 2;
  height: 356px;
}
.s-exemples__heading {
  font-size: 32px;
  line-height: 39px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 29px;
}
.s-exemples__chapter {
  display: flex;
  gap: 36px;
}
.s-exemples__chapter-text {
  font-size: 20px;
  line-height: 120%;
  color: #fff;
  width: 50%;
}
.s-exemples__chapter-text.italic {
  font-style: italic;
}
@media screen and (max-width: 900px) {
  .s-exemples__wrapper {
    padding: 0 0;
    margin-bottom: 160px;
  }
  .s-exemples__article {
    height: auto;
  }
  .s-exemples__heading {
    font-size: 23px;
  }
  .s-exemples__chapter {
    flex-direction: column;
  }
  .s-exemples__chapter-text {
    width: 100%;
    font-size: 18px;
  }
}
</style>
