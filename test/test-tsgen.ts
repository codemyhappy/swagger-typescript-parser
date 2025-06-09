import { tsgen,download, moduleRoot, tsgenLog, tsgenInterface } from "../src/entry-tsgen";
import path from "path";



async function start(){

    tsgenLog('项目根路径：',moduleRoot());

    // 基于远端http链接
    tsgen({
        filepath:'http://api.test.sxw.cn/passport/v2/api-docs',
        // output:'/Users/xiaohei/code/sxjy_job/vue3-roll-bm/src/service/',
        serviceName: 'passport'
    });

    // 基于本地json文件
    // tsgen({
    //     filepath: moduleRoot()+'/test/doc.json',
    //     serviceName: 'testTsgen',
    //     output:moduleRoot()+'/dist',
    //     splitInterface:true
    // })

}


start()