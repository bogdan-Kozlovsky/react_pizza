import React, {useState} from 'react';

const Categories = ({items}) => {
    const [activeItem, setActiveItem] = useState(null)

    const onSelectItem = (index) => {
        setActiveItem(index)
    }
    return (
        <div className="categories">
            <ul>
                <li
                    className={activeItem === null ? 'active' : ''}
                    onClick={() => onSelectItem(null)}>
                    Все
                </li>
                {items && items.map((name, index) => (
                    <li
                        className={activeItem === index ? 'active' : ''}
                        onClick={() => setActiveItem(index)}
                        key={`${name}_${index}`}>{name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;