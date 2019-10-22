export const ADD_ITEM = 'ADD_ITEM';

export function addItem (item){
    console.log(item)
    return {
        type: ADD_ITEM,
        payload: item
    }
}