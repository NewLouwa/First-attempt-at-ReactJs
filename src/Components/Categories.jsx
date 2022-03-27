import '../Style/Categories.css'
function Categories({ setActiveCategory, categories, activeCategory }) {

	return (

		<div className='categories'>
			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='categories-select'
			>
				<option value="">---</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button onClick={() => setActiveCategory("")}>Réinitialiser</button>
		</div>
			// <button onClick={() => setActiveCategory('all')}>Toutes catégories</button>
	)
}
export default Categories