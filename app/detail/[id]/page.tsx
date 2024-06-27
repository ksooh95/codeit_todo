'use client';

import { useEffect, useState } from 'react';
import { ApiResponse } from '@/app/model/todo';
import { useParams } from 'next/navigation';
import CheckListDetail from '@/app/components/check-list-detail';

export default function Detail() {
    const params = useParams();
    const id = params.id.toString();
    const [detail, setDetail] = useState<ApiResponse>();

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/soohwan/items/${id}`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data: ApiResponse) => {
                setDetail(data);
            });
    }, []);

    console.log(detail);

    return (
        <div className="detail">
            <div className="detail_container">
                <CheckListDetail detail={detail} />
                <div className="detail_content">
                    <div className="img_upload">
                        <div className="thumb">
                            <img src="/img_thumb.png" alt="" />
                        </div>
                        <input type="file" id="img_input" />
                        <label htmlFor="img_input">
                            <em>
                                <img src="/plus_small_gray.png" alt="" />
                            </em>
                        </label>
                    </div>
                    <div className="memo_box">
                        <div className="title">Memo</div>
                        <textarea name="" id=""></textarea>
                    </div>
                </div>
                <div className="detail_btn">
                    <button className="edit_btn">
                        <img src="/ck.png" alt="" />
                        수정완료
                    </button>
                    <button
                        className="delete_btn"
                        onClick={() => {
                            fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/soohwan/items/${id}`, {
                                method: 'DELETE',
                            });
                        }}
                    >
                        <img src="/close.png" alt="" />
                        삭제하기
                    </button>
                </div>
            </div>
        </div>
    );
}
