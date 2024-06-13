import React, { useState } from 'react'
import './list.css'
export default function List() {
    const [list, setList] = useState([1, 2, 3, 4, 5]);
    const [startIndex, setStartIndex] = useState(0);

    const onDragOver = (e) => {
        e.preventDefault();
    }

    const dragItem = (i) => {
        setStartIndex(i)
    }
    const dropItem = (i) => {
        const newArr = [...list];
        const movedElement = newArr.splice(startIndex, 1);
        newArr.splice(i, 0, movedElement);
        setList(newArr);
    }
    return (
        <div>
            <h2>Draggable List</h2>
            {
                list.map((e, i) => {
                    return <div
                        key={i}
                        draggable
                        className='item'
                        onDragOver={onDragOver}
                        onDragStart={() => { dragItem(i) }}
                        onDrop={() => { dropItem(i) }}
                    >
                        Item {e}
                    </div>
                })
            }
        </div>
    )
}
