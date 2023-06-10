import css from './Filter.module.css'; 
import { setFilter } from 'redux/filterSlice'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  
  return (
    <>
      <label>
        Find contacts by name
        <br />
        <input
          className={css.input}
          onChange={e => dispatch(setFilter(e.target.value.trim()))} 
          value={filter} 
          type="text"
          name="filter"
        />
      </label>
    </>
  );
}


