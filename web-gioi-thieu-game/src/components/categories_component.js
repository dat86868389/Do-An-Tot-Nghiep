


export default function CategoriesList({ categoriesList }) {
    return (
        <ul className="categories_container">
            {
                categoriesList.map(e => (
                    <li key={e.CategoryId}>
                        <label>
                            <input
                                type="checkbox"
                            /> {e.CategoryName}
                        </label>
                    </li>
                ))

            }
        </ul>

    );
}