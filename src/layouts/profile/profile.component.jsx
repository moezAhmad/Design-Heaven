import React, { useState } from "react";
import "../../App.scss"
import { DesignerProfileHeader } from "../../components/designer_components/header/header_designer_profile/header_designer_profile.component";
import { Btn_4 } from "../../components/buttons/btn_4/btn_4.component";
import { Outlet, useLocation } from "react-router-dom";
import { data1, data2, data3 } from "./designsData";
import { ClientProfileHeader } from "../../components/client_components/header/header_client_profile/header_client_profile.component";
const { faker } = require('@faker-js/faker');

const designer = {
    name: faker.name.findName(),
    profilePic: faker.image.avatar(),
    coverPic: faker.image.imageUrl(),
}
const client = {
    name: faker.name.findName(),
    profilePic: faker.image.avatar(),
    coverPic: faker.image.imageUrl(),
}

export const Profile = () => {
    const [designs, setDesigns] = useState(data1)
    const [btn1, setBtn1] = useState("btn_4--white--selected")
    const [btn2, setBtn2] = useState("")
    const [btn3, setBtn3] = useState("")
    const location = useLocation()

    


    const setActive = (num) => {
        if (num === 1) {
            setBtn1("btn_4--white--selected")
            setBtn2("")
            setBtn3("")
            setDesigns(data1)
        }
        if (num === 2) {
            setBtn1("")
            setBtn2("btn_4--white--selected")
            setBtn3("")
            setDesigns(data2)
        }
        if (num === 3) {
            setBtn1("")
            setBtn2("")
            setBtn3("btn_4--white--selected")
            setDesigns(data3)
        }
    }


    return (
        <div className="profile">
            {
                location.pathname.includes("designer")
                &&
                <div className="profile--designer__header u-margin-bottom-small">
                    {<DesignerProfileHeader designer={designer} />}
                </div>
            }
            {
                location.pathname.includes("client")
                &&
                <div className="profile--designer__header u-margin-bottom-small">
                    {<ClientProfileHeader client={client} />}
                </div>
            }
            <div className="profile__links u-margin-bottom-medium">
                <Btn_4 text="Current" to="current" onClick={setActive} extendedStyle={`btn_4--white btn__animated--2 ${btn1} u-space-between`} />
                <Btn_4 text="Past" to="past" onClick={setActive} extendedStyle={`btn_4--white btn__animated--2 ${btn2} u-space-between`} />
                <Btn_4 text="About" to="about" onClick={setActive} extendedStyle={`btn_4--white btn__animated--2 ${btn3} u-space-between`} />
            </div>
            <Outlet context={[designs, setDesigns]} />

        </div>
    )
}
