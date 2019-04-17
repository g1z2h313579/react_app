var Mock = require('mockjs');



let mr = Mock.Random
module.exports = () => {
  // 使用 Mock
  var data = Mock.mock({
    'attention|20': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        auth:{
          authName : '@cname',
          authIcon : mr.image('50x50', mr.color(), mr.word(1,2)),
          authDate : '@datetime("y-M-d H:m:s")'
        } , 
        attenContent : {
          title : "@ctitle(10,15)",
          tool : "@csentence(5)",
          content : '@cparagraph(2)'
        },
        pinglundianzan : {
          "share|1-1000" : 1,
          "comment|1-1000" : 1,
          "thumbsUp|1-1000" : 1,
        }
      },
    ],
    "baotang|20" : [
      {
        "id|+1" : 1,
        src : mr.image('450x328', mr.color()),
        title : "@ctitle(2,5)",
        peicai : "@cword(1,3)",
        auth : "@cname",
        "liulan|1-1000" : 1,
        "zan|1-1000" : 1
      }
    ],
    "discover|20" : [
      {
        'id|+1': 1,
        "dataName" : "disData",
        auth:{
          authName : '@cname',
          authIcon : mr.image('50x50', mr.color()),
          authDate : '@datetime("y-M-d H:m:s")'
        } , 
        disContent : '@cparagraph(2)',
        disImage : [mr.image('121x91', mr.color()),mr.image('121x91', mr.color()),mr.image('121x91', mr.color())],
        pinglundianzan : {
          "share|1-1000" : 1,
          "comment|1-1000" : 1,
          "thumbsUp|1-1000" : 1,
        }
      },
    ],
    "eatBiji|4" : [
      {
        "id|+1" : 1,
        src : mr.image('100x100', mr.color()),
        des : '@cparagraph(2)'
      }
    ],
    "eatCai|4" : [
      {
        "id|+1" : 1,
        src : mr.image('100x100', mr.color()),
        des : '@cword(1,5)',
        peicai : "@title(2,6)"
      }
    ],
    "eatYun|4" : [
      {
        "id|+1" : 1,
        src : mr.image('100x100', mr.color()),
        des : '@cparagraph(2)'
      }
    ],
    "goodfood|20" : [
      {
        title : "@ctitle",
        name : "@cname",
        "play|1-1000" : 1,
        "collection|1-1000" : 1,
        src : "/video/2.mp4",
        bg : mr.image('951x580', mr.color())
      }
    ],
    "kitchen|20" : [
      {
        "id|+1" : 1,
        title : "@ctitle(5)",
        src1 : mr.image('121x75', mr.color()),
        src2 : mr.image('121x75', mr.color()),
        name1 : "@ctitle(2,6)",
        name2 : "@ctitle(2,6)"
      }
    ],
    "new|20" : [
      {
        'id|+1': 1,
        "dataName" : "newData",
        auth:{
          authName : '@cname',
          authIcon : mr.image('100x100', mr.color()),
          authDate : '@datetime("y-M-d H:m:s")'
        } , 
        "guanzhu|1-2" : true,
        disContent : '@cparagraph(2)',
        disImage : [mr.image('121x91', mr.color()),mr.image('121x91', mr.color()),mr.image('121x91', mr.color())],
        pinglundianzan : {
          "share|1-1000" : 1,
          "comment|1-1000" : 1,
          "thumbsUp|1-1000" : 1,
        }
      },
    ],
    "shop|20" : [
      {
        "id|+1" : 1,
        src : mr.image('240x240', mr.color()),
        title : "@cparagraph(1)",
        "price|1-200.1-2" : 1
      }
    ],
    "sort_caipu|10" : [
      {
        "id|+1" : 1,
        sort : "@ctitle(2,4)",
        "children|0-20" : [{
          name : "@cname",
          "ckey|1-1000" : 1
        }]
      }
    ],
    "sort_yangsheng|10" : [
      {
        "id|+1" : 1,
        sort : "@ctitle(2,4)",
        "children|0-20" : [{
          name : "@cname",
          "ckey" : "@datetime('T')"
        }]
      }
    ],
    "vegetarian|20" : [
      {
        "id|+1" : 1,
        src : mr.image('121x91', mr.color()),
        title : "@ctitle(2,4)",
        peicai : "@cword(1,5)",
        auth : "@cname",
        "liuyan|1-1000" : 1,
        "zan|1-1000" : 1
      }
    ]
  });
  // 返回的data会作为json-server的数据
  return data;
};