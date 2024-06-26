'use client';

import React, { useEffect, useState } from 'react';
import { CheckListProps, ApiResponse } from '@/app/model/todo';
import Link from 'next/link';

// const CheckList: React.FC<CheckListProps> = ({ item }: { item: any }) => {
const CheckList: React.FC<CheckListProps> = ({ item, setItems }) => {
    const [isCompleted, setIsCompleted] = useState(item.isCompleted);
    useEffect(() => {
        setIsCompleted(item.isCompleted);
    }, [item.isCompleted]);

    const updateItem = () => {
        const updatedItem = { ...item, isCompleted: !item.isCompleted };
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/soohwan/items/${item.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ isCompleted: updatedItem.isCompleted }),
        })
            .then((res) => res.json())
            .then((data) => {
                setIsCompleted(updatedItem.isCompleted);
            });

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/soohwan/items`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => setItems(data));
    };
    return (
        <div className={'check_list ' + (isCompleted ? 'completeTrue' : 'completeFalse')}>
            <input
                type="checkbox"
                name="check"
                id={`check-${item.id}`}
                onChange={() => {
                    updateItem();
                }}
                checked={isCompleted}
            />
            <label htmlFor={`check-${item.id}`}>
                <em>
                    {item.isCompleted === false ? <img src="/ck_off.png" alt="" /> : <img src="/ck_on.png" alt="" />}
                </em>
            </label>
            <Link href="/">{item.name}</Link>
        </div>
    );
};

export default CheckList;
