(function(w) {
    let baseUrl = 'http://192.168.14.73:8080/api/v1'
    let port = {
        cont_sreach: baseUrl + '/index/search', //文章搜索
        cont_article: baseUrl + '/index/category', //文章类型
        cont_hot: baseUrl + '/index/hotpic', //热点图
        cont_top: baseUrl + '/index/rank', //文章热门排行
        cont_latest: baseUrl + '/index/latest', //最新资讯
        cont_news: baseUrl + '/index/latest_comment', //最新评论
        cont_focus: baseUrl + '/index/attention', //焦点关注
        cont_content: baseUrl + '/index/article', //文章详细内容
        cont_comment: baseUrl + '/index/post_comment', //发表评论
        comment_list: baseUrl + '/index/get_comment' //评论列表
    }
    w.port = port
}(window))