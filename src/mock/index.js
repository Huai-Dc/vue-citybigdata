import Mock from 'mockjs'

Mock.mock(/\/login/, 'post',function(options) {
    return Mock.mock({
        "user|1": [{
            'name': '@first',
            'token': 'admin',
            'roles': ['admin'],
            'introduction': '超级管理员',
            'userId': /[a-z][A-Z][0-9]\d{5,10}/
        }]
    });
});
