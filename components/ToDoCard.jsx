import { useState } from "react";
import Image from "next/image";

import PropTypes from "prop-types";

import { useAppContext, useManageToDos } from "hooks";

import { submitResponse } from "consts/actions";

import { Cross, Edit, Loader } from "public/assets";

import styles from "styles/componentStyles/ToDoCard.module.scss";

export const ToDoCard = ({ toDo }) => {
    const [isLoading, setIsLoading] = useState(false);

    const { id, title, prio, status: savedStatus, description } = toDo;

    const { handleOpenModal, setToDoSelected, setResponseMessage } =
        useAppContext();

    const { removeToDo } = useManageToDos();

    async function handleRemoveToDo() {
        try {
            setIsLoading((isLoading) => !isLoading);

            await removeToDo(id);

            setTimeout(() => {
                setResponseMessage({
                    status: submitResponse.OK,
                    message: "Tarea eliminada con éxito!",
                });
            }, 2000);
        } catch (error) {
            setIsLoading((isLoading) => !isLoading);
            setResponseMessage({
                status: submitResponse.ERROR,
                message: e.message,
            });
        } finally {
            setTimeout(() => {
                setIsLoading((isLoading) => !isLoading);
            }, 2000);
        }
    }

    function handleEditToDo() {
        setToDoSelected(toDo);
        handleOpenModal();
    }

    return (
        <div className={`${styles.card} ${styles[prio]}`}>
            <span className={styles.actionsContainer}>
                <Image
                    className={styles.actions}
                    src={Edit}
                    alt="edit"
                    onClick={handleEditToDo}
                />
                {isLoading ? (
                    <Image
                        alt="loading"
                        className={styles.loader}
                        src={Loader}
                    />
                ) : (
                    <Image
                        className={styles.actions}
                        src={Cross}
                        alt="edit"
                        onClick={handleRemoveToDo}
                    />
                )}
            </span>

            <span className={styles.specs}>
                <p>
                    <span className={styles.specName}>Prioridad:</span> {prio}
                </p>
                <p>
                    <span className={styles.specName}>Estado:</span>{" "}
                    {savedStatus}
                </p>
            </span>

            <p className={styles.title}>
                <span className={styles.specName}>Título:</span>{" "}
                <span className={styles.titleName}>{title}</span>
            </p>
            <p className={styles.description}>
                <span className={styles.specName}>Descripción:</span>{" "}
                {description}
            </p>
        </div>
    );
};

ToDoCard.propTypes = {
    toDo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        prio: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    })
};