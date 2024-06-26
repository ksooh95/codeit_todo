export type ApiResponse = {
    id: number;
    isCompleted: boolean;
    name: string;
};
export type SearchProps = {
    setItems: React.Dispatch<React.SetStateAction<ApiResponse[]>>;
};

export type CheckListProps = {
    item: ApiResponse;
    setItems: React.Dispatch<React.SetStateAction<ApiResponse[]>>;
};
