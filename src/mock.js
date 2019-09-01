// 引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random
// mock一组数据
const produceNewsData = function() {
    let postList = []
    let postCommand = []
	for (let i = 0; i < 50; i++) {
		let postInfo = {
			content: Random.csentence(15, 60),
			author: Random.cname(), 
            date: Random.date(),
            time: Random.time(),
            postId: Random.integer(0, 30),
            addNum: Random.integer(0, 999),
            totalNum: Random.integer(99, 1000),
            newestDate: Random.integer(0, 60)
        }
        let postDetail = {
            author: Random.cname(),
            date: Random.date(),
            time: Random.time(),
            content: Random.csentence(15, 60),
            totalNum: Random.integer(0, 999)
        }
        postList.push(postInfo)
        postCommand.push(postDetail)
    }
    let floorMaster = {
        author: Random.cname(),
        date: Random.date(),
        time: Random.time(),
        content: Random.csentence(60, 120),
        forum: Random.cword(3, 8)
    }

	return {
        postList,
        postCommand,
        floorMaster
	}
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index', 'post', produceNewsData)