module.exports = app => {

    const {
        router,
        controller
    } = app;


    router.get('/api/getImgCode', controller.page.home.getImgCode);  // 登录图片验证码
    router.get('/api/createQRCode', controller.page.home.createQRCode); // 二维码
    router.get(['/dr-admin', '/admin/login'], controller.api.admin.login);
    router.post('/api/admin/doLogin', controller.api.admin.loginAction);
    router.get('/api/systemConfig/getConfig', controller.api.systemConfig.list)

    //ApiRouters

}