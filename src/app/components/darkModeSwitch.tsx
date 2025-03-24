import React from "react";
import { Switch } from "react-aria-components";

const DarkModeSwitch = () => {
    return (
        <>
            <Switch>
                <div className="darkModeIndicator">Toggle Dark Mode</div>
            </Switch>
        </>
    )
}

export default DarkModeSwitch;