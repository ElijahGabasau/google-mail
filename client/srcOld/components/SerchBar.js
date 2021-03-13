import { useForm } from 'react-hook-form';

function SearchBar({ className, setQuery }) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = ({ data }) => {
    const query = [];

    for (let piece of data.replace(/ /g, '').split(':')) {
      query.push(piece);
    }

    setQuery(query);
  }

  const onReset = (e) => {
    setQuery(null);

    const input = document.getElementById('searchbar');
    if (input) {
      input.value = '';
    }
  }

  return (
    <form className={`searchbar ${className}`} onSubmit={handleSubmit(onSubmit)}>
      <input id="searchbar" className="searchbar__input" name="data" ref={register({ required: true })} />
      <button className="searchbar__button" type="submit">Search</button>
      <button className="searchbar__button" type="button" onMouseDown={onReset}>Reset</button>
    </form>
  )
}

export default SearchBar;