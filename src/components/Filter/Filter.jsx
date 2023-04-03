import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/filterSlice";
import { getFilter } from "redux/selectors";

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);
    
    const onChange = (e) => {
        let contactToFind = e.target.value.trim();
        dispatch(setFilter(contactToFind));
    }
    
    return (
        <label>
            Find contacts by name
            <input type="text"
                onChange={onChange}
                value={filter}>
            </input>
        </label>
     
            
    )
}

