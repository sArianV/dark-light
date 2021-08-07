import React, { useReducer } from 'react';
import GiveawayContext from './giveawaysContext';
import giveawayReducer from './giveawayReducer';

import clientAxios from '../../service/axios';


const axios = require("axios").default;

const GiveawayState = props => {
    
    const initialState = {
        giveaways : [], 
    }

    const [ state, dispatch ] = useReducer(giveawayReducer, initialState);


    const getGiveaways = async ( platform, type, popularity ) => {
        var options = {
            method: 'GET',
            url: 'https://gamerpower.p.rapidapi.com/api/giveaways',
            params: {type: 'game'},
            headers: {
                'x-rapidapi-host': 'gamerpower.p.rapidapi.com',
                'x-rapidapi-key': '0ba0cd0d5cmshdc26d4128db3e30p15b38ejsn279191354521'
            }
          };
        try {
            let result;            
                result= await axios.request(options);
                console.log(result)
            dispatch({
                type: "GET_ALL_GIVEAWAYS",
                payload: result.data?result.data:result
            });
            return result.data?result.data:result         
        } catch (error) {
            const alerta = {
                msg: error,
                categoria: 'error'
            }            
            return(error)
        }
    }
    
    
    return(
        <GiveawayContext.Provider
            value={{
                giveaways: state.giveaways,               
                getGiveaways,  
            }}
        >{props.children}

        </GiveawayContext.Provider>
    )
}
export default GiveawayState;
