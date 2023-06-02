import { useState } from "react";
import { useAppContext, useManageToDos } from "hooks";
import { v4 as uuid } from "uuid";

import Image from "next/image";

import { Form, Formik } from "formik";
import { ValidationSchema } from "./CustomModalValidationSchema";

import { Button, ReactModal as Modal } from "components/UI";

import { Cross, Loader } from "public/assets/index";

import { Input } from "components/Form/Input";
import { Select, TextArea } from "components/Form";

import { submitResponse } from "consts/actions";
import { priority } from "consts/priority";
import { status } from "consts/status";

import styles from "styles/componentStyles/Modal.module.scss";

export const CustomModal = () => {
    const [isLoading, setIsLoading] = useState(false);

    const { addToDo, editToDo } = useManageToDos();

    const {
        modalState,
        handleCloseModal,
        setResponseMessage,
        toDoSelected,
        setToDoSelected,
    } = useAppContext();

    const onModalClose = () => {
        handleCloseModal();

        // wait for modal to close before erasing state
        setTimeout(() => {
            setToDoSelected(null);
        }, 1000);
    };

    async function handleSubmit(
        { id, title, prio, status, description, date },
        setSubmitting
    ) {
        try {
            setIsLoading((isLoading) => !isLoading);
            setResponseMessage(null);

            if (toDoSelected) {
                await editToDo(id, title, prio, status, description, date);
            } else {
                id = uuid();

                date = new Date();

                await addToDo(id, title, prio, status, description, date);
            }

            // timeout applied to delay isLoading state change
            // to show loader for 2 second due to localstorage saving being so fast
            setTimeout(() => {
                if (toDoSelected) {
                    setResponseMessage({
                        status: submitResponse.OK,
                        message: "Tarea editada con éxito!",
                    });
                } else {
                    setResponseMessage({
                        status: submitResponse.OK,
                        message: "Tarea creada con éxito!",
                    });
                }
                onModalClose();
            }, 2000);
        } catch (e) {
            setIsLoading((isLoading) => !isLoading);
            setResponseMessage({
                status: submitResponse.ERROR,
                message: "Lo sentimos hubo un error.",
            });

            throw new Error(e.message);
        } finally {
            setSubmitting(false);
            setToDoSelected(null);

            setTimeout(() => {
                setIsLoading((isLoading) => !isLoading);
            }, 2000);
        }
    }

    return (
        <Modal
            isModalOpen={modalState.isOpen}
            setIsModalOpen={onModalClose}
            bodyOpenClassName={styles.body}
            className={styles.modal}
            overlayClassName={{
                base: styles.overlay,
                afterOpen: styles.overlayAfterOpen,
                beforeClose: styles.overlayBeforeClose,
            }}
        >
            <div className={styles.modalContent}>
                <Image
                    alt="menu close button"
                    className={styles.cross}
                    onClick={onModalClose}
                    role="button"
                    src={Cross}
                />
                {
                    toDoSelected ? (
                        <h2 className={styles.title}>Modificar tarea</h2>
                    ) : (
                        <h2 className={styles.title}>Crear nueva tarea</h2>
                    )
                }
                <Formik
                    initialValues={{
                        id: toDoSelected?.id || "",
                        title: toDoSelected?.title || "",
                        prio: toDoSelected?.prio || "",
                        status: toDoSelected?.status || "",
                        description: toDoSelected?.description || "",
                        date: toDoSelected?.date || "",
                    }}
                    validationSchema={ValidationSchema}
                    onSubmit={async (values, { setSubmitting }) => {
                        handleSubmit(values, setSubmitting);
                    }}
                >
                    <Form noValidate className={styles.form}>
                        <span className={styles.inputContainer}>
                            <Input name="title" placeholder="Título" />

                            <Select
                                helperText="Prioridad"
                                name="prio"
                                placeholder="Prioridad"
                            >
                                <option value={priority.H}>Alta</option>
                                <option value={priority.M}>Media</option>
                                <option value={priority.L}>Baja</option>
                            </Select>

                            <Select
                                helperText="Estado"
                                name="status"
                                placeholder="Estado"
                            >
                                <option value={status.N}>Nueva</option>
                                <option value={status.IP}>En progreso</option>
                                <option value={status.D}>Finalizada</option>
                            </Select>
                        </span>

                        <TextArea
                            customClass="textArea"
                            type="textarea"
                            name="description"
                            placeholder="Descripción"
                        />

                        <Button
                            type="submit"
                            disabled={isLoading}
                            customClass="submit"
                        >
                            {!isLoading ? (
                                toDoSelected ? (
                                    "Modificar Tarea"
                                ) : (
                                    "Crear Tarea"
                                )
                            ) : (
                                <Image
                                    alt="loading"
                                    className={styles.loader}
                                    src={Loader}
                                />
                            )}
                        </Button>
                    </Form>
                </Formik>
            </div>
        </Modal>
    );
};
