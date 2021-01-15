# Fuller-admin

![登录页](https://cdn.jsdelivr.net/gh/Haiwar/images/img/20210111135135.png)

![首页](https://i.loli.net/2020/09/16/tKblosQa7SrLJ4d.png)
除了有`Element`的风格还有`Antv`风格，[戳我](https://gitee.com/liuhaier/fuller-admin-antv)；欢迎`Star`，以便保存~

## Project setup
```
# 克隆项目
git clone https://gitee.com/liuhaier/vue-fuller-admin.git

# 进入项目目录
cd fuller-admin

# 安装依赖(建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题)
npm install --registry=https://registry.npm.taobao.org

# npm -i
npm install

# 启动服务
npm run dev
```

### Compiles and minifies for production
```
# 构建测试环境
npm run build:dev

# 构建生产环境
npm run build:pro
```

### 后台接口源码(ThinkPHP5)

#### 登陆 login

```php
public function userLogin()
{
    $table = db('admin');
    $data = input('post.');
    $name = trim($data['username']);
    $result = $table->where(['username' => $name])->find();
    if(!empty($result)){
        if($data['password'] == 'admin'){
            $result['token'] = 'admin-token';
            return json(['msg'=>'登陆成功!','code'=> 20000, 'data' => $result]);
        } else {
            return json(['msg'=>'密码错误！','code'=> 10000]);
        }
    } else {
        return json(['msg'=>'用户不存在！','code'=> 10000]);
    }
}
```

#### 登出 logout

```php
public function userLogout()
{
    return json(['msg'=>'退出成功!','code'=> 20000, 'data' => "success"]);
}
```

#### 获取用户信息

```php
public function getUserInfo()
{
    $result = [
        'avatar' => "https://i.loli.net/2020/03/04/Ux6kNyCAHXTuMpt.gif",
        'introduction' => "I am a super administrator",
        'name' => "Super Admin",
        'roles' => ["admin"]
    ];
    return json(['code'=> 20000,'data'=> $result]);
}
```
## ❤ Start 一下作为鼓励 :)

## 开源不易

因为自己的接口完全透明化，请勿滥用我的接口 :)
