import { DEBUG_MODE } from "./settings.js"

const EN_TO_ZHCHS = 'en2zh-CHS'

function parseTranslation(translation, lt, searchWorld) {
  return translation.map(
    (item) => ({
      title: DEBUG_MODE ? 'translation:' + item : item,
      subtitle: searchWorld,
      arg: lt === EN_TO_ZHCHS ? searchWorld : item,
      text: searchWorld,
    }),
  )
}

export { parseTranslation, EN_TO_ZHCHS }