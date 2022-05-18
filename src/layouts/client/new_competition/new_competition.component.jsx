import React, { useState } from "react";
import "../../../App.scss"
import { DropDown } from "../../../components/dropdown/dropdown.component";
import FileUploader from "../../../components/file_uploader/file_uploader.component";
import { HeadingSecondary } from "../../../components/heading-secondary/heading-secondary.component";

export const NewCompetition = () => {
    const [ins1,setIns1] = useState("")
    const [ins2,setIns2] = useState("")
    const [ins3,setIns3] = useState("")
    const [ins4,setIns4] = useState("")
    const [ins5,setIns5] = useState("")

    const handleIns1 = ()=>{

    }


    return (
        <div className="dashboard--designer">
            <div className="dashboard--designer__header u-margin-bottom-small">
                <HeadingSecondary
                    text="New Competition"
                    extendedStyle={`heading-secondary--black heading-secondary--1`}
                    position="testimonials-past-format" />
            </div>
            <form className="competition__form">
                <div className="competition__form__grid">
                    <div>
                        <div className="competition__form__group">
                            <label htmlFor="name" className="competition__form__label">Company/Organization Name</label>
                            <input type="text" className="competition__form__input" id="name" required />

                        </div>
                        <div className="competition__form__group">
                            <label htmlFor="tagline" className="competition__form__label">Tagline</label>
                            <input type="text" className="competition__form__input" id="tagline" required />

                        </div>
                        <div className="competition__form__group">
                            <label htmlFor="dropdown" className="competition__form__label">Logotype</label>
                            <DropDown />

                        </div>
                        <div className="competition__form__group">
                            <label htmlFor="brief" className="competition__form__label">Brief</label>
                            <textarea className="competition__form__input competition__form__input--brief" id="brief" required />

                        </div>
                    </div>
                    <img alt="circle" className="competition__form__circle" />
                </div>
                <div className="competition__form__group">
                    <label htmlFor="inspiration" className="competition__form__label">Inspiration</label>
                    <div className="competition__form__inspirations">
                        <FileUploader/>
                        <FileUploader/>
                        <FileUploader/>
                        <FileUploader/>
                        <FileUploader/>
                    </div>

                </div>
                <div className="competition__form__group">
                    <label htmlFor="extranotes" className="competition__form__label">Extra Notes</label>
                    <input type="text" className="competition__form__input" id="extranotes" />

                </div>

            </form>
        </div>
    )
}