import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CheckBoxes from '../../../components/CheckBoxes/CheckBoxes'
import { setSelectedBrandFilter } from './../../../actions/shop/shopAction'
import { useSelector, useDispatch } from 'react-redux'

const options = [
    { id: 'jackAndJones', label: 'Jack & Jones' },
    { id: 'levis', label: 'Levis' },
    { id: 'tommyHilfiger', label: 'Tommy Hilfiger' },
    { id: 'calvinKlien', label: 'Calvin Klien' },
    { id: 'hAndM', label: 'H & M' },
    { id: 'gap', label: 'GAP' },
]


export default function BrandFilter() {
    const [brands, setBrands] = React.useState(options);

    const dispatch = useDispatch();
    const selectedBrands = useSelector(state => state.shop.selectedBrandFilter)


    const handleSelect = (event) => {
        event.preventDefault()
        dispatch(setSelectedBrandFilter({ ...selectedBrands, [event.target.name]: event.target.checked }))
    };

    return (
        <>
            <CheckBoxes
                title={'Brands'}
                options={brands}
                handleSelect={handleSelect}
                selectedItems={selectedBrands}
            />
        </>
    );
}