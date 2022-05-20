import React from "react";
import "../../../App.scss"
import { Btn_3 } from "../../../components/buttons/btn_3/btn_3.component";
import FileUploader from "../../../components/file_uploader/file_uploader.component";
import { HeadingSecondary } from "../../../components/heading-secondary/heading-secondary.component";

export const SubmitDesign = () => {
    return (
        <div>
            <div className="dashboard--designer__header u-margin-bottom-small">
                <HeadingSecondary
                    text="Submit New Designs"
                    extendedStyle={`heading-secondary--black heading-secondary--1`}
                    position="testimonials-past-format" />
            </div>
            <form className="submit__designs">
                <div className="submit__designs__grid">
                    <div className="submit__designs__buttons">
                        <FileUploader />
                        <FileUploader />
                        <FileUploader />
                        <FileUploader />
                        <FileUploader />
                        <FileUploader />
                        <FileUploader />
                        <FileUploader />
                        <FileUploader />
                        <FileUploader />
                        <FileUploader />
                        <FileUploader />
                    </div>
                    <div className="submit__designs__details">
                        <div className="submit__designs__group">
                            <label htmlFor="brief" className="competition__form__label">Brief</label>
                            <textarea className="competition__form__input submit__designs__input--brief" id="brief" required />
                        </div>
                        <Btn_3 text='Submit Designs' extendedStyle="btn_3--green btn_3--clickable u-margin-top-small" />
                    </div>
                </div>
            </form>
        </div>
    )
}