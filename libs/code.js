var code = {
    //返回码格式:第一位为系统级返回码,2为业务级返回码,后三位具体代码
    'success': {
        code: 200,
        message: "success"
    },
    'test': {
        code: 1001,
        message: "test"
    },
    'mysqlError': {
        code: 1002,
        message: "数据库访问错误"
    },
    'paramError': {
        code: 1003,
        message: "参数错误"
    },
    'requestError': {
        code: 1004,
        message: "请求错误"
    },
    'cannotSupportAjax': {
        code: 1005,
        message: "不支持xhr对象"
    },
    'loginError': {
        code: 2001,
        message: "你还没有登陆"
    },
    'unauthorizedOperation':{
        code:2002,
        message:'未经授权的操作'
    },
    'NotFound404': {
        code: 2003,
        message: "已有重复文件"
    },
    'updateNotChanged': {
        code: 2004,
        message: "数据并没有改动"
    },
    'checkFailed': {
        code: 2005,
        message: "认证失败"
    },
    'checkPhoneFailed': {
        code: 2006,
        message: "信息输入有误"
    },
    'checkSuccess': {
        code: 2007,
        message: "您并不是报修系统成员"
    },
    'alreadyVip': {
        code: 2008,
        message: "您已经是会员了"
    },
    'dataRedundancy':{
        code:2009,
        message:'文件名重复'
    },
    'unCompleteInfo':{
        code:2010,
        message:'信息没有补全'
    }

};

module.exports = code;