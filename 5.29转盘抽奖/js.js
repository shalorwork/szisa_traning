window.onload = function () {
    var outerR = 150;//外圆半径（10个扇形的母线长）
    var interR = 50;//内圆半径
    var step = 2 * Math.PI / 10;//扇形角度(36度)
    var info = ["一等奖", "二等奖", "三等奖", "四等奖", "五等奖", "六等奖", "七等奖", "八等奖", "九等奖", "十等奖"];//info数组，存放文字,奖项可以修改为其它，注意修改扇形的角度
    var color = [];//储存随机色的数组
    //利用for循环和获取随机色函数,获取10个颜色并压入数组中
    for (var i = 0; i < 10; i++) {
        //color.push(getColor());
        var co = getColor(); //使用定义的随机生成颜色的函数
        if (inArr(color, co)) {
            i--; //如果存在相同的颜色，则i减一，不执行后续代码，重新开始循环
            console.log(i); continue;
        }
        color.push(co);
    }
    var canvas = document.getElementById('canvas');//获取canvas标签
    var ctx = canvas.getContext('2d');//获取上下文该对象包含所有可以操作的属性
    ctx.translate(250, 250);//设置(250,250)为坐标原点偏移中心点，否则从左上开始。根据canvas的大小来计算
    init(ctx);//绘制转盘
    createArrow(ctx);//画出箭头
    var beginAngle = 50;//旋转起来时，默认开始旋转的角速度
    var radio = 0.95;//旋转速度衰减系数，影响旋转时间
    var t = null;//旋转开关
    document.getElementById("btn").onclick = function () {
        if (t) {//当t有值时直接返回，不执行任何操作
            return false;
        }
        beginAngle = Math.random() * 30 + 50;
        var step = beginAngle + Math.random() * 20 ;//随机角速度，最低值为50
        var angle = 0;//转过的角度
        t = setInterval(function () {
            step *= radio;//角速度不断衰减
            if (step <= 0.1) {//当角速度小于等于0.1时
                clearInterval(t);//取消刷新
                t = null; //让t 为空

                var pos = Math.ceil(angle / 36);//位置(向上取整)计算转过多少个扇形
                var res = info[10 - pos];//找出指针指向的奖项
                ctx.save();
                ctx.beginPath();
                ctx.font = "23px 华文行楷";
                ctx.fillStyle = "#f00";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(res, 0, 0);
                console.log(res);
                ctx.restore();
            } else {
                ctx.clearRect(-250, -250, 500, 500);//清除整个画布
                angle += step;//计算出总角度
                if (angle > 360) {
                    angle -= 360;
                }
                ctx.save();
                ctx.beginPath();
                ctx.rotate(angle * Math.PI / 180);//旋转画布
                init(ctx);//绘制转盘（包括1个内圆、10个扇形、文字）
                ctx.restore();
                createArrow(ctx);//画出箭头
            }
        }, 60);//每60毫秒执行一次
    };
    //获取随机色函数
    function getColor() {
        function random() {
            return Math.floor(Math.random() * 255);
        }
        return "rgb(" + random() + "," + random() + "," + random() + ")";//返回字符串
    }
    function inArr(arr, val) {
        //判断颜色的数组中是否有重复的颜色，即值相同
        var isIn = false; //lun'x'
        for (var i = arr.length; i >= 0; i--) {
            if (arr[i] == val) {
                isIn = true; return isIn;
            }
        };
        return isIn;
    }
    function init(ctx) {
        //10个扇形
        for (var i = 0; i < 10; i++) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.fillStyle = color[i];
            //利用画圆函数画出不同位置的扇形
            ctx.arc(0, 0, outerR, i * step, (i + 1) * step); //画圆弧，注意中心点已经改了
            ctx.fill();
            ctx.restore();
        }
        //内圆
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = "#fff";
        ctx.arc(0, 0, interR, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
        //在扇形上写字
        for (var i = 0; i < 10; i++) {
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = "#000";
            ctx.font = "20px 华文行楷";
            ctx.textAlign = "center";//水平对齐方式为居中
            ctx.textBaseline = "middle";//文本基线为正中。
            ctx.rotate(i * step + step / 2);
            ctx.fillText(info[i], (outerR + interR) / 2, 0);//文字写在两圆之间
            ctx.restore();
        }
    }
    //绘制指针函数
    function createArrow(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.moveTo(150, 0); //开始画点
        ctx.lineTo(180, 15);
        ctx.lineTo(180, 5);
        ctx.lineTo(250, 5);
        ctx.lineTo(250, -5);
        ctx.lineTo(180, -5);
        ctx.lineTo(180, -15);
        ctx.closePath();//把点都连接起来，形成闭环
        ctx.fill();
        ctx.restore();
    }
}