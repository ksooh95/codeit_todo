'use client';

import React, { useState } from 'react';
import { CheckListDetailProps } from '@/app/model/todo';

const CheckListDetail: React.FC<CheckListDetailProps> = ({ detail, handlerCheckListDetailName }) => {
    const [name, setName] = useState(detail?.name); // 상태 정의
    return (
        <div className="checklist_detail">
            <input type="checkbox" />
            <label htmlFor="">
                <em>
                    <img src="/ck_off.png" alt="" />
                </em>
            </label>
            <input
                type="text"
                defaultValue={detail?.name}
                onChange={(e) => {
                    handlerCheckListDetailName(e);
                }}
            />
        </div>
    );
};

export default CheckListDetail;
