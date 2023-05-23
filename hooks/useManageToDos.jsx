import { useAppContext } from "hooks/useAppContext";
import { useLocalStorage } from "hooks/useLocalStorage";

export const useManageToDos = () => {
    const { toDos, setToDos } = useAppContext();

    const { setStorageItem, getStorageItem, deleteStorageItem } =
        useLocalStorage();

    const getToDos = () => {
        const toDos = getStorageItem("my_to_do_list");
        if (toDos) setToDos(toDos);
    };

    const editToDo = async (id, title, prio, status, description, date) => {
        const toDosPartial = toDos.filter((toDo) => toDo.id !== id);

        toDosPartial?.push({
            id: id,
            title: title,
            prio: prio,
            status: status,
            description: description,
            date: date,
        });

        await setTimeout(() => {
            deleteStorageItem("my_to_do_list");
            setStorageItem("my_to_do_list", toDosPartial);
            setToDos(getStorageItem("my_to_do_list"));
        }, 2000);
    };

    const addToDo = async (id, title, prio, status, description, date) => {
        toDos?.push({
            id: id,
            title: title,
            prio: prio,
            status: status,
            description: description,
            date: date,
        });

        await setTimeout(() => {
            setStorageItem("my_to_do_list", toDos);
            setToDos(getStorageItem("my_to_do_list"));
        }, 2000);
    };

    const removeToDo = async (id) => {
        const toDosPartial = toDos.filter((toDo) => toDo.id !== id);

        await setTimeout(() => {
            deleteStorageItem("my_to_do_list");
            setStorageItem("my_to_do_list", toDosPartial);
            setToDos(getStorageItem("my_to_do_list"));
        }, 2000);
    };

    return { addToDo, editToDo, getToDos, removeToDo };
};
