# React Typescript Firebase Mobx Quickstart

## Features
- authentication
- authorization
- user info gathering (bio and displayName)
- mobx as state management liabrary 
- firebase for backend and authentication
- react hook form

## Install
### System
1. some of the npm scripts use bash commands so its best to run in a bash shell
2. install nvm and use node -v 10.15.3 and npm -v 6.4.1
### to install the needed dependencies 
```
cd ./frontend; npm i && cd ../functions; npm i 
```
## Run 

### Emulators
#### Credentials
you have to setup credentials by creating a service account and adding them to some absolute directory for which you can then add that path to `functions/src/index.ts`

in the future we should add these to the environmental variable, or just figure out how to get default credentials working (it throws an error looking for default credentials and this is kind of a hack to have it work)
```
credential: admin.credential.cert('./creds.json')
```
```bash
cd ./functions/; npm run start
#run just the functions emulator
npm run emulate
#run the firestore emulators
firebase emulators:start --only firestore
```

## Deploy

### Firebase Project Setup
```
1. setup a firebase project 
2. go to settings
3. create new web app
4. copy the config into frontend/src/app/config/index.ts
```

### install firebase-tools globally
```
npm i -g firebase-tools
```

### login to firebase
```
firebase login
```
### set the newly created firebase project to be used in this project
```
firebase use {PROJECT_ID} 
```

### firebase oncall function
```js
import { firebaseFunctions } from 'app/firebase/base';

const testFunc = firebaseFunctions.httpsCallable("testFunc")
testFunc({hello: "world"})
```

## Mobx

### inject mobx into a class
```js
import * as React from 'react';
import { GLOBAL_STATE } from 'app/constants';
import { inject, observer } from 'mobx-react'


@inject(GLOBAL_STATE)
@observer
export class Home extends React.Component{
  render() {
    return (
      <div>
      {this.props[GLOBAL_STATE].VALUEWITHINMOBXSTORE}
      </div>
    );
  }
}

```

## Tree
```
tree -d -I 'node_modules|lib'
```

## User Info
this is the information collected on a user before they can use the app

currently only has `["bio", "displayName"]`, however you can easily extend this by editing the 
1. firestore.rules
2. frontend/src/app/containers/UserInfo/index.tsx to include more input fields
3. shared/src/shared_interfaces.ts

## Route Guard
route guard allows you to define user roles and make it so that if a user does not have those roles then they are barred from accessing that route
```
<RouteGuard path="/admin" allowedRoles={["admin"]}>
  <Route ...
</RouteGuard>
```
