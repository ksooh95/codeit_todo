'use client';

import React, { useEffect, useState } from 'react';
import { CheckListProps, ApiResponse } from '@/app/model/todo';
import Link from 'next/link';

const CheckList: React.FC<CheckListProps> = ({ item, handlerToggleComplete }) => {
    const [isCompleted, setIsCompleted] = useState(item.isCompleted);
    useEffect(() => {
        setIsCompleted(item.isCompleted);
    }, [item.isCompleted]);

    const handleCheckboxChange = () => {
        handlerToggleComplete(item.id, item.isCompleted);
    };

    return (
        <div className={'check_list ' + (isCompleted ? 'completeTrue' : 'completeFalse')}>
            <input
                type="checkbox"
                name="check"
                id={`check-${item.id}`}
                onChange={handleCheckboxChange}
                checked={isCompleted}
            />
            <label htmlFor={`check-${item.id}`}>
                <em>
                    {item.isCompleted === false ? <img src="/ck_off.png" alt="" /> : <img src="/ck_on.png" alt="" />}
                </em>
            </label>
            <Link href={`/detail/${item.id}`}>{item.name}</Link>
        </div>
    );
};

export default CheckList;
