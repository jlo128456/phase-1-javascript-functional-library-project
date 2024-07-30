function myEach(collection, callback)
{
    if (Array.isArray(collection))
    {
        collection.map((element, index) => {
            callback(element, index, collection);
            return element;
        })
    }else if (typeof collection === 'object' && collection !== null){
        Object.keys(collection).map((key) =>{
            callback(collection[key], key, collection)
            return key
        });
    }
        return collection
}
function myMap(collection, callback)
{
    if (Array.isArray(collection))
    {
        return collection.map(callback);
    }else if (typeof collection === 'object' && collection !== null) {
        return Object.entries(collection).map(([key, value]) => callback(value, key, collection))
    }
    return [];
}
function myReduce(collection, callback, acc)
{
    let initalValue = acc !== undefined
    let keys = Array.isArray(collection)? collection : Object.keys(collection).map(key => collection[key]);

    if (!initalValue) {
        acc =keys[0];
        keys =keys.slice(1);
    }
    return keys.map((value, index) =>{
        acc = callback(acc, value, collection);
        return acc;
    }).slice(-1)[0]
}
function myFind(collection, predicate)
{
    let result;

    if (Array.isArray(collection)) 
        {
            collection.some((value, index) => {
                if (predicate(value, index, collection))
                    {
                        result = value;
                        return true
                    }
                    return false;
            });
        }else if (typeof collection === 'object' && collection !== null)
            {
                Object.keys(collection).some(key => {
                    if (predicate(collection[key], key, collection))
                        {
                            result = collection[key];
                            return true;
                        }
                        return false;
                });
            }
     
     return result;   
}
function myFilter(collection, predicate) 
{
    if (Array.isArray(collection)) 
        {
            return collection.filter(predicate);
        }else if (typeof collection === 'object' && collection !== null)
        {
            return Object.values(collection).filter(predicate);
        }else{
            return [];
        }
}
function mySize(collection)
{
    if (Array.isArray(collection))
    {
        return collection.length;
    }else if (typeof collection === 'object' && collection !== null)
    {
        return Object.keys(collection).length;
    }
}
function myFirst(array, n) 
{
    if (!Array.isArray(array) || array.length === 0) 
    {
        return [];
    }
    if (n === undefined)
        {
            return array[0];
        }
    return array.slice(0, n);
}
function myLast(array, n)
{
    if (!Array.isArray(array) || array.length === 0)
    {
        return [];
    }
    if (n === undefined)
    {
        return array[array.length-1];
    }
    return array.slice(Math.max(array.length-n, 0));

}
function myKeys(object)
{
    return Object.keys(object);
}
function myValues(object)
{
    return Object.values(object);
}