
const MenuItem = ({ blok }) => {
    return (
        <li>
            <a href={'#'+blok.name}>{blok.name}</a>
        </li>
    )
}

export default MenuItem;