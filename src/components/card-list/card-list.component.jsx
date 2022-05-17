import React, { useMemo, useState } from "react";
import "../../App.scss"
import { Card } from "../card/card.component";
import Pagination from "../Pagination/pagination.component";


let PageSize = 8;
export const CardList = ({ designs, colorModifier, hoverEffect}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const currentDesigns = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return designs.slice(firstPageIndex, lastPageIndex);
    });
    const handleHoverEffect = ()=>{
        if(hoverEffect){
            return "card-list--hoverEffect"
        }
        return ""
    }
    return (
        <div>
            <div className={`card-list ${handleHoverEffect()}`}>
                {
                    currentDesigns.map(design => <Card key={design.id} design={design} hoverEffect={hoverEffect}/>)
                }

            </div>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={designs.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
                colorModifier={colorModifier}
            />
        </div>

    )
}