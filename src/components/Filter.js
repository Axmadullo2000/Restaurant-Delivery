import { useState } from "react";

export const Filter = ({setSearchParams, categoryQuery}) => {
    const [ search, setSearch ] = useState(categoryQuery)

    const handleForm = (e) => {
        e.preventDefault();

        const form = e.target;
        const value = form.search.value;
        const params = {}

        if (value.length) params.category = value

        setSearchParams(params)
    };

  return (
    <div className="search_form">
        <form onSubmit={handleForm}>
            <div className="input-field">
                <input
                    name="search"
                    value={ search }
                    type="search"
                    placeholder="Search..."
                    id="product"
                    className="product__field"
                    onChange={ (e) => setSearch(e.target.value) }
                />
                <button className="btn searchInCategories">Search...</button>
            </div>
        </form>
    </div>
  );
};
