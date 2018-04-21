#使支持async的写法
#store

```js
import thunkWithAsync from 'easy-redux-thunk-async';


const middleWares = [
    thunkWithAsync,
    // other middleWares...
];
const createStoreWithMiddleware = applyMiddleware(...middleWares)(createStore);
```

#action
```js
export function test(foo) {
    return {
        type: 'BAR',
        foo,
    };
}

export function test1(foo) {
    return dispatch => {
        dispatch(bar(foo));

        return {
            type: 'TEST',
            test: foo,
        };
    };
}


export const testAsync=()=>{
    return (async (dispatch,getState)=>{
        console.log('----> async 1');
        var rs=await testHello();
        console.log('---->'+rs);
    })
}
const testHello=async ()=>{
    console.log('async');
    return Promise.resolve(1);
}
```
