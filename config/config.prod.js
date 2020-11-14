'use strict';
const path = require('path')

module.exports = appInfo => {

    return {
        // 插件路径
        admin_root_path: '/static',
        // 数据库连接
        mongoose: {
            client: {
                url: 'mongodb://127.0.0.1:27017/newsite',
                options: {
                    auth: { authSource: "admin" },
                    user: 'root',
                    pass: 'hds1512',
                    useCreateIndex: true,
                    useUnifiedTopology: true,
                    keepAlive: 3000
                },
            },
        },
        // mongodb相关路径
        mongodb: {
            binPath: '/usr/bin/',
            backUpPath: path.join(appInfo.baseDir, 'databak/')  //备份地址
        },
        // 静态目录
        static: {
            prefix: '/static',
            dir: [path.join(appInfo.baseDir, 'app/public'), path.join(appInfo.baseDir, 'backstage/dist')],
            maxAge: 31536000,
        },
        // 日志路径
        logger: {
            dir: path.join(appInfo.baseDir, 'logs'),
        },
        // 服务地址配置
        server_path: 'http://106.55.43.96:8080',
        server_api: 'http://106.55.43.96:8080/api',

    }
};