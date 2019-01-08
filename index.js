fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection,cb) {
      for (let keyOrIndex in collection) {
        cb(collection[keyOrIndex]);
      };
      return collection;
    },

    map: function(collection,cb) {
      let newArray = []
      for (let keyOrIndex in collection) {
        newArray.push(cb(collection[keyOrIndex]))
      }
      return newArray
    },

    reduce: function(collection,cb,accumulator=0) {
      // let total =  accumulator
      for (let keyOrIndex in collection){
      accumulator = cb(accumulator,collection[keyOrIndex],collection)
      };
      return accumulator
    },

    find: function(collection,predicate){
      for (let keyOrIndex in collection) {
        if (predicate(collection[keyOrIndex])) {
          return collection[keyOrIndex];
        }
      }
          return undefined;
    },

    filter: function(collection,predicate){
      let newArray = []
      for (let keyOrIndex in collection) {
        if (predicate(collection[keyOrIndex]) === true ) {
          newArray.push((collection[keyOrIndex]))
        }
      }
          return newArray;
    },

    size: function(collection){
      if(Array.isArray(collection)){
        return collection.length
      }
      else{
        return Object.values(collection).length
      }
    },

    first: function(collection, n = 1){
      if(Array.isArray(collection)){
        if (n > 1){
        return collection.slice(0,n)
        }
      else{
        return collection[0]
      }
      }
    },

    last: function(collection, n = 1){
      if(Array.isArray(collection)){
        if (n > 1){
        return collection.slice(-n)
        }
      else{
        return collection[collection.length - 1]
      }
      }
    },


    compact: function(array){
      let newArr = [];
     for(let element of array) {
       if(!!element === true) {
         newArr.push(element);
       }
     }
     return newArr
    },

      sortBy: function(array, cb) {
       const newArray = array.slice()
       return newArray.sort(function(a, b) {
         return cb(a) - cb(b)
       })
     },
     keys: function(object) {
     const keyArray = []
     for (let key in object){
       keyArray.push(key)
     }
     return keyArray
   },

   values: function(object) {
  return Object.values(object)
 },


 functions: function(object) {
    let newAr=[];
    for (let key in object) {
      if (typeof(object[key]) === "function"){
        newAr.push(key)
      }
    }

     return newAr.sort();
  },

  giveMeMore: function(hello){
    return true
  },

  }
})()


fi.libraryMethod()
