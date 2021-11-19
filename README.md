### What's this?

This project is using [alfy](https://github.com/sindresorhus/alfy) to build a translate workflow for Alfred 

### How to start dev

`npm run start:dev word_you_want_to_translate`

### How to test

`node index.js test`

### Youdao API return data format

```
{
    returnPhrase: ['test'],
    query: 'test',
    errorCode: '0',
    l: 'en2zh-CHS',
    tSpeakUrl: 'https://openapi.youdao.com/ttsapi?q=%E6%B5%8B%E8%AF%95&langType=zh-CHS&sign=75E57F1EC698EEDA305A53F2425C8456&salt=1636962985755&voice=4&format=mp3&appKey=525100d8f9304067&ttsVoiceStrict=false',
    web: [{
            value: [Array],
            key: 'Test'
        },
        {
            value: [Array],
            key: 'Test case'
        },
        {
            value: [Array],
            key: 'Turing test'
        }
    ],
    requestId: '6303fa35-19a2-4a9f-aad2-953dfeacd919',
    translation: ['测试'],
    dict: {
        url: 'yddict://m.youdao.com/dict?le=eng&q=test'
    },
    webdict: {
        url: 'http://mobile.youdao.com/dict?le=eng&q=test'
    },
    basic: {
        exam_type: ['初中', '高中', 'CET4', 'CET6', '考研'],
        'us-phonetic': 'test',
        phonetic: 'test',
        'uk-phonetic': 'test',
        wfs: [
            [Object],
            [Object],
            [Object],
            [Object],
            [Object]
        ],
        'uk-speech': 'https://openapi.youdao.com/ttsapi?q=test&langType=en&sign=FB2DF51F03430A551BA6748B5C038E34&salt=1636962985755&voice=5&format=mp3&appKey=525100d8f9304067&ttsVoiceStrict=false',
        explains: [
            'n. （书面或口头的）测验，考试；（医疗上的）检查，化验，检验；（对机器或武器等的）试验，检验；（对水、土壤、空气等的）检测，检验；（衡量能力或技能等的）测试，考验；医疗检查设备；化验结果；（常指板球、橄榄球的）国际锦标赛（Test）；准则，标准；（冶）烤钵，灰皿；（一些无脊椎动物和原生动物的）甲壳',
            'v. 试验，测试；测验，考查（熟练程度，知识）；检测，检验（质量或含量）；检查（身体），（用试剂）化验；考验；尝，（触）试',
            'vi. 试验；测试',
            'n. （Test）人名；（英）特斯特'
        ],
        'us-speech': 'https://openapi.youdao.com/ttsapi?q=test&langType=en&sign=FB2DF51F03430A551BA6748B5C038E34&salt=1636962985755&voice=6&format=mp3&appKey=525100d8f9304067&ttsVoiceStrict=false'
    },
    isWord: true,
    speakUrl: 'https://openapi.youdao.com/ttsapi?q=test&langType=en&sign=FB2DF51F03430A551BA6748B5C038E34&salt=1636962985755&voice=4&format=mp3&appKey=525100d8f9304067&ttsVoiceStrict=false'
}
```
## Repo
- https://github.com/f1982/translate-workflow-for-alfred

# References
- https://github.com/SamVerschueren/alfy-test
- https://github.com/SamVerschueren/alfred-ng

## test new rule 22