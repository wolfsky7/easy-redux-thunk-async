/** redux thunck + co 的简单合并使其支持 async 以及genenrator
**/

const co=require('co');

export default (function(){
    return ({ dispatch, getState }) => next => action => {
        if (typeof action === 'function') {
            if(isGeneratorFunction(action)){
                co(function *(){
                    yield action(dispatch, getState)
                }).then(()=>{
                    next(action);
                }).catch(err=>{
                    next(action);
                })
                return;
            }
          return action(dispatch, getState);
        }
    
        return next(action);
    }
})()

const isGeneratorFunction=fn=>{
    var constructor = fn.constructor;
    if (!constructor) return false;
    return 'AsyncFunction'==constructor.name ||'GeneratorFunction' === constructor.name || 'GeneratorFunction' === constructor.displayName 
}