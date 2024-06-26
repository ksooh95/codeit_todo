'use client';

import React, { useState } from 'react';
import { ApiResponse, SearchProps } from '@/app/model/todo';

const Search: React.FC<SearchProps> = ({ setItems }) => {
    const [newItem, setNewItem] = useState<string>('');

    const AddItem = () => {
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
    };

    return (
        <div className="search">
            <div className="search_bar">
                <input
                    type="text"
                    onChange={(e) => {
                        setNewItem(e.target.value);
                        console.log('작석중인값 : ', e.target.value);
                    }}
                    value={newItem}
                    placeholder="할 일을 입력해주세요"
                />
            </div>
            <button
                type="button"
                onClick={() => {
                    AddItem();
                }}
            >
                + 추가하기
            </button>
        </div>
    );
};

export default Search;
