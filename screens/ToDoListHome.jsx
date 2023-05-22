import { useEffect } from "react";
import { useAppContext } from "hooks";
import Image from "next/image";

import { ToDoCard } from "components/ToDoCard";
import { Button } from "components/UI/Button";

import { submitResponse } from "consts/actions";

import { Check } from "public/assets";

import styles from "styles/screensStyles/ToDoListHome.module.scss";

export const ToDoListHome = () => {
    const { toDos, handleOpenModal, responseMessage, setToDos } =
        useAppContext();

    useEffect(() => {
        const orderedToDos = toDos.sort(
            (a, b) => new Date(a.date) - new Date(b.date)
        );

        setToDos(orderedToDos);
    }, [toDos]);

    return (
        <section className={styles.toDosSection}>
            {responseMessage &&
            responseMessage?.status === submitResponse.OK ? (
                <span className={styles.responseMessage}>
                    <Image
                        src={Check}
                        className={styles.check}
                        alt="check mark"
                    />
                    <p className={styles.message}>{responseMessage?.message}</p>
                </span>
            ) : (
                <span className={styles.responseMessage}>
                    <p className={styles.errorMessage}>
                        {responseMessage?.message}
                    </p>
                </span>
            )}

            <Button onClick={handleOpenModal}>Agregar tarea</Button>

            <div className={styles.cardContainer}>
                {toDos.length ? (
                    toDos.map((toDo, index) => (
                        <ToDoCard key={index} toDo={toDo} />
                    ))
                ) : (
                    <p>No tienes tareas creadas..</p>
                )}
            </div>
        </section>
    );
};
