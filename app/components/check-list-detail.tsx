import React from 'react';
import { CheckListDetailProps } from '@/app/model/todo';

const CheckListDetail: React.FC<CheckListDetailProps> = ({ detail }) => {
    return (
        <div className="checklist_detail">
            <input type="checkbox" />
            <label htmlFor="">
                <em>
                    <img src="/ck_off.png" alt="" />
                </em>
            </label>
            <p>{detail?.name}</p>
        </div>
    );
};

export default CheckListDetail;
