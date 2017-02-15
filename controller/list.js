var fyscu = require('../libs/fyscu.js');
var code = require('../libs/code.js');
var conn = require('../libs/mysql.js');


var list = {
    name: "列表接口"
};

list.do = function (req, res) {
    // console.log(111);
    // console.log(req);
    if(req.query.type){
        // console.log(111);
        //console.log(req.query);
        if(req.query.size!=0){
            //读取size条
            if(req.query.lastOne!=0){
                //读取lastone以后的size条
                res.end(fyscu.out(code.success));
                return;
            }else{
                //读取从0开始的size条
                res.end(fyscu.out(code.success));
                return;
            }
        }else{
            //全部加载
            // console.log(111);
            conn.list().query({
                sql:'select * from clothes where type=:type',
                params:{
                    type:req.query.type
                }
            },function (e, r) {
                if(e){
                    console.log(e);
                    res.end(fyscu.out(code.mysqlError));
                    return;
                }else{
                    //console.log(111);
                    //do sth with r;
                    console.log(r);
                    //res.end(fyscu.out(code.success));
                    res.end(fyscu.format(200,'success',r));
                    return;
                }
            })
        }
    }else{
        console.log("paramError");
        res.end(fyscu.out(code.paramError));
        return;
    }
};

module.exports = list;