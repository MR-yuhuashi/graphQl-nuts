## clone项目:
```
git clone https://github.com/MR-yuhuashi/graphQl-nuts.git
```

## 安装依赖包
```
yarn
```

## 启动前端页面(在graphql-nuts文件夹)
```
yarn start
```

## 启动后端服务
1、进入server文件夹：
```
cd server
```

2、启动服务：
```
node server.js（修改后端代码后需重启：node server.j）
```
或者
```
nodemon server.js(要使用需先全局安装nodemon npm包：yarn global add nodemon)（自动检测服务端代码改动，不需重启服务）
```

启动成功会看到如下提示：
```
Grapgql is listening at http://:::3001
```

## 举例：curl测试服务端graphql api
```
curl -v -XPOST -H "Content-Type:application/graphql"  -d 'query RootQueryType { countA }' http://localhost:3001/firstGraphql
```
结果如下：
```
Note: Unnecessary use of -X or --request, POST is already inferred.
*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 3001 (#0)
> POST /firstGraphql HTTP/1.1
> Host: localhost:3001
> User-Agent: curl/7.54.0
> Accept: */*
> Content-Type:application/graphql
> Content-Length: 30
> 
* upload completely sent off: 30 out of 30 bytes
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: text/html; charset=utf-8
< Content-Length: 38
< ETag: W/"26-0T/1TsjxGlc4ocW2hpIykGKdL/g"
< Date: Tue, 12 Mar 2019 09:55:15 GMT
< Connection: keep-alive
< 
{
  "data": {
    "countA": "0A"
  }
* Connection #0 to host localhost left intact
}%

```







This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
