import {useState} from "react";
import MenuItem from "./MenuItem";
import MenuItemModel from "../model/MenuItemModel";

interface Props {
    menus: MenuItemModel[]
}

function Menu({menus}: Props) {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Academia</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {
                        menus.map((menu, index) =>
                            <MenuItem nome={menu.getName()} route={menu.getRoute()} index={index}
                                      selected={selectedIndex == index}
                                      onSelectedItem={(index) => setSelectedIndex(index)}></MenuItem>
                        )
                    }
                </ul>
            </div>
        </div>
    </nav>
}

export default Menu