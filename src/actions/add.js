const ADD_ITEM = 'ADD_ITEM';

function addItem (item){
    return {
        type: ADD_ITEM,
        payload: item
    }
}