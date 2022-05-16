import React, { useState } from "react";
import "../../../App.scss"
import { DesignerProfileHeader } from "../../../components/header_designer_profile/header_designer_profile.component";
import { Btn_4 } from "../../../components/buttons/btn_4/btn_4.component";
import { CardList } from "../../../components/card-list/card-list.component";
import { Outlet } from "react-router-dom";
import { data1, data2, data3 } from "./designsData";
const { faker } = require('@faker-js/faker');

const designer = {
    name: faker.name.findName(),
    profilePic: faker.image.avatar(),
    coverPic: faker.image.imageUrl(),
}

export const ProfileDesigner = ()=> {
    const [designs,setDesigns] = useState(data1)
    const [btn1, setBtn1] = useState("btn_4--selected")
    const [btn2, setBtn2] = useState("")
    const [btn3, setBtn3] = useState("")
    
    

    const setActive = (num) => {
        if (num === 1) {
            setBtn1("btn_4--selected")
            setBtn2("")
            setBtn3("")
            setDesigns(data1)
        }
        if (num === 2) {
            setBtn1("")
            setBtn2("btn_4--selected")
            setBtn3("")
            setDesigns(data2)
        }
        if (num === 3) {
            setBtn1("")
            setBtn2("")
            setBtn3("btn_4--selected")
            setDesigns(data3)
        }
    }


    return (
        <div className="profile--designer">
            <div className="profile--designer__header u-margin-bottom-small">
                <DesignerProfileHeader designer={designer} />
            </div>
            <div className="profile--designer__links u-margin-bottom-medium">
                <Btn_4 text="Current" animation="2" routeTo="/designer/profile/current" selected={setActive} extendedClass={btn1} />
                <Btn_4 text="Past" animation="2" routeTo="/designer/profile/past" selected={setActive} extendedClass={btn2} />
                <Btn_4 text="About" animation="2" routeTo="/designer/profile/about" selected={setActive} extendedClass={btn3} />
            </div>
            <Outlet context={[designs,setDesigns]}/>
            
        </div>
    )
}
