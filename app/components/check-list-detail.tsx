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
        <div className={'checklist_detail ' + (isCompleted ? 'completeTrue' : 'completeFalse')}>
            <div className="ckd_ck">
                <input
                    type="checkbox"
                    id="checkListDetailck"
                    checked={isCompleted}
                    onChange={() => {
                        handlerCheckListDetailIsCompleted();
                    }}
                />
                <label htmlFor="checkListDetailck">
                    <em>
                        {isCompleted === false ? <img src="/ck_off.png" alt="" /> : <img src="/ck_on.png" alt="" />}
                    </em>
                </label>
            </div>
            <div className="ckd_input">
                <input
                    type="text"
                    defaultValue={detail?.name}
                    onChange={(e) => {
                        handlerCheckListDetailName(e);
                    }}
                />
            </div>
        </div>
    );
};

export default CheckListDetail;
