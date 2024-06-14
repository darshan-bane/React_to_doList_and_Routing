import { useState } from 'react'
import tabs from './Data/TabsData'


const Tabs = () => {

    let [activeTabs, setActiveTabs] = useState(0)
    let [activeContent, setActiveContent] = useState(tabs[0])

    let changeTabs = (index) => {
        setActiveTabs(index)
        setActiveContent(tabs[index])
    }

    return (
        <>
            <hr></hr>
            <div className="outertabDiv">
                <h1> Tabs Section </h1>

                <ul>
                    {tabs.map((tabsItems, index) => {
                        return (
                            <li><button className={activeTabs == index ? 'activeTabs' : ''} onClick={() => changeTabs(index)} >{tabsItems.title}</button></li>
                        )
                    })}
                </ul>
                {activeContent !== undefined ?
                    <p>
                        {activeContent.description}
                    </p>
                    :
                    ''
                }

            </div>
        </>
    )
}
export default Tabs