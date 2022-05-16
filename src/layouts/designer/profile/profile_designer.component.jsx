import React from "react";
import "../../../App.scss"
import { DesignerProfileHeader } from "../../../components/header_designer_profile/header_designer_profile.component";
import { Btn_4 } from "../../../components/buttons/btn_4/btn_4.component";
const { faker } = require('@faker-js/faker');

const designer = {
    name: faker.name.findName(),
    profilePic: faker.image.avatar(),
    coverPic: faker.image.imageUrl(),
}

export class ProfileDesigner extends React.Component {
    render() {
        return (
            <div className="profile--designer">
                <div className="profile--designer__header u-margin-bottom-small">
                    <DesignerProfileHeader designer={designer} />
                </div>
                <div className="profile--designer__links">
                    <Btn_4 text="Current" animation="2" />
                    <Btn_4 text="Past" animation="2" />
                    <Btn_4 text="About" animation="2" />
                </div>



            </div>
        )
    }
}