


export default function CategoriesList(
    {
        categoriesList,
        onChooseCategory,
        onUnChooseCategory
    }) {

    return (
        <ul className="categories_container">
            {
                categoriesList.map(e => (
                    <li key={e.CategoryId}>
                        <label>
                            <input
                                type="checkbox"
                                value={e.CategoryId}
                                onChange={e => {
                                    console.log(e.target.checked);
                                    e.target.checked == true ? onChooseCategory(parseInt(e.target.value)) : onUnChooseCategory(parseInt(e.target.value));
                                }}
                            /> {e.CategoryName}
                        </label>
                    </li>
                ))

            }
        </ul>

    );
}