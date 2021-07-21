import '../../src/css/components/news-section/news.css'

export default {
  title: 'Components/News/News',
  parameters: {
    notes: `Зависимости: <b>news.css;</b> \n
    На проекте расположены в ассете <b>NewsSectionAsset.php</b>`,
  },
  args: {
    imgUrl: 'https://myfin.by/source/thumb_440_880/1/PjGTbRSu8zLrrUNG_VkZsw4VIktFGoIe.jpg',
    date: '19.07.2021, 13:10',
    title: 'Курсы валют на 19 июля: курс доллара – 2.5359, курс евро – 2.9875, российский рубль – 3.4102 ',
    link: '#',
    discussionLink: '#',
    views: 297,
    modificator: ''
  }
}

const Template = ({ data, ...args }) => {
  return (
    `
      <div class="news ${args.modificator}">
        <div class="news__wrapper">
            <a href="${args.link}" class="news__link"></a>
            <div class="news__header">
                <div class="news__filter"></div>
                <div class="news__image">
                  <picture>
                      <source media="(max-width: 0px)" srcset="" src="${args.imgUrl}">
                      <img src="${args.imgUrl}" alt="">
                  </picture>
                </div>
            </div>
            <div class="news__footer">
                <div class="news__date">${args.date}</div>
                <div class="news__title fake-link">${args.title}</div>
                <div class="news__footer-info">
                <div class="news__comments mr-15 mt-10">
                    <a href="${args.discussionLink}">Обсудить</a>
                </div>
                    <div class="news__views mt-10">${args.views}</div>
                </div>
            </div>
        </div>
      </div>
    `
  )
}

export const News = Template.bind({})
News.storyName = 'Новость'

export const NewsMain = Template.bind({})
NewsMain.args = {
  modificator: 'news--main'
}
NewsMain.storyName = 'Главная новость'



