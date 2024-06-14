import { useState } from "react"
import Header from "../common/Header"

const ControlledComponent = () => {

    let [val, setValue] = useState('')
    return (
        <>
            <Header />
            <h2 className="text-center">React Controlled Components</h2>

            <form>
                <input
                    type="text"
                    value={val}
                    onChange={(e) => setValue(e.target.value)}
                />
            </form>
            <p>Value Entered : {val}</p>

        </>
    )
}
export default ControlledComponent