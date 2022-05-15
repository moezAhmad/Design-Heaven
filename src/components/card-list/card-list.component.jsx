import React, { useMemo, useState } from "react";
import "../../App.scss"
import { Card } from "../card/card.component";
import Pagination from "../Pagination/pagination.component";


let PageSize = 8;
export const CardList = ({ designs }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const currentDesigns = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return designs.slice(firstPageIndex, lastPageIndex);
    });
    return (
        <div>
            <div className="card-list">
                {
                    currentDesigns.map(design => <Card key={design.id} design={design} />)
                }

            </div>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={designs.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
                colorModifier="white"
            />
        </div>

    )
}