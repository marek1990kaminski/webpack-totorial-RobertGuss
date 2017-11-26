function hello(){
    console.log('hello from js module');
}

const yeti = (thing) => {
    console.log(thing);
}

function sup(){
    console.log('hello from js sup()');
}

export {hello, sup, yeti};