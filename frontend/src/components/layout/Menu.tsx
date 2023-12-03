import MenuItem from "./MenuItem.tsx";
import MenuItemModel from "../../model/MenuItemModel.ts";
import {useState} from "react";

interface Props {
    menus: MenuItemModel[]
}

function Menu({menus}: Props) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
            <a className="navbar-brand" href="#">Academia</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {
                        menus.map((menu, index) =>
                            <MenuItem key={index} nome={menu.getName()} route={menu.getRoute()} index={index}
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