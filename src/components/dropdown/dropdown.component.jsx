import React from "react";
import Multiselect from 'multiselect-react-dropdown';

export const DropDown = () => {
    return (
        <Multiselect
            displayValue="key"
            onKeyPressFn={function noRefCheck() { }}
            onRemove={function noRefCheck() { }}
            onSearch={function noRefCheck() { }}
            onSelect={function noRefCheck() { }}
            options={[
                {
                    cat: 'Group 1',
                    key: 'Option 1'
                },
                {
                    cat: 'Group 1',
                    key: 'Option 2'
                },
                {
                    cat: 'Group 1',
                    key: 'Option 3'
                },
                {
                    cat: 'Group 2',
                    key: 'Option 4'
                },
                {
                    cat: 'Group 2',
                    key: 'Option 5'
                },
                {
                    cat: 'Group 2',
                    key: 'Option 6'
                },
                {
                    cat: 'Group 2',
                    key: 'Option 7'
                }
            ]}
            placeholder="Select from dropdown"
            style={{
                multiselectContainer: { 
                    'width':'100%'
                  },
                chips: {
                    'backgroundColor': '#73E0A9',
                    'color': '#000000',
                },
                
                option: {
                    'color': '#000000',
                    'fontSize':'1.4rem',
                    'fontWeight':'500',
                },
                searchBox: {
                    'color': '#000000',
                    'fontSize':'1.4rem',
                    'fontWeight':'600',
                    'border': '2px solid #73E0A9',
                    'borderRadius': '.4rem'
                },
                inputField: { 
                    'fontSize':'1.4rem',
                    'fontWeight':'600',
                    'color': '#000000',
                },
            }}
            selectionLimit={4}
            showArrow={true}
        />
    )
}