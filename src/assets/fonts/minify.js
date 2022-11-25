const Fontmin = require('fontmin');

function minifyFont(fontName, text) {
  text = [...new Set(text.split(''))]
  const fontmin = new Fontmin()
    .src(`./${fontName}.ttf`)
    .use(Fontmin.glyph({
      text,
      hinting: false         // keep ttf hint info (fpgm, prep, cvt). default = true
    }))
    .use(Fontmin.ttf2woff({
      deflate: true           // deflate woff. default = false
    }))
    .use(Fontmin.ttf2woff2())
    // .use(Fontmin.css())
    .dest('build/fonts');

// 执行
  fontmin.run(function (err, files, stream) {
    if (err) {                  // 异常捕捉
      console.error(err);
    }
    console.log(fontName + ' done');        // 成功
  });
}

minifyFont('ximai', '本基金的业绩比较基准本基金与真实业绩比较基准的波动对比本基金历史盈利概率对比本基金的业绩归因分析诊断小结本基金与基准之间的跟踪误差基金与基准正收益率概率和平均收益率本基金的市场收益分析本基金的超额收益分析本基金的波动与回撤本基金对比基准的盈利胜率')
minifyFont('youshe', '赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻柏水窦章云苏潘葛奚范彭郎鲁韦昌马苗凤花方俞任袁柳酆鲍史唐费廉岑薛雷贺倪汤滕殷罗毕郝邬安常乐于时傅皮卞齐康伍余元卜顾孟平黄和穆萧尹姚邵湛汪祁毛禹狄米贝明臧计伏成戴谈宋茅庞熊纪舒屈项祝董梁杜阮蓝闵席季麻强贾路娄危江童颜郭梅盛林刁钟徐邱骆高夏蔡田樊胡凌霍虞万支柯昝管卢莫经房裘缪干解应宗丁宣贲邓郁单杭洪包诸左石崔吉钮龚程嵇邢滑裴陆荣翁荀羊於惠甄麹家封芮羿储靳汲邴糜松井段富巫乌焦巴弓牧隗山谷车侯宓蓬全郗班仰秋仲伊宫宁仇栾暴甘钭厉戎祖武符刘景詹束龙叶幸司韶郜黎蓟薄印宿白怀蒲台从鄂索咸籍赖卓蔺屠蒙池乔阴欎胥能苍双闻莘党翟谭贡劳逄姬申扶堵冉宰郦雍郤璩桑桂濮牛寿通边扈燕冀郏浦尚农温别庄晏柴瞿阎充慕连茹习宦艾鱼容向古易慎戈廖庾终暨居衡步都耿满弘匡国文寇广禄阙东欧殳沃利蔚越夔隆师巩厍聂晁勾敖融冷訾辛阚那简饶空曾毋沙乜养鞠须丰巢关蒯相查后荆红游竺权逯盖益桓公万俟司马上官欧阳夏侯诸葛闻人东方赫连皇甫尉迟公羊澹台公冶宗政濮阳淳于单于太叔申屠公孙仲孙轩辕令狐钟离宇文长孙慕容司徒司空召有舜丛岳寸二皇侨彤端竭赫实甫集象翠狂辟典良函芒苦其京中夕之章佳那拉冠宾香果伊尔根觉罗依尔觉罗萨嘛喇纳喇赫舍里额尔德特萨克达钮钴禄他塔喇喜塔腊蹇讷殷富察叶赫纳兰库雅喇瓜尔佳舒穆禄索绰络乌雅范姜碧鲁张廖张简图门太史公叔乌孙完颜马佳佟佳富察费莫称诺来多繁朴回毓鉏税荤靖绪愈硕牢买但巧枚撒泰秘亥绍以壬森斋释奕姒朋求羽用占真穰翦闾漆贵代贯旁崇冻告休褒谏锐皋闳在歧示是委钊频嬴呼大威昂律冒保系抄定化莱校么抗祢綦悟宏功庚务敏捷拱兆丑丙畅苟随类卯俟友答乙允甲留')
minifyFont('xieheiti', '1234567890')