'use client';

import { use, useEffect, useState } from 'react';
import { ApiResponse } from '@/app/model/todo';
import { useParams } from 'next/navigation';
import CheckListDetail from '@/app/components/check-list-detail';
import { useRouter } from 'next/navigation';

export default function Detail() {
    const params = useParams();
    const router = useRouter();
    const id: string = params.id.toString();
    const [detail, setDetail] = useState<ApiResponse>();
    const [name, setName] = useState<string | number>();
    const [isCompleted, setIsCompleted] = useState<boolean>(false);
    const [memo, setMemo] = useState<string | number>('');
    const [imgUrl, setImgUrl] = useState<string>('/img_thumb.png');

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/soohwan/items/${id}`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data: ApiResponse) => {
                setDetail(data);
                setIsCompleted(data.isCompleted);
                if (data.imageUrl) {
                    setImgUrl(data.imageUrl); // 서버에서 가져온 이미지 URL을 설정
                }
            });
    }, [id]);

    console.log(detail);
    console.log(isCompleted);

    //체크리스트 제목 변경하기
    const handlerCheckListDetailName = (e: any) => {
        setName(e.target.value);
    };
    //체크리스트 체크상태 변경하기
    const handlerCheckListDetailIsCompleted = (e: any) => {
        setIsCompleted(!isCompleted);
    };

    //이미지 올리기
    const handlerImageUpload = (e: any) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);

        //미리 보기 이미지 설정
        const reader = new FileReader();
        reader.onloadend = () => {
            setImgUrl(reader.result as string);
        };
        reader.readAsDataURL(file);

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/soohwan/images/upload`, {
            method: 'POST',
            body: formData,
        }).catch((err) => {
            console.log('err', err);
        });
    };
    //수정하기 버튼 기능
    const handlerEdit = () => {
        if (confirm('수정 하시겠습니까?') == true) {
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/soohwan/items/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    isCompleted: isCompleted,
                    memo: memo,
                    imageUrl: imgUrl,
                }),
            })
                .then((res) => {
                    if (res.ok) {
                        router.push('/');
                        alert('수정이 완료되었습니다.');
                    }
                })
                .catch((err) => {
                    console.log('err', err);
                });
        } else {
            return false;
        }
    };
    //삭제하기 버튼 기능
    const handlerDelete = () => {
        if (confirm('정말 삭제하시겠습니까??') == true) {
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/soohwan/items/${id}`, {
                method: 'DELETE',
            })
                .then((res) => {
                    if (res.ok) {
                        router.push('/');
                        alert('삭제가 완료되었습니다.');
                    }
                })
                .catch((err) => {
                    console.log('err', err);
                });
        } else {
            return false;
        }
    };

    return (
        <div className="detail">
            <div className="detail_container">
                <CheckListDetail
                    detail={detail}
                    handlerCheckListDetailName={handlerCheckListDetailName}
                    isCompleted={isCompleted}
                    handlerCheckListDetailIsCompleted={handlerCheckListDetailIsCompleted}
                />
                <div className="detail_content">
                    <div className="img_upload">
                        <div className="thumb">
                            <img src={imgUrl} alt="" />
                        </div>
                        <input
                            type="file"
                            id="img_input"
                            onChange={(e) => {
                                handlerImageUpload(e);
                            }}
                        />
                        <label htmlFor="img_input">
                            {imgUrl === '/img_thumb.png' ? (
                                <em>
                                    <img src="/plus_small_gray.png" alt="" />
                                </em>
                            ) : (
                                <em>
                                    <div className="pen_circle">
                                        <img src="/edit.png" alt="" />
                                    </div>
                                </em>
                            )}
                        </label>
                    </div>
                    <div className="memo_box">
                        <div className="title">Memo</div>
                        <textarea
                            name="memo_textarea"
                            id="memo_textarea"
                            defaultValue={detail?.memo}
                            value={memo}
                            onChange={(e) => {
                                setMemo(e.target.value);
                            }}
                            placeholder="메모를 작성해주세요"
                        ></textarea>
                    </div>
                </div>
                <div className="detail_btn">
                    <button
                        className="edit_btn"
                        onClick={() => {
                            handlerEdit();
                        }}
                    >
                        <img src="/ck.png" alt="" />
                        수정완료
                    </button>
                    <button
                        className="delete_btn"
                        onClick={() => {
                            handlerDelete();
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
