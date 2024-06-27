'use client';

import Search from '@/app/components/search';
import CheckList from '@/app/components/check-list';
import { useEffect, useState } from 'react';
import { ApiResponse } from '@/app/model/todo';

export default function Main() {
    const [items, setItems] = useState<ApiResponse[]>([]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/soohwan/items`, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data: ApiResponse[]) => {
                setItems(data);
            });
    }, []);

    const todoItems: ApiResponse[] = items.filter((item) => !item.isCompleted); // 체크안된 todoList
    const doneItems: ApiResponse[] = items.filter((item) => item.isCompleted); // 체크된 doneList

    console.log('items :', items);

    return (
        <div className="main">
            <div className="container">
                <Search setItems={setItems} />
                <div className="todo_done">
                    <div className="todo">
                        <div className="td_logo">
                            <img src="/todo.png" alt="" />
                        </div>
                        {todoItems.length > 0 ? (
                            todoItems.map((item, i) => <CheckList item={item} key={i} setItems={setItems} />)
                        ) : (
                            <div className="empty_img">
                                <img src="/empty_todo_small.png" alt="" />
                                <p>
                                    할 일이 없어요. <br />
                                    TODO를 새롭게 추가해주세요!
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="done">
                        <div className="td_logo">
                            <img src="/done.png" alt="" />
                        </div>
                        {doneItems.length > 0 ? (
                            doneItems.map((item, i) => <CheckList item={item} key={i} setItems={setItems} />)
                        ) : (
                            <div className="empty_img">
                                <img src="/empty_done_small.png" alt="" />
                                <p>
                                    아직 다 한 일이 없어요. <br />
                                    해야 할 일을 체크해보세요!
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
