import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioButton from '../../../components/RadioButton/RadioButton'
import { setGenderFilter } from './../../../actions/shop/shopAction'
import { useSelector, useDispatch } from 'react-redux'

const options = [
    { value: 'women', label: 'Women' },
    { value: 'men', label: 'Men' },
    { value: 'boys', label: 'Boys' },
    { value: 'girls', label: 'Girls' },
]

export default function GenderFilter() {
    const dispatch = useDispatch();
    const genderFilterValue = useSelector(state => state.shop.genderFilter)

    const handleChange = (event) => {
        event.preventDefault()
        dispatch(setGenderFilter(event.target.value))
    };

    return (
        <>
            <RadioButton
                handleChange={handleChange}
                options={options}
                selectedValue={genderFilterValue}
            />
        </>
    );
}