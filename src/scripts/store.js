import { createStore } from "redux";
import {cloneDeep} from "lodash/cloneDeep";

const configureStore = () => {
    const defaultState = [{
        id: 0,
        fname: "Huseini",
        lname: "Indorewala",
        birthYear: "1989"
    },
    {
        id: 1,
        fname: "Radiyah",
        lname: "Indorewala",
        birthYear: "1991"
    }];
    const store = createStore((state=defaultState, action)=>{
        // console.log("action",action);
        switch(action.type) {
            case 'all' :
                return [...state]
                break;
            case 'id' : 
            
            console.log('state', state);
                if (action.id == '') {
                    console.log('if')
                    // console.log(state)
                    return [
                        ...state
                    ];
                }  
                const filtered = state.filter((x)=>{
                    return x.id == action.id;
                })
                console.log('filtered',filtered);
                console.log('state', state);
                return filtered;
                break;
            default :
                return [...state]
        }
    })
    return store;
}

export default configureStore;