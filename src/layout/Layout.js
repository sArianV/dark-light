import React, { useEffect, useContext} from 'react'
import Body from "../components/DefaultComponents/Body"
import GiveawayContext from "../context/giveaway/giveawaysContext"

function Layout() {
    const giveawayContext = useContext(GiveawayContext);
    const { getGiveaways, giveaways } = giveawayContext;
    useEffect(() => {
        getGiveaways().then(value => console.log(value))
        if (!localStorage.getItem('miGato')){       
            localStorage.setItem('miGato', new Date());
        }
    }, [])

    return (        
        <Body>
            {giveaways &&
                giveaways.length
            }
            { localStorage.getItem('miGato') &&
                localStorage.getItem('miGato')
            }
        </Body>
    )
}

export default Layout
