
const MenuItem = ({ blok }) => {
    return (
        <li className="hover:bg-gray-100 p-2 border-2 rounded-xl">
            <a href={'#'+blok.name}>{blok.name}</a>
        </li>
    )
}

export default MenuItem;