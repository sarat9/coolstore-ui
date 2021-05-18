import React from 'react';
import RadioButton from '../../../components/RadioButton/RadioButton'
import { setSelectedDiscountRangeFilter } from '../../../actions/shop/shopAction'
import { useSelector, useDispatch } from 'react-redux'

const options = [
    { value: '30percent', label: '30% and above' },
    { value: '40percent', label: '40% and above' },
    { value: '50percent', label: '50% and above' },
    { value: '60percent', label: '60% and above' },
    { value: '70percent', label: '70% and above' },
]

export default function DiscountFilter() {
    const dispatch = useDispatch();
    const discountRangeFilterValue = useSelector(state => state.shop.discountRangeFilter)

    const handleChange = (event) => {
        event.preventDefault()
        dispatch(setSelectedDiscountRangeFilter(event.target.value))
    };


    return (
        <>
            <RadioButton
                title={'DISCOUNT RANGE'}
                handleChange={handleChange}
                options={options}
                selectedValue={discountRangeFilterValue}
            />
        </>
    );
}