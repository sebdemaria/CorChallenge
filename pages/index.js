import { useEffect, useMemo, useState } from "react";
import Head from "next/head";

import AppProvider from "hooks/useAppContext";
import { useLocalStorage } from "hooks";

import { useModalActions } from "actions/useModalActions";

import { Layout } from "templates/base/Layout";

import { ToDoListHome } from "screens/ToDoListHome";

import { CustomModal } from "components/CustomModal/CustomModal";

export default function Home() {
    const [toDos, setToDos] = useState([]);
    const [responseMessage, setResponseMessage] = useState(null);
    const [toDoSelected, setToDoSelected] = useState(null);

    const [modalState, handleOpenModal, handleCloseModal] = useModalActions();

    const contextDefaultValue = useMemo(
        () => ({
            setToDos,
            toDos,
            modalState,
            handleOpenModal,
            handleCloseModal,
            responseMessage,
            setResponseMessage,
            toDoSelected,
            setToDoSelected,
        }),
        [
            setToDos,
            toDos,
            modalState,
            handleOpenModal,
            handleCloseModal,
            responseMessage,
            setResponseMessage,
            toDoSelected,
            setToDoSelected,
        ]
    );

    const { getStorageItem } = useLocalStorage();

    useEffect(() => {
        // set app context value
        const to_dos = getStorageItem("my_to_do_list");

        if (to_dos) {
            setToDos(to_dos);
        } else {
            setToDos([]);
        }
    }, [getStorageItem]);

    useEffect(() => {
        setTimeout(() => {
            setResponseMessage(null);
        }, 5000);
    }, [responseMessage]);

    return (
        <>
            <Head>
                <title>LiteFlix - Challenge</title>
                <meta
                    name="description"
                    content="LiteFlix Challenge for LiteBox"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="shortcut icon" href="/images/favicon.ico" />
            </Head>

            <AppProvider value={contextDefaultValue}>
                <Layout>
                    <ToDoListHome />
                    <CustomModal />
                </Layout>
            </AppProvider>
        </>
    );
}
