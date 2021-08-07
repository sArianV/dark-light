import React, { useEffect, useContext} from 'react'
import Body from "../components/DefaultComponents/Body"
import GiveawayContext from "../context/giveaway/giveawaysContext"

function Layout() {
    const giveawayContext = useContext(GiveawayContext);
    const { getGiveaways, giveaways } = giveawayContext;
    useEffect(() => {
        getGiveaways().then(value => console.log(value))
    }, [])

    return (        
        <Body>
            {giveaways &&
                giveaways.length
            }   
        </Body>
    )
}

export default Layout
