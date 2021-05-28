import 'element-plus/packages/theme-chalk/src/base.scss'
import 'dayjs/locale/zh-cn'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import { locale, ElButton, ElSpace, ElRow, ElCol } from 'element-plus';

export default app => {
  import.meta.env.MODE === 'production' ? locale.use(lang) : locale(lang)
  app.component(ElButton.name, ElButton)
  app.component(ElSpace.name, ElSpace)
  app.component(ElRow.name, ElRow)
  app.component(ElCol.name, ElCol)
}
