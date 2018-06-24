// 新增图书
// 1.获取豆瓣信息 https://api.douban.com/v2/book/isbn/:name
// 2.入库

const https = require('https')
const { mysql } = require('../qcloud')

module.exports = async (ctx) => {
  const {isbn,openid} = ctx.request.body
  console.log("添加图书 ",ctx.request.body)
  if(isbn && openid) {

    // 判断图书书否已经添加过
    const findRes = await mysql('books').select().where('isbn',isbn)
    if(findRes.length) {
      ctx.state = {
        code: -1,
        data: {
          msg:'此图书已经存在'
        }
      }
      return
    }

    // 添加图书
    let url = 'https://api.douban.com/v2/book/isbn/' + isbn
    const bookinfo = await getJSON(url)

    const rate = bookinfo.rating.average
    const { title, image, alt, publisher, summary, price } = bookinfo
    const tags = bookinfo.tags.map( v => {
      return `${v.title} ${v.count}`
    }).join(',')
    const author = bookinfo.author.join(',')
    console.log({
      rate,title,image,alt,publisher,summary,price,tags,author
    })
    try{
      await mysql('books').insert({
        isbn,openid,rate,title,image,alt,publisher,summary,price,tags,author
      })
      ctx.state.data = {
        title,
        msg: 'success'
      }
    } catch(e) {
      ctx.state = {
        code: -1,
        data: {
          msg: '新增失败' + e.sqlMessage
        }
      }
    }
  }
}

function getJSON(url){
  return new Promise((resolve,reject) => {
    https.get(url,res => {
      let urlData = ''
      res.on('data', data => {
        urlData += data
      })
      res.on('end', data => {
        let bookinfo = JSON.parse(urlData)
        if(bookinfo.title) {
          resolve(bookinfo)
        }
        reject(bookinfo)
      })
    })
  })
}
