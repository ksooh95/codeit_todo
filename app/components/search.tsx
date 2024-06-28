'use client';

import React, { useState } from 'react';
import { ApiResponse, SearchProps } from '@/app/model/todo';

const Search: React.FC<SearchProps> = ({ setItems }) => {
    const [newItem, setNewItem] = useState<string>('');

    const AddItem = () => {
        if (newItem.trim() === '') {
            alert('추가 하고싶은 할 일을 적어주세요 !');
        } else {
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/soohwan/items`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: newItem }),
            })
                .then((res) => res.json())
                .then((data: ApiResponse) => {
                    setItems((prevItems) => [...prevItems, data]);
                    setNewItem('');
                });
        }
    };
    const handlerKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // 엔터로 추가시 2번씩 나와서 추가하였음 !
            AddItem();
        }
    };

    return (
        <div className="search">
            <div className="search_bar">
                <input
                    type="text"
                    onChange={(e) => {
                        setNewItem(e.target.value);
                    }}
                    value={newItem}
                    onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => handlerKeyDown(e)}
                    placeholder="할 일을 입력해주세요"
                />
            </div>
            <button type="button" onClick={AddItem}>
                + 추가하기
            </button>
        </div>
    );
};

export default Search;
