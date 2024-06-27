export type ApiResponse = {
    id: number;
    imageUrl: any;
    isCompleted: boolean;
    memo: string | number;
    name: string | number;
    tenantId: string;
};
export type SearchProps = {
    setItems: React.Dispatch<React.SetStateAction<ApiResponse[]>>;
};

export type CheckListProps = {
    item: ApiResponse;
    setItems: React.Dispatch<React.SetStateAction<ApiResponse[]>>;
};

export type CheckListDetailProps = {
    detail?: ApiResponse;
    handlerCheckListDetailName: any;
};
