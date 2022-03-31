# GatewayDashboard

The gateway dashboard web help administrators manage your organization.

This project is open-source, you can use our system or self-host for your organization.

## Main feature

* Manage your account
    * Create account ✔
    * Modify information your account ❌ (coming soon)
* Manage your organization
    * Create organization ✔
    * Update information organization ❌ (coming soon)
* Manage your device
    * View list device (info of device and realtime status) ✔
    * Create device and to able to real device connect ✔
* Satisfy data
    * View total status of device (connected, pending, disconnected) ✔
    * View log realtime, information log include: device id, time, check complete, check mask, check temp, verify method (QR, RFID) ✔ 

## Main UI
![Login](docs/img/login.JPG)

![Dashboard](docs/img/dashboard.JPG) 
# With self-host
## Development

First you need to clone this project to your local machine, and you should have register a firebase project and create web, you can follow this [link]( https://firebase.google.com/docs/web/setup?authuser=0&hl=en)


```git clone https://github.com/GDSC-HSU/gateway-dashboard``` 

After you clone it, you have to config firebase in file **environment**: 

```gateway-dashboard\src\environments```

You will have two file environments:
* environment.ts for develop
* environment.prod.ts for production

Please setup this:

```javascript
export const environment = {
    // your secret to verify api
    apiKey: "123",
    // your endpoint backend server
    endpoint: "https://gdsc-hsu.xyz/api/v1",
    // your firebase web config
    firebase: {
        apiKey: "AIzaSyBuGIG5UElMZ4dWuzc4-A7dc0N0E1jaXXX",
        authDomain: "gdsc-gateway.firebaseapp.com",
        projectId: "gdsc-gateway",
        storageBucket: "gdsc-gateway.appspot.com",
        messagingSenderId: "162603779XXX",
        appId: "1:162603779372:web:5147e3e6c5c957bef7dXXX",
        measurementId: "G-M62LMG8XXX"
    },
    // false - environment.ts
    // true - environment.prod.ts
    production: true
};
```
After setup you should install package

```npm install```

Run project for development and enjoy it 😁

```ng serve```

## Deploy your dashboard

Firstly, Open your terminal and go to project:

```cd gateway-dashboard```

After that, let's build your project:

```ng build```

Finally, Deploy your project and enjoy 🤩

Please follow this [link](https://angular.io/guide/deployment) for deploy

