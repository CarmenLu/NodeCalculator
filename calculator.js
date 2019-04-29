var http = require('http');
var url=require('url');
http.createServer(function (req, res) {
        let result = 0;
        let params=url.parse(req.url,true).query //解析参数
        console.log(params)
        let op1=params.op1
        let op2=params.op2
        let signal=params.signal
        if(signal===' '){//转义问题
            signal='+';
     }
        if(op1&&op2&&signal){
            result=eval(op1+signal+op2);
        }else{
            console.log('请输入正确的符号')
        }
        res.write(result.toString())
        res.end()


}).listen(3000);


console.log('计算器后台运行成功')
