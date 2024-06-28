'use client';

import React, { useState } from 'react';
import { CheckListDetailProps } from '@/app/model/todo';

const CheckListDetail: React.FC<CheckListDetailProps> = ({
    detail,
    handlerCheckListDetailName,
    handlerCheckListDetailIsCompleted,
    isCompleted,
}) => {
    return (
        // <div className="checklist_detail">
        <div className={'checklist_detail ' + (isCompleted ? 'completeTrue' : 'completeFalse')}>
            <input
                type="checkbox"
                id="checkListDetailck"
                checked={isCompleted}
                onChange={() => {
                    handlerCheckListDetailIsCompleted();
                }}
            />
            <label htmlFor="checkListDetailck">
                <em>{isCompleted === false ? <img src="/ck_off.png" alt="" /> : <img src="/ck_on.png" alt="" />}</em>
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
