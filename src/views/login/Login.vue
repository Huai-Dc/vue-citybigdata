<template>
    <div class="login-container">
        <div class="login-background">
            <video class="login-video" autoplay="" loop="" muted="">
                <!--<source src="http://video.699pic.com/videos/62/91/21/Jy22WYyDygPf1528629121.mp4" type="video/mp4">-->
                <source src="./../../assets/login-1.mp4">
            </video>
            <!--<img class="login-image" src="./../../assets/image/iron-man-bg2.jpg" alt="">-->
        </div>
        <div class="login-content">
            <el-form class="login-form" :rules="rules" ref="loginForm" :model="loginForm">
                <div class="login-title">
                    <h2>城市大数据系统</h2>
                </div>
                <el-form-item prop="username">
                    <span class="login-icon">
                        <i class="el-icon-user"></i>
                    </span>
                    <el-input name="username" v-model="loginForm.username" clearable
                              type="text" placeholder="请输入用户名！"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <span class="login-icon">
                        <i class="el-icon-lock"></i>
                    </span>
                    <el-input name="password" v-model="loginForm.password" clearable
                              :type="passwordType" placeholder="请输入密码！"></el-input>
                    <span class="login-icon" :class="eyeIconHighlight" @click="showPwd"><i class="el-icon-eye"></i></span>
                </el-form-item>
                <el-button class="login-submit" :loading="isLoading" type="primary" @click.native="doLogin">{{showLoading}}</el-button>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return {
                loginForm: {
                    username: '',
                    password: ''
                },
                isLoading: false,
                eyeIconHighlight: "",
                passwordType: 'password',
                rules: {
                    username: [
                        { required: true, message: '用户名不能为空！', trigger: 'blur'}
                    ],
                    password: [
                        { required: true, message: '密码不能为空！', trigger: 'blur'},
                        { min: 6, max: 15, message: '密码长度在 6 到 15 个字符', trigger: 'blur' }
                    ]
                }
            }
        },
        computed:{
            showLoading: function(){
                return this.isLoading ? "登录中...": "登录";
            }
        },
        methods: {
            resetForm(formName) { // 重置
                this.$refs['loginForm'].resetFields();
            },
            showPwd(){ // 切换密码可见状态
                if(this.passwordType === "password"){
                    this.passwordType = 'text';
                    this.eyeIconHighlight = 'login-icon-active'
                } else {
                    this.passwordType = 'password';
                    this.eyeIconHighlight = '';
                }
            },
            doLogin(){ // 登录
                this.$refs['loginForm'].validate((valid) => {
                    let _this = this;
                    if(valid){
                        _this.isLoading = true;
                        let postData = {
                            username: _this.loginForm.username,
                            password: _this.loginForm.password
                        };
                        this.$store.dispatch('LoginByUser',postData).then((res) => {
                            _this.isLoading = false;
                            this.$router.push({
                                path: '/HomeIndex'
                            });
                        });
                    } else {
                        console.log('未通过验证！');
                        return false;
                    }
                });
            }
        }
    }
</script>
<style lang="scss">
    .login-container {
        .el-form-item{
            background-color: rgba(0, 0, 0, 0.1);
            .el-input {
                display: inline-block;
                width: 300px;
                input {
                    background: transparent;
                    border: 0;
                    height: 47px;
                    color: lightgray;
                    padding: 12px 5px 12px 15px;
                    vertical-align: middle;
                }
            }
        }
    }
</style>
<style lang="scss" scoped>
.login-container{
    position: fixed;
    height: 100%;
    width: 100%;
    .login-video {
        object-fit: cover;
        margin: auto;
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        visibility: visible;
        width: 100%;
        height: 100%;
    }
    .login-content {
        background-color: rgba(0, 0, 0, 0.55);
    }
    .login-background {
        object-fit: cover;
        margin: auto;
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        visibility: visible;
        width: 100%;
        height: 100%;
    }
    .login-content{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        .login-form{
            min-width: 400px;
            min-height: 400px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 10px;
            .login-title {
                color: #eee;
            }
            .login-icon {
                display: inline-block;
                width: 30px;
                color: #889aa4;
                padding: 6px 5px 6px 15px;
            }
            .login-icon-active {
                color: #89e5e7;
            }
            .login-submit {
                width: 100%;
                background-color: #0163ae;
                border: 0;
                height: 45px;
            }
            .login-submit:hover{
                background-color: #0d367f;
            }
        }
    }
    .login-image {
        background-size: cover;
    }
    .el-form-item {
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 5px;
        text-align: left;
    }
}
</style>