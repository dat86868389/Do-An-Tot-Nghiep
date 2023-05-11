


export default function CategoriesList({ categoriesList, handleAddCategory, handleDeleteCategory }) {
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
                                    e.target.checked == true ? handleAddCategory(parseInt(e.target.value)) : handleDeleteCategory(parseInt(e.target.value));
                                }}
                            /> {e.CategoryName}
                        </label>
                    </li>
                ))

            }
        </ul>

    );
}